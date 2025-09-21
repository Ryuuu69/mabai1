// components/integrations/CalendlyPopup.tsx
"use client";
import Script from "next/script";

export default function CalendlyPopup({ url, className = "" }: { url: string; className?: string }) {
  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <button
        onClick={() => (window as any)?.Calendly?.initPopupWidget({ url })}
        className={`px-5 py-3 rounded-lg border border-violet-500 text-violet-300 hover:bg-violet-500/10 transition ${className}`}
      >
        Prendre un RDV
      </button>
    </>
  );
}
