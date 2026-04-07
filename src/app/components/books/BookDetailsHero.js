"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { translateTextAPI } from "../../lib/translate";
import {
  speakText,
  togglePauseResume,
  stopSpeech,
  INTERNATIONAL_LANGUAGES,
  getVoicesForLanguage,
} from "../../lib/speech";

export default function BookDetailsHero({ book }) {
  const sectionRef = useRef(null);
  const leftPageRef = useRef(null);
  const rightPageRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  const [language, setLanguage] = useState("auto");
  const [translated, setTranslated] = useState(null);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12, opacity: 0 },
        { scale: 1, opacity: 0.28, duration: 1.8, ease: "power3.out" }
      );

      gsap.fromTo(
        leftPageRef.current,
        { rotateY: -105, x: 130, y: 24, rotateZ: -5, opacity: 0 },
        {
          rotateY: -22,
          rotateZ: -6,
          x: -138,
          y: -10,
          opacity: 1,
          duration: 1.45,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        rightPageRef.current,
        { rotateY: 102, x: -120, y: -14, rotateZ: 3, opacity: 0 },
        {
          rotateY: 14,
          rotateZ: 4,
          x: 152,
          y: 18,
          opacity: 1,
          duration: 1.45,
          delay: 0.06,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        contentRef.current.children,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          delay: 0.28,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const speech = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = speech.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    loadVoices();

    if (typeof speech.onvoiceschanged !== "undefined") {
      speech.onvoiceschanged = loadVoices;
    }

    const timer = setTimeout(loadVoices, 500);

    return () => {
      clearTimeout(timer);
      speech.onvoiceschanged = null;
      speech.cancel();
    };
  }, []);

  useEffect(() => {
    setTranslated(null);
    setSelectedVoice("");
    stopSpeech(setIsSpeaking, setProgress);
  }, [language]);

  const voiceOptions = useMemo(() => {
    return getVoicesForLanguage(voices, language);
  }, [voices, language]);

  const getTranslateLangCode = (lang) => {
    if (!lang || lang === "auto") return "en";
    return lang.split("-")[0];
  };

  const cleanDescription = (book?.description || "").replace(/<[^>]+>/g, "");

  const handleTranslate = async () => {
    try {
      setLoading(true);

      const targetLang = getTranslateLangCode(language);

      const title =
        language === "auto"
          ? book?.title || ""
          : await translateTextAPI(book?.title || "", targetLang);

      const desc =
        language === "auto"
          ? cleanDescription
          : await translateTextAPI(cleanDescription, targetLang);

      const highlights =
        language === "auto"
          ? book?.highlights || []
          : await Promise.all(
              (book?.highlights || []).map((h) =>
                translateTextAPI(h, targetLang)
              )
            );

      setTranslated({
        title,
        description: desc,
        highlights,
      });
    } catch (error) {
      console.error("Translation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeak = () => {
    const text = translated?.description || cleanDescription;

    if (!text.trim()) {
      alert("No text available to speak");
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.speechSynthesis &&
      window.speechSynthesis.speaking
    ) {
      togglePauseResume(setIsSpeaking);
      return;
    }

    if (!voices.length) {
      alert("Voices are still loading. Please click again in a second.");
      return;
    }

    speakText(
      text,
      language,
      voices,
      setProgress,
      setIsSpeaking,
      rate,
      selectedVoice
    );
  };

  const handleStop = () => {
    stopSpeech(setIsSpeaking, setProgress);
  };

  const displayTitle = translated?.title || book?.title;
  const displayDescription = translated?.description || cleanDescription;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white px-6 md:px-12 pt-28 pb-20"
    >
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${book?.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-10"
        >
          <ArrowLeft size={16} />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative flex justify-center min-h-[500px] perspective-[2000px]">
            <div
              ref={leftPageRef}
              className="absolute w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${book?.cover})`,
                backgroundSize: "cover",
                transformOrigin: "right",
              }}
            />

            <div
              ref={rightPageRef}
              className="absolute w-[300px] h-[420px] rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl p-6"
              style={{ transformOrigin: "left" }}
            >
              <h4 className="text-xl font-semibold">{displayTitle}</h4>
              <p className="text-sm text-white/60 mt-2">{book?.author}</p>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold">
              {displayTitle}
            </h1>

            <div className="flex gap-4 text-sm text-white/60">
              <span>{book?.genre}</span>
              <span>•</span>
              <span>{book?.pages} pages</span>
              <span>•</span>
              <span>{book?.year}</span>
              <span className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                {book?.rating}
              </span>
            </div>

            <div className="max-w-2xl space-y-5">
              <p className="text-base md:text-lg leading-8 text-white/70">
                {displayDescription}
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-4 flex flex-col md:flex-row items-center gap-4 justify-between">
                <div className="flex gap-3 flex-wrap">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-black/60 border border-white/10 px-4 py-2 rounded-xl max-w-[220px]"
                  >
                    {INTERNATIONAL_LANGUAGES.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="bg-black/60 border border-white/10 px-4 py-2 rounded-xl max-w-[220px]"
                  >
                    <option value="">Default Voice</option>
                    {voiceOptions.map((voice, index) => (
                      <option key={`${voice.name}-${index}`} value={voice.name}>
                        {voice.name} ({voice.lang})
                      </option>
                    ))}
                  </select>

                  <select
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="bg-black/60 border border-white/10 px-4 py-2 rounded-xl"
                  >
                    <option value={0.75}>0.75x</option>
                    <option value={0.8}>0.8x</option>
                    <option value={1}>1x</option>
                    <option value={1.2}>1.2x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={1.75}>1.75x</option>
                    <option value={2}>2x</option>
                  </select>

                  <button
                    onClick={handleTranslate}
                    className="px-4 py-2 bg-[#d4a574] text-black rounded-xl"
                  >
                    {loading ? "..." : "Translate"}
                  </button>

                  <button
                    onClick={handleStop}
                    className="px-4 py-2 bg-black/60 border border-white/10 rounded-xl"
                  >
                    Stop
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSpeak}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSpeaking ? "bg-red-500" : "bg-white text-black"
                    }`}
                    title={isSpeaking ? "Pause / Resume" : "Speak"}
                  >
                    🔊
                  </button>

                  <div className="flex gap-[3px]">
                    {[...Array(20)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-[3px] rounded-full ${
                          isSpeaking
                            ? "bg-yellow-400 animate-pulse"
                            : "bg-white/30"
                        }`}
                        style={{
                          height: `${Math.random() * 20 + 5}px`,
                          opacity: progress > i / 20 ? 1 : 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="bg-white text-black px-6 py-3 rounded-full">
                Buy Now
              </button>
              <button className="border border-white/20 px-6 py-3 rounded-full">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}