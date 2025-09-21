"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Play, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { trackEvent, TRACKING_EVENTS, DEMO_CONFIG } from "@/lib/constants";

export function DemosSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleCallClick = () => {
    trackEvent(TRACKING_EVENTS.DEMO_CALL_CLICK, { 
      demo_type: 'voice_agent',
      phone: DEMO_CONFIG.voiceAgentPhone 
    });
    window.open(`tel:${DEMO_CONFIG.voiceAgentPhone}`);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    trackEvent(TRACKING_EVENTS.DEMO_VIDEO_PLAY, { 
      demo_type: 'workflow_video',
      video_src: DEMO_CONFIG.workflowVideoSrc 
    });
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
            Testez nos solutions 
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}en direct
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
                <CardTitle className="text-2xl text-white mb-2">
                  Agent Vocal IA
                </CardTitle>
                <CardDescription className="text-[#C7CAD9]">
                  Appelez notre agent IA qui vous qualifiera et bookera un RDV automatiquement
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-[#0F1222] rounded-lg border border-[#1E2235]">
                    <p className="text-[#C7CAD9] text-sm mb-2">Numéro de démo :</p>
                    <p className="text-white font-mono text-lg">{DEMO_CONFIG.voiceAgentPhone}</p>
                  </div>
                  <div className="text-xs text-[#C7CAD9]">
                    <p>• Disponible 24/7</p>
                    <p>• Qualification automatique</p>
                    <p>• Booking direct dans le calendrier</p>
                  </div>
                </div>
                <Button 
                  onClick={handleCallClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Demo Workflow */}
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
                <CardTitle className="text-2xl text-white mb-2">
                  Workflow Automatisé
                </CardTitle>
                <CardDescription className="text-[#C7CAD9]">
                  Voyez comment un lead devient client grâce à nos automatisations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Video placeholder */}
                  <div className="relative aspect-video bg-[#0F1222] rounded-lg border border-[#1E2235] flex items-center justify-center">
                    {!isVideoPlaying ? (
                      <Button
                        onClick={handleVideoPlay}
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
                  
                  <div className="space-y-2">
                    <div className="text-xs text-[#C7CAD9]">
                      <p>• Lead capturé automatiquement</p>
                      <p>• Envoi dans le CRM en temps réel</p>
                      <p>• Séquences SMS/Email personnalisées</p>
                      <p>• Rappels et follow-up automatiques</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}