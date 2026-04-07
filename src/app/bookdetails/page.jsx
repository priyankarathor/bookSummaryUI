"use client";

import { useState, useEffect } from "react";
import { translateTextAPI } from "../lib/translate";
import { speakText } from "../lib/speech";

export default function Translator() {
  // ✅ STATIC TEXT HERE
  const staticText = "Success is not final, failure is not fatal: it is the courage to continue that counts.";

  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const languages = [
    { code: "hi", name: "Hindi" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
  ];

  useEffect(() => {
    const synth = window.speechSynthesis;
    const loadVoices = () => setVoices(synth.getVoices());
    synth.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const handleTranslate = async () => {
    setLoading(true);
    const res = await translateTextAPI(staticText, language); // ✅ use static text
    setTranslatedText(res);
    setLoading(false);
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl mt-6 mt-5">

      <p className="text-sm mb-3 text-gray-300">
        <strong>Original:</strong> {staticText}
      </p>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-2 mb-3 bg-black/50 rounded"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleTranslate}
        className="w-full py-2 bg-purple-500 rounded"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      <p className="mt-4 text-sm">
        {translatedText || "Translation here..."}
      </p>

      <button
        onClick={() =>
          speakText(translatedText, language, voices, setProgress)
        }
        className="w-full py-2 bg-green-500 mt-4 rounded"
      >
        🔊 Play Audio
      </button>

      <div className="w-full bg-gray-700 h-2 mt-3 rounded">
        <div
          className="bg-green-400 h-2"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}