// lib/vapi-client.ts

export type VapiClient = {
  start: (assistantId: string, opts?: any) => Promise<void>;
  stop: () => Promise<void> | void;
  on: (event: string, cb: (...args: any[]) => void) => void;
  destroy: () => void;
};

type CreateResult = { client: VapiClient | null; error?: string };

function wrapInstance(instance: any): VapiClient {
  return {
    start: (...args: any[]) => instance.start?.(...args),
    stop: () => instance.stop?.(),
    on: (event: string, cb: (...args: any[]) => void) => instance.on?.(event, cb),
    destroy: () => {
      try { instance.stop?.(); } catch {}
    },
  };
}

export async function createVapiClient(publicKey: string): Promise<CreateResult> {
  if (typeof window === "undefined") {
    return { client: null, error: "Vapi doit être initialisé côté client." };
  }

  // 1) Essai via paquet NPM
  try {
    const mod: any = await import("@vapi-ai/web");
    const Vapi = mod?.default ?? mod;
    const instance = new Vapi(publicKey); // aucune URL requise
    return { client: wrapInstance(instance) };
  } catch (e) {
    console.warn("[Vapi] Import NPM échoué, tentative CDN ESM…", e);
  }

  // 2) Fallback CDN (au cas où)
  try {
    const mod: any = await import("https://esm.sh/@vapi-ai/web");
    const Vapi = mod?.default ?? mod;
    const instance = new Vapi(publicKey);
    return { client: wrapInstance(instance) };
  } catch (e) {
    console.error("[Vapi] Import CDN ESM échoué:", e);
    return { client: null, error: "SDK Vapi indisponible pour le moment." };
  }
}
