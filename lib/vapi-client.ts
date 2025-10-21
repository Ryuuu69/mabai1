const VAPI_GLOBAL_FALLBACKS = ["Vapi", "VapiWeb", "VapiWebSDK"] as const;

export type VapiEventHandler = (...args: any[]) => void;

export interface VapiClient {
  on: (event: string, handler: VapiEventHandler) => void;
  start: (assistantId: string) => Promise<any>;
  stop: () => Promise<any>;
  destroy?: () => void;
}

type LoaderResult = {
  client: VapiClient | null;
  error?: string;
};

const globalNamespace = typeof window !== "undefined" ? (window as any) : undefined;

const pendingLoads: Record<string, Promise<void>> = {};

async function loadScriptOnce(url: string, type?: string) {
  if (typeof document === "undefined") return;

  if (!pendingLoads[url]) {
    pendingLoads[url] = new Promise<void>((resolve, reject) => {
      const existing = document.querySelector(`script[data-vapi-sdk="${url}"]`) as HTMLScriptElement | null;
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("Failed to load existing Vapi SDK script")), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.dataset.vapiSdk = url;
      if (type) {
        script.type = type;
      }

      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          resolve();
        },
        { once: true },
      );

      script.addEventListener(
        "error",
        () => {
          script.dataset.loaded = "false";
          reject(new Error(`Failed to load Vapi SDK script from ${url}`));
        },
        { once: true },
      );

      document.head.appendChild(script);
    });
  }

  return pendingLoads[url];
}

function resolveVapiConstructor(globalName?: string): any {
  if (!globalNamespace) return undefined;

  if (globalName) {
    const direct = globalNamespace[globalName];
    if (typeof direct === "function") return direct;
    if (typeof direct?.default === "function") return direct.default;
  }

  for (const name of VAPI_GLOBAL_FALLBACKS) {
    const candidate = globalNamespace[name];
    if (typeof candidate === "function") return candidate;
    if (typeof candidate?.default === "function") return candidate.default;
  }

  if (typeof globalNamespace.default === "function") {
    return globalNamespace.default;
  }

  return undefined;
}

export async function createVapiClient(publicKey: string): Promise<LoaderResult> {
  if (typeof window === "undefined") {
    return { client: null };
  }

  const sdkUrl = process.env.NEXT_PUBLIC_VAPI_WEB_URL;
  const scriptType = process.env.NEXT_PUBLIC_VAPI_WEB_SCRIPT_TYPE;
  const explicitGlobal = process.env.NEXT_PUBLIC_VAPI_WEB_GLOBAL;

  if (!sdkUrl) {
    return {
      client: null,
      error: "Le SDK Vapi n'est pas configuré. Ajoutez NEXT_PUBLIC_VAPI_WEB_URL pour activer la démo vocale.",
    };
  }

  const preloadedConstructor = resolveVapiConstructor(explicitGlobal);
  if (preloadedConstructor) {
    return { client: new preloadedConstructor(publicKey) };
  }

  try {
    await loadScriptOnce(sdkUrl, scriptType);
  } catch (error) {
    console.error("[Vapi] SDK load failed", error);
    return {
      client: null,
      error: "Impossible de charger le SDK Vapi pour la démo vocale.",
    };
  }

  const ctor = resolveVapiConstructor(explicitGlobal);
  if (typeof ctor !== "function") {
    console.warn("[Vapi] SDK loaded but constructor was not found on window.");
    return {
      client: null,
      error: "SDK Vapi introuvable après chargement du script.",
    };
  }

  try {
    const instance = new ctor(publicKey);
    return { client: instance };
  } catch (error) {
    console.error("[Vapi] Failed to instantiate SDK", error);
    return {
      client: null,
      error: "Erreur lors de l'initialisation du SDK Vapi.",
    };
  }
}
