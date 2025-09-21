"use client";

import { useEffect, useRef } from "react";

type Props = {
  baseUrl: string;         // ex: https://calendly.com/rayanmabrouk55/mabai-rdv
  fixedHeight: number;     // hauteur EXACTE du widget (px)
  scale?: number;          // 1 = taille normale
  hideBranding?: boolean;  // masque le ruban “Alimenté par Calendly”
  containerClassName?: string;
};

export default function CalendlyInlineFixed({
  baseUrl,
  fixedHeight,
  scale = 1,
  hideBranding = true,
  containerClassName = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // état de verrouillage (écran d’accueil)
  const firstStepLockRef = useRef<boolean>(true);
  const rafRef = useRef<number | null>(null);

  // --- Handlers lock 1ère fenêtre ---
  const onWheel = (e: WheelEvent) => {
    if (!firstStepLockRef.current) return;
    e.preventDefault();
    if (containerRef.current) containerRef.current.scrollTop = 0;
  };
  const onTouchMove = (e: TouchEvent) => {
    if (!firstStepLockRef.current) return;
    e.preventDefault();
    if (containerRef.current) containerRef.current.scrollTop = 0;
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
    el.removeEventListener("wheel", onWheel as any);
    el.removeEventListener("touchmove", onTouchMove as any);
    el.removeEventListener("scroll", onScroll as any);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    // CSS Calendly (une seule fois)
    if (!document.querySelector('link[data-calendly="css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.setAttribute("data-calendly", "css");
      document.head.appendChild(link);
    }

    const init = () => {
      // @ts-ignore
      const Calendly = (window as any).Calendly;
      if (!Calendly?.initInlineWidget || !ref.current) return false;

      ref.current.innerHTML = "";

      // URL avec nos couleurs (inchangé)
      const url = (() => {
        try {
          const u = new URL(baseUrl);
          u.searchParams.set("background_color", "0F1222");
          u.searchParams.set("text_color", "E6E8F2");
          u.searchParams.set("primary_color", "7C3AED");
          u.searchParams.set("hide_event_type_details", "1");
          u.searchParams.set("hide_gdpr_banner", "1");
          if (typeof window !== "undefined") {
            u.searchParams.set("embed_domain", window.location.hostname);
            u.searchParams.set("embed_type", "Inline");
          }
          return u.toString();
        } catch {
          return baseUrl;
        }
      })();

      Calendly.initInlineWidget({
        url,
        parentElement: ref.current,
        prefill: {},
        utm: {},
      });

      // util
      const getIframe = () =>
        (ref.current?.querySelector("iframe") as HTMLIFrameElement | null) || null;

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

        // Force dark + accents violets (inchangé)
        iframe.style.filter = "invert(1) hue-rotate(205deg) saturate(1.05) contrast(0.95)";

        return true;
      };

      // 1ʳe apparition de l’iframe
      const obs = new MutationObserver(() => {
        if (applyBaseStyles()) {
          enableFirstStepLock(); // lock actif au tout début
          obs.disconnect();
        }
      });
      obs.observe(ref.current, { childList: true, subtree: true });

      // Gestion des étapes Calendly
      const onMsg = (e: MessageEvent) => {
        applyBaseStyles();

        try {
          const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
          const ev = data?.event as string | undefined;
          const iframe = getIframe();
          if (!iframe || !containerRef.current) return;

          // --- Re-lock si on revient sur l'accueil ---
          if (ev === "calendly.event_type_viewed" || ev === "calendly.profile_page_viewed") {
            enableFirstStepLock();
            // à l’accueil, l’iframe = hauteur fenêtre (pas de scroll interne)
            const h = Math.ceil(fixedHeight / (scale || 1));
            iframe.style.height = `${h}px`;
            return;
          }

          // --- Déverrouille dès qu’on quitte l’accueil ---
          if (ev && ev.startsWith("calendly.")) {
            // tout event Calendly autre que les 2 ci-dessus => on passe en scrollable
            if (ev !== "calendly.event_type_viewed" && ev !== "calendly.profile_page_viewed") {
              disableFirstStepLock();
              // grande hauteur pour permettre le scroll même si Calendly ne poste pas frameHeight tout de suite
              const big = Math.ceil(2400 / (scale || 1));
              const current = parseInt(iframe.style.height || "0", 10) || 0;
              if (big > current) iframe.style.height = `${big}px`;
            }
          }

          // --- Si Calendly envoie sa vraie hauteur ---
          if (ev === "calendly.frameHeight" && typeof data?.payload?.height === "number") {
            const raw = data.payload.height;
            const inner = Math.ceil(raw / (scale || 1));
            iframe.style.height = `${inner}px`;

            // Si la hauteur réelle dépasse la fenêtre visible → on est clairement hors accueil
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

    // Script Calendly
    if (!document.querySelector('script[data-calendly="js"]')) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.setAttribute("data-calendly", "js");
      s.onload = () => init();
      document.body.appendChild(s);
    } else {
      init();
    }

    // cleanup global
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const el = containerRef.current;
      if (el) {
        el.removeEventListener("wheel", onWheel as any);
        el.removeEventListener("touchmove", onTouchMove as any);
        el.removeEventListener("scroll", onScroll as any);
      }
    };
  }, [baseUrl, fixedHeight, scale]);

  return (
    <div
      ref={containerRef}
      className={`relative ${containerClassName}`}
      style={{
        height: fixedHeight,       // ← règle la hauteur depuis la page
        minWidth: 0,
        // le JS gère overflowY: hidden/auto selon l’étape
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* Conteneur cible pour Calendly */}
      <div ref={ref} className="w-full h-full" />

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
          title=""
        />
      )}
    </div>
  );
}
