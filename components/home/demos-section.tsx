"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneOff, Play, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import { createVapiClient, VapiClient } from "@/lib/vapi-client";

// Si ton alias "@" n'est pas configuré dans tsconfig.json, remplace les imports "@/..." par des chemins relatifs.

export function DemosSection() {
  // === Config Vapi (mabai) ===
  const PUBLIC_KEY   = "53845ee0-60ca-4269-bcdb-20ac91f1bb5d";
  const ASSISTANT_ID = "aff6b1c8-325f-48f1-8fa7-5f466144d066";

  // État UI
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [starting, setStarting] = useState(false);

  // SDK state
  const vapiRef = useRef<VapiClient | null>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [sdkError, setSdkError] = useState<string | null>(null);

  // Helper: supporte les 2 signatures de createVapiClient (client direct OU {client,error})
  function resolveClient(result: any): { client: VapiClient | null; error?: string } {
    if (!result) return { client: null, error: "SDK Vapi indisponible" };
    // cas 1: client direct (a des méthodes start/stop/on)
    if (typeof result?.start === "function" && typeof result?.on === "function") {
      return { client: result as VapiClient };
    }
    // cas 2: objet { client, error }
    if (result?.client || result?.error) {
      return { client: result.client ?? null, error: result.error };
    }
    return { client: null, error: "SDK Vapi indisponible" };
  }

  // Chargement SDK côté client (NPM only recommandé)
  useEffect(() => {
    let mounted = true;
    setSdkReady(false);
    setSdkError(null);

    (async () => {
      try {
        const res = await createVapiClient(PUBLIC_KEY);
        if (!mounted) return;

        const { client, error } = resolveClient(res);
        if (!client) {
          setSdkError(error ?? "SDK Vapi indisponible");
          return;
        }

        vapiRef.current = client;
        setSdkReady(true);

        client.on("call-start", () => {
          setStarting(false);
          setCallActive(true);
        });
        client.on("call-end", () => {
          setStarting(false);
          setCallActive(false);
        });
        client.on("error", (e: any) => {
          console.error("[Vapi] error:", e);
          setStarting(false);
          setCallActive(false);
        });
      } catch (err) {
        console.error("[Vapi] init error:", err);
        setSdkError("SDK Vapi indisponible");
      }
    })();

    return () => {
      mounted = false;
      try {
        vapiRef.current?.stop?.();
        vapiRef.current?.destroy?.();
      } catch {
        // noop
      }
    };
  }, []);

  // Toggle appel
  const handleVoiceClick = async () => {
    const client = vapiRef.current;
    if (!client) {
      setSdkError((prev) => prev ?? "La démo vocale est temporairement indisponible.");
      return;
    }

    if (callActive || starting) {
      // Raccrocher
      trackEvent?.(TRACKING_EVENTS?.DEMO_CALL_CLICK, { demo_type: "voice_agent", action: "stop" });
      try {
        await client.stop();
      } catch (e) {
        console.warn("[Vapi] stop error:", e);
      } finally {
        setCallActive(false);
        setStarting(false);
      }
      return;
    }

    // Démarrer
    setStarting(true);
    trackEvent?.(TRACKING_EVENTS?.DEMO_CALL_CLICK, { demo_type: "voice_agent", action: "start" });
    try {
      await client.start(ASSISTANT_ID);
    } catch (e) {
      console.error("[Vapi] start error:", e);
      setStarting(false);
    }
  };

  return (
    <section id="demos" className="py-20 lg:py-28 bg-[#0F1222]">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testez nos solutions{" "}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              en direct
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Découvrez concrètement comment nos solutions transforment vos processus de vente
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo Agent Vocal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-[#0B0B10] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-violet-500/10 to-violet-700/10 rounded-full border border-violet-500/20 w-fit">
                  <Volume2 className="h-8 w-8 text-violet-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Agent Vocal IA</CardTitle>
                <CardDescription className="text-[#C7CAD9]">
                  Parlez en direct avec notre agent IA — qualification & prise de RDV automatiques
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <Button
                  onClick={handleVoiceClick}
                  className={`w-full ${
                    callActive || starting
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-violet-600 hover:bg-violet-700"
                  } text-white`}
                  size="lg"
                  disabled={starting || !sdkReady}
                >
                  {!sdkReady && !sdkError ? (
                    <>
                      <Volume2 className="mr-2 h-5 w-5" />
                      Initialisation…
                    </>
                  ) : callActive || starting ? (
                    <>
                      <PhoneOff className="mr-2 h-5 w-5" />
                      {starting ? "Connexion…" : "Raccrocher"}
                    </>
                  ) : sdkError ? (
                    <>
                      <Volume2 className="mr-2 h-5 w-5" />
                      Indisponible
                    </>
                  ) : (
                    <>
                      <Volume2 className="mr-2 h-5 w-5" />
                      Parler avec l’agent
                    </>
                  )}
                </Button>

                <div className="mt-4 text-xs text-[#A7ABBE]">
                  {sdkError
                    ? sdkError
                    : "Autorisez l’accès au micro quand votre navigateur le demande."}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Demo Workflow (placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-[#0B0B10] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-violet-500/10 to-violet-700/10 rounded-full border border-violet-500/20 w-fit">
                  <Play className="h-8 w-8 text-violet-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Workflow Automatisé</CardTitle>
                <CardDescription className="text-[#C7CAD9]">
                  Voyez comment un lead devient client grâce à nos automatisations
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="relative aspect-video bg-[#0F1222] rounded-lg border border-[#1E2235] flex items-center justify-center">
                  {!isVideoPlaying ? (
                    <Button
                      onClick={() => setIsVideoPlaying(true)}
                      variant="ghost"
                      className="absolute inset-0 w-full h-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <div className="text-center">
                        <div className="mx-auto mb-2 p-3 bg-violet-500 rounded-full">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                        <p className="text-white font-medium">Lancer la démo</p>
                      </div>
                    </Button>
                  ) : (
                    <div className="text-center p-8">
                      <div className="animate-pulse text-violet-400 mb-4">
                        <Play className="h-12 w-12 mx-auto" />
                      </div>
                      <p className="text-white">Démo en cours...</p>
                      <p className="text-[#C7CAD9] text-sm mt-2">
                        Lead → Qualification → CRM → SMS/Email → RDV
                      </p>
                    </div>
                  )}
                </div>

                <div className="text-xs text-[#C7CAD9] space-y-1 mt-6">
                  <p>• Lead capturé automatiquement</p>
                  <p>• Envoi dans le CRM en temps réel</p>
                  <p>• Séquences SMS/Email personnalisées</p>
                  <p>• Rappels et follow-up automatiques</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
