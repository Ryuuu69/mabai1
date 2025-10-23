// lib/vapi-client.ts
export type VapiClient = {
  start: (assistantId: string, opts?: any) => Promise<void>;
  stop: () => Promise<void> | void;
  on: (event: string, cb: (...args: any[]) => void) => void;
  destroy: () => void;
};

let vapiModulePromise: Promise<any> | null = null;
async function loadVapiModule() {
  if (!vapiModulePromise) {
    vapiModulePromise = import("@vapi-ai/web"); // NPM uniquement (rapide + fiable)
  }
  return vapiModulePromise;
}

export async function createVapiClient(publicKey: string): Promise<VapiClient> {
  if (typeof window === "undefined") {
    throw new Error("Vapi doit être initialisé côté client.");
  }
  const mod = await loadVapiModule();
  const Vapi = mod?.default ?? mod;
  const instance = new Vapi(publicKey);
  return {
    start: (...args: any[]) => instance.start?.(...args),
    stop: () => instance.stop?.(),
    on: (event: string, cb: (...args: any[]) => void) => instance.on?.(event, cb),
    destroy: () => { try { instance.stop?.(); } catch {} },
  };
}
