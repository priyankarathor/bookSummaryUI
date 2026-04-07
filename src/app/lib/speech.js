let utterance = null;
let synth = null;
let isPaused = false;

// 🌍 50+ international languages
export const INTERNATIONAL_LANGUAGES = [
  { code: "auto", label: "🌐 Auto Detect" },

  { code: "en-US", label: "English (US)" },
  { code: "en-GB", label: "English (UK)" },
  { code: "en-AU", label: "English (Australia)" },
  { code: "en-CA", label: "English (Canada)" },
  { code: "en-IN", label: "English (India)" },

  { code: "hi-IN", label: "Hindi" },
  { code: "bn-IN", label: "Bengali" },
  { code: "ta-IN", label: "Tamil" },
  { code: "te-IN", label: "Telugu" },
  { code: "mr-IN", label: "Marathi" },
  { code: "gu-IN", label: "Gujarati" },
  { code: "kn-IN", label: "Kannada" },
  { code: "ml-IN", label: "Malayalam" },
  { code: "pa-IN", label: "Punjabi" },
  { code: "or-IN", label: "Odia" },
  { code: "ur-PK", label: "Urdu" },

  { code: "fr-FR", label: "French (France)" },
  { code: "fr-CA", label: "French (Canada)" },
  { code: "de-DE", label: "German" },
  { code: "es-ES", label: "Spanish (Spain)" },
  { code: "es-MX", label: "Spanish (Mexico)" },
  { code: "it-IT", label: "Italian" },
  { code: "pt-PT", label: "Portuguese (Portugal)" },
  { code: "pt-BR", label: "Portuguese (Brazil)" },
  { code: "nl-NL", label: "Dutch" },
  { code: "sv-SE", label: "Swedish" },
  { code: "no-NO", label: "Norwegian" },
  { code: "da-DK", label: "Danish" },
  { code: "fi-FI", label: "Finnish" },
  { code: "pl-PL", label: "Polish" },
  { code: "cs-CZ", label: "Czech" },
  { code: "sk-SK", label: "Slovak" },
  { code: "hu-HU", label: "Hungarian" },
  { code: "ro-RO", label: "Romanian" },
  { code: "bg-BG", label: "Bulgarian" },
  { code: "el-GR", label: "Greek" },

  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "ja-JP", label: "Japanese" },
  { code: "ko-KR", label: "Korean" },
  { code: "th-TH", label: "Thai" },
  { code: "vi-VN", label: "Vietnamese" },
  { code: "id-ID", label: "Indonesian" },
  { code: "ms-MY", label: "Malay" },

  { code: "ar-SA", label: "Arabic (Saudi Arabia)" },
  { code: "ar-EG", label: "Arabic (Egypt)" },
  { code: "fa-IR", label: "Persian" },
  { code: "he-IL", label: "Hebrew" },
  { code: "sw-KE", label: "Swahili" },
  { code: "af-ZA", label: "Afrikaans" },

  { code: "tr-TR", label: "Turkish" },
  { code: "uk-UA", label: "Ukrainian" },
  { code: "ru-RU", label: "Russian" },
  { code: "sr-RS", label: "Serbian" },
  { code: "hr-HR", label: "Croatian" },
  { code: "sl-SI", label: "Slovenian" },
  { code: "lt-LT", label: "Lithuanian" },
  { code: "lv-LV", label: "Latvian" },
  { code: "et-EE", label: "Estonian" },
  { code: "is-IS", label: "Icelandic" },
  { code: "ga-IE", label: "Irish" },
  { code: "mt-MT", label: "Maltese" },
  { code: "cy-GB", label: "Welsh" },
];

const LANGUAGE_MAP = {
  en: "en-US",
  hi: "hi-IN",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-PT",
  ru: "ru-RU",
  ja: "ja-JP",
  ko: "ko-KR",
  zh: "zh-CN",
  ar: "ar-SA",
  nl: "nl-NL",
  sv: "sv-SE",
  no: "no-NO",
  da: "da-DK",
  fi: "fi-FI",
  pl: "pl-PL",
  tr: "tr-TR",
  cs: "cs-CZ",
  sk: "sk-SK",
  hu: "hu-HU",
  ro: "ro-RO",
  bg: "bg-BG",
  el: "el-GR",
  he: "he-IL",
  th: "th-TH",
  vi: "vi-VN",
  id: "id-ID",
  ms: "ms-MY",
  uk: "uk-UA",
  hr: "hr-HR",
  sr: "sr-RS",
  sl: "sl-SI",
  lt: "lt-LT",
  lv: "lv-LV",
  et: "et-EE",
  fa: "fa-IR",
  ur: "ur-PK",
  bn: "bn-IN",
  ta: "ta-IN",
  te: "te-IN",
  ml: "ml-IN",
  kn: "kn-IN",
  gu: "gu-IN",
  mr: "mr-IN",
  pa: "pa-IN",
  or: "or-IN",
  sw: "sw-KE",
  af: "af-ZA",
  is: "is-IS",
  ga: "ga-IE",
  mt: "mt-MT",
  cy: "cy-GB",
};

