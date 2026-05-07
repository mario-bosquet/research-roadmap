import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function FloatingTranslateWidget() {
  useEffect(() => {
    const SCRIPT_ID = "google-translate-script";
    const STYLE_ID = "google-translate-style";

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        #goog-gt-tt,
        .goog-te-balloon-frame { display: none !important; }
        body { top: 0 !important; }
        .goog-tooltip, .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }
        #google_translate_element .goog-te-gadget {
          color: transparent !important;
          font-size: 0 !important;
          line-height: 0 !important;
        }
        #google_translate_element .goog-te-gadget > span { display: none !important; }
        #google_translate_element .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
          padding: 8px 12px !important;
          background: #0a0a0a !important;
          color: #f1f5f9 !important;
          border: 1px solid rgba(255,255,255,0.12) !important;
          border-radius: 10px !important;
          font-size: 13px !important;
          font-family: inherit !important;
          outline: none !important;
          cursor: pointer !important;
          min-width: 140px !important;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        #google_translate_element .goog-te-gadget .goog-te-combo:hover {
          border-color: rgba(73,210,124,0.5) !important;
          background: #101010 !important;
        }
        #google_translate_element .goog-te-gadget .goog-te-combo option {
          background: #0a0a0a !important;
          color: #f1f5f9 !important;
        }
      `;
      document.head.appendChild(style);
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 p-2 shadow-lg shadow-black/50 backdrop-blur-md">
      <div id="google_translate_element" />
    </div>
  );
}
