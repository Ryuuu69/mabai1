"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** ex: https://calendly.com/rayanmabrouk55/mabai-rdv */
  baseUrl: string;
  /** hauteur EXACTE du widget (px) dans la page */
  fixedHeight: number;
  /** 1 = taille normale */
  scale?: number;
  /** masque le ruban “Alimenté par Calendly” */
  hideBranding?: boolean;
  /** applique un filtre dark/inversion (utile pour thèmes sombres) */
  forceDarkHack?: boolean;
  /** rotation de teinte en degrés (utilisée si forceDarkHack est true) */
  hueRotateDeg?: number;
  containerClassName?: string;
};

export default function CalendlyInlineFixed({
  baseUrl,
  fixedHeight,
  scale = 1,
  hideBranding = true,
  forceDarkHack = true,
  hueRotateDeg = 205,
  containerClassName = "",
}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // état de verrouillage (écran d’accueil Calendly)
  const firstStepLockRef = useRef<boolean>(true);
  const rafRef = useRef<number | null>(null);

  // --- Handlers lock 1ère fenêtre ---
  const onWheel = (e: WheelEvent) => {
    if (!firstStepLockRef.current) return;
    e.preventDefault();
    containerRef.current && (containerRef.current.scrollTop = 0);
  };
  const onTouchMove = (e: TouchEvent) => {
    if (!firstStepLockRef.current) return;
    e.preventDefault();
    containerRef.current && (containerRef.current.scrollTop = 0);
  };
  const onScroll = () => {
    if (!firstStepLockRef.current) return;
    if (containerRef.current && containerRef.current.scrollTop !== 0) {
      containerRef.current.scrollTop = 0;
    }
  };
  const ensureLockLoop = () => {
    if (!firstStepLockRef.current || !containerRef.current) return;
    const el = containerRef.current;
    if (el.style.overflowY !== "hidden") el.style.overflowY = "hidden";
    if (el.scrollTop !== 0) el.scrollTop = 0;
    rafRef.current = requestAnimationFrame(ensureLockLoop);
  };
  const enableFirstStepLock = () => {
    firstStepLockRef.current = true;
    const el = containerRef.current;
    if (!el) return;
    el.style.overflowY = "hidden";
    el.scrollTop = 0;
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("scroll", onScroll, { passive: true });
    if (!rafRef.current) rafRef.current = requestAnimationFrame(ensureLockLoop);
  };
  const disableFirstStepLock = () => {
    firstStepLockRef.current = false;
    const el = containerRef.current;
    if (!el) return;
    el.style.overflowY = "auto";
    el.removeEventListener("wheel", onWheel);
    el.removeEventListener("touchmove", onTouchMove);
    el.removeEventListener("scroll", onScroll);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    // CSS Calendly (une seule fois)
    if (!document.querySelector('link[data-calendly="css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.setAttribute("data-calendly", "css");
      document.head.appendChild(link);
    }

    const init = () => {
      const w = window as unknown as {
        Calendly?: {
          initInlineWidget?: (opts: {
            url: string;
            parentElement: HTMLElement;
            prefill?: Record<string, unknown>;
            utm?: Record<string, unknown>;
          }) => void;
        };
      };

      const Calendly = w.Calendly;
      if (!Calendly?.initInlineWidget || !targetRef.current) return false;

      targetRef.current.innerHTML = "";

      // URL avec nos couleurs
      const url = (() => {
        try {
          const u = new URL(baseUrl);
          u.searchParams.set("background_color", "0F1222");
          u.searchParams.set("text_color", "E6E8F2");
          u.searchParams.set("primary_color", "7C3AED");
          u.searchParams.set("hide_event_type_details", "1");
          u.searchParams.set("hide_gdpr_banner", "1");
          u.searchParams.set("embed_type", "Inline");
          u.searchParams.set("embed_domain", window.location.hostname);
          return u.toString();
        } catch {
          return baseUrl;
        }
      })();

      Calendly.initInlineWidget({
        url,
        parentElement: targetRef.current,
        prefill: {},
        utm: {},
      });

      // util
      const getIframe = () =>
        (targetRef.current?.querySelector("iframe") as HTMLIFrameElement | null) ?? null;

      // Style de base (appliqué/re-appliqué)
      const applyBaseStyles = () => {
        const iframe = getIframe();
        if (!iframe) return false;

        iframe.style.display = "block";
        iframe.style.width = "100%";
        iframe.style.border = "0";
        iframe.setAttribute("scrolling", "no"); // on scrolle le CONTENEUR

        const innerNeeded = Math.ceil(fixedHeight / (scale || 1));
        iframe.style.height = `${innerNeeded}px`;
        iframe.style.transformOrigin = "top center";
        iframe.style.transform = `scale(${scale})`;

        // Force dark + accents (configurable)
        if (forceDarkHack) {
          iframe.style.filter = `invert(1) hue-rotate(${hueRotateDeg}deg) saturate(1.05) contrast(0.95)`;
        } else {
          iframe.style.filter = "";
        }

        return true;
      };

      // 1ʳe apparition de l’iframe
      const obs = new MutationObserver(() => {
        if (applyBaseStyles()) {
          enableFirstStepLock(); // lock actif au tout début
          obs.disconnect();
        }
      });
      obs.observe(targetRef.current, { childList: true, subtree: true });

      // Gestion des étapes Calendly
      const onMsg = (e: MessageEvent) => {
        // on applique les styles régulièrement (idempotent)
        applyBaseStyles();

        try {
          const data: any = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
          const ev: string | undefined = data?.event;
          const iframe = getIframe();
          if (!iframe || !containerRef.current) return;

          // Retour à l’accueil → re-lock + hauteur = fenêtre
          if (ev === "calendly.event_type_viewed" || ev === "calendly.profile_page_viewed") {
            enableFirstStepLock();
            const h = Math.ceil(fixedHeight / (scale || 1));
            iframe.style.height = `${h}px`;
            return;
          }

          // Toute autre étape → déverrouille
          if (ev && ev.startsWith("calendly.")) {
            if (ev !== "calendly.event_type_viewed" && ev !== "calendly.profile_page_viewed") {
              disableFirstStepLock();
              const big = Math.ceil(2400 / (scale || 1));
              const current = parseInt(iframe.style.height || "0", 10) || 0;
              if (big > current) iframe.style.height = `${big}px`;
            }
          }

          // Hauteur réelle envoyée par Calendly
          if (ev === "calendly.frameHeight" && typeof data?.payload?.height === "number") {
            const raw = data.payload.height as number;
            const inner = Math.ceil(raw / (scale || 1));
            iframe.style.height = `${inner}px`;

            if (raw * (scale || 1) > fixedHeight) {
              disableFirstStepLock();
            }
          }
        } catch {
          /* noop */
        }
      };
      window.addEventListener("message", onMsg);

      return () => {
        window.removeEventListener("message", onMsg);
      };
    };

    // Script Calendly (une seule fois)
    const existingScript = document.querySelector('script[data-calendly="js"]') as
      | HTMLScriptElement
      | null;

    if (!existingScript) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.setAttribute("data-calendly", "js");
      s.onload = () => init();
      document.body.appendChild(s);
    } else {
      // si déjà chargé, init immédiatement (ou à la fin de chargement si en cours)
      if ((existingScript as any).loaded) {
        init();
      } else {
        existingScript.addEventListener("load", () => init(), { once: true });
      }
    }

    // cleanup global
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const el = containerRef.current;
      if (el) {
        el.removeEventListener("wheel", onWheel);
        el.removeEventListener("touchmove", onTouchMove);
        el.removeEventListener("scroll", onScroll);
      }
    };
  }, [baseUrl, fixedHeight, scale, forceDarkHack, hueRotateDeg]);

  return (
    <div
      ref={containerRef}
      className={`relative ${containerClassName}`}
      style={{
        height: fixedHeight, // ← règle la hauteur depuis la page
        minWidth: 0,
        // le JS gère overflowY: hidden/auto selon l’étape
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* Conteneur cible pour Calendly */}
      <div ref={targetRef} className="w-full h-full" />

      {/* Cache visuel du ruban (en haut-droite) */}
      {hideBranding && (
        <div
          aria-hidden
          className="absolute top-0 right-0"
          style={{
            width: 108,
            height: 108,
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            backgroundColor: "#060606",
            zIndex: 10,
            pointerEvents: "auto",
          }}
        />
      )}
    </div>
  );
}