function detectLanguage(text, selectedLang) {
  if (selectedLang && selectedLang !== "auto") {
    if (LANGUAGE_MAP[selectedLang]) return LANGUAGE_MAP[selectedLang];
    return selectedLang;
  }

  if (/[\u0900-\u097F]/.test(text)) return "hi-IN";
  if (/[\u0980-\u09FF]/.test(text)) return "bn-IN";
  if (/[\u0A80-\u0AFF]/.test(text)) return "gu-IN";
  if (/[\u0A00-\u0A7F]/.test(text)) return "pa-IN";
  if (/[\u0B00-\u0B7F]/.test(text)) return "or-IN";
  if (/[\u0B80-\u0BFF]/.test(text)) return "ta-IN";
  if (/[\u0C00-\u0C7F]/.test(text)) return "te-IN";
  if (/[\u0C80-\u0CFF]/.test(text)) return "kn-IN";
  if (/[\u0D00-\u0D7F]/.test(text)) return "ml-IN";
  if (/[\u0600-\u06FF]/.test(text)) return "ar-SA";
  if (/[\u0750-\u077F]/.test(text)) return "ar-SA";
  if (/[\u0590-\u05FF]/.test(text)) return "he-IL";
  if (/[\u0400-\u04FF]/.test(text)) return "ru-RU";
  if (/[\u4E00-\u9FFF]/.test(text)) return "zh-CN";
  if (/[\u3040-\u309F]/.test(text) || /[\u30A0-\u30FF]/.test(text)) return "ja-JP";
  if (/[\uAC00-\uD7AF]/.test(text)) return "ko-KR";
  if (/[\u0E00-\u0E7F]/.test(text)) return "th-TH";

  return "en-US";
}

function getBestVoice(voices, lang, selectedVoiceName = "") {
  if (!voices || !voices.length) return null;

  const normalizedLang = lang.toLowerCase();
  const baseLang = normalizedLang.split("-")[0];

  if (selectedVoiceName) {
    const exactVoice = voices.find((v) => v.name === selectedVoiceName);
    if (exactVoice) return exactVoice;
  }

  return (
    voices.find(
      (v) =>
        v.lang?.toLowerCase() === normalizedLang &&
        v.name?.toLowerCase().includes("google")
    ) ||
    voices.find((v) => v.lang?.toLowerCase() === normalizedLang) ||
    voices.find(
      (v) =>
        v.lang?.toLowerCase().startsWith(baseLang) &&
        v.name?.toLowerCase().includes("google")
    ) ||
    voices.find((v) => v.lang?.toLowerCase().startsWith(baseLang)) ||
    voices[0]
  );
}

export function getVoicesForLanguage(voices, language) {
  if (!voices?.length) return [];

  if (!language || language === "auto") return voices;

  const resolvedLang = LANGUAGE_MAP[language] || language;
  const baseLang = resolvedLang.toLowerCase().split("-")[0];

  const filtered = voices.filter(
    (voice) =>
      voice.lang?.toLowerCase() === resolvedLang.toLowerCase() ||
      voice.lang?.toLowerCase().startsWith(baseLang)
  );

  return filtered.length ? filtered : voices;
}

export function speakText(
  text,
  language,
  voices,
  setProgress,
  setIsSpeaking,
  rate = 1,
  selectedVoiceName = ""
) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    alert("Speech not supported in this browser");
    return;
  }

  if (!text || !text.trim()) {
    alert("No text available to speak");
    return;
  }

  synth = window.speechSynthesis;

  if (synth.speaking || synth.pending || synth.paused) {
    synth.cancel();
  }

  const lang = detectLanguage(text, language);
  const selectedVoice = getBestVoice(voices, lang, selectedVoiceName);

  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = selectedVoice?.lang || lang;
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.onstart = () => {
    setIsSpeaking(true);
    isPaused = false;
  };

  utterance.onpause = () => {
    setIsSpeaking(true);
    isPaused = true;
  };

  utterance.onresume = () => {
    setIsSpeaking(true);
    isPaused = false;
  };

  utterance.onend = () => {
    setIsSpeaking(false);
    setProgress(0);
    isPaused = false;
  };

  utterance.onerror = (event) => {
    console.warn("Speech synthesis warning:", event);

    if (event.error === "interrupted" || event.error === "canceled") {
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(false);
    setProgress(0);
    isPaused = false;
  };

  utterance.onboundary = (event) => {
    if (typeof event.charIndex === "number" && text.length > 0) {
      const progress = Math.min(event.charIndex / text.length, 1);
      setProgress(progress);
    }
  };

  synth.speak(utterance);
}

export function togglePauseResume(setIsSpeaking) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  synth = window.speechSynthesis;

  if (synth.speaking && !synth.paused) {
    synth.pause();
    isPaused = true;
    setIsSpeaking(true);
  } else if (synth.paused) {
    synth.resume();
    isPaused = false;
    setIsSpeaking(true);
  }
}

export function stopSpeech(setIsSpeaking, setProgress) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  synth = window.speechSynthesis;
  synth.cancel();

  utterance = null;
  isPaused = false;
  setIsSpeaking(false);
  setProgress(0);
}