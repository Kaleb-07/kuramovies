import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir?: "ltr" | "rtl";
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "gb", dir: "ltr" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", flag: "et", dir: "ltr" },
  { code: "om", name: "Oromiffa", nativeName: "Afaan Oromo", flag: "et", dir: "ltr" },
  { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ", flag: "et", dir: "ltr" },
  { code: "so", name: "Somali", nativeName: "Soomaali", flag: "so", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "sa", dir: "rtl" },
  { code: "fr", name: "French", nativeName: "Français", flag: "fr", dir: "ltr" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: "ke", dir: "ltr" },
];

const setCookie = (name: string, value: string, days = 365) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

export const LanguageSelector: React.FC<{ variant?: "default" | "topbar" }> = ({ variant = "default" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScript = () => {
      if (window.google?.translate) {
        setIsLoaded(true);
        return;
      }
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
      window.googleTranslateElementInit = () => {
        if (!window.google?.translate?.TranslateElement) return;
        new window.google.translate.TranslateElement({
          pageLanguage: "en",
          includedLanguages: languages.map((l) => l.code).join(","),
          autoDisplay: false,
        }, "google_translate_element");
        setIsLoaded(true);
      };
    };

    loadScript();

    const savedLang = getCookie("GOOGLE_TRANSLATE_LANG");
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang);
      if (lang) setCurrentLang(lang);
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    if (lang.code === currentLang.code) {
      setIsOpen(false);
      return;
    }
    setIsTranslating(true);
    setIsOpen(false);
    setCookie("GOOGLE_TRANSLATE_LANG", lang.code);
    const domains = [window.location.hostname, "." + window.location.hostname, ""];
    if (lang.code === "en") {
      domains.forEach(d => {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${d ? ` domain=${d};` : ""}`;
      });
    } else {
      domains.forEach(d => {
        document.cookie = `googtrans=/en/${lang.code}; path=/;${d ? ` domain=${d};` : ""}`;
      });
    }
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <div className="relative notranslate" ref={dropdownRef}>
      <div id="google_translate_element" className="hidden"></div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTranslating}
        className={`group flex items-center gap-2 h-7 px-2.5 rounded transition-colors ${
          variant === "topbar"
            ? "bg-white/15 hover:bg-white/25 border border-white/30 text-white"
            : "h-9 px-3 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
        } ${isTranslating ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <div className="relative w-4 h-3 overflow-hidden rounded-sm ring-1 ring-white/20">
          <img
            src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
            alt={currentLang.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className={`text-xs font-semibold ${variant === "topbar" ? "text-white" : "text-slate-600"}`}>
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${variant === "topbar" ? "text-white/70" : "text-slate-400"}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.1 }}
            className="absolute right-0 mt-2 min-w-[180px] bg-white rounded-md border border-slate-200 shadow-md z-[200] p-1"
          >
            <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 text-sm rounded-sm transition-colors text-left group ${
                    currentLang.code === lang.code 
                      ? "bg-slate-100 text-slate-900" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative w-4 h-3 overflow-hidden rounded-sm ring-1 ring-slate-100">
                      <img
                        src={`https://flagcdn.com/w40/${lang.flag}.png`}
                        alt={lang.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{lang.nativeName}</span>
                  </div>
                  {currentLang.code === lang.code && (
                    <Check size={14} className="text-slate-900" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
