"use client";

import { useEffect, useRef } from "react";
 
import FooterSection from "../components/Footersection";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef(null);

  const heroRef = useRef(null);
  const heroInnerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const visualCardRef = useRef(null);

  const badgeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);

  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const grainRef = useRef(null);
  const shineRef = useRef(null);

  const aboutRef = useRef(null);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const manifestoRef = useRef(null);
  const manifestoTitleRef = useRef(null);
  const manifestoTextRef = useRef(null);

  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          descRef.current,
          btnsRef.current,
          rightRef.current,
        ],
        { opacity: 0, y: 80 }
      );

      gsap.set(visualCardRef.current, {
        rotateY: -8,
        rotateX: 4,
        transformPerspective: 1600,
      });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7 })
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.95 }, "-=0.25")
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
        .to(line3Ref.current, { opacity: 1, y: 0, duration: 1 }, "-=0.65")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
        .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.75 }, "-=0.45")
        .to(
          rightRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
          },
          "-=0.85"
        )
        .to(
          visualCardRef.current,
          {
            rotateY: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        );

      gsap.to(orb1Ref.current, {
        x: 35,
        y: -24,
        scale: 1.18,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -26,
        y: 18,
        scale: 0.92,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3Ref.current, {
        y: -16,
        scale: 1.08,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(grainRef.current, {
        backgroundPosition: "220px 180px",
        ease: "none",
        duration: 8,
        repeat: -1,
      });

      gsap.to(shineRef.current, {
        xPercent: 260,
        duration: 6,
        repeat: -1,
        ease: "none",
      });

      gsap.to(visualCardRef.current, {
        y: -10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 1.2,
            pin: true,
          },
        })
        .to(leftRef.current, {
          y: -80,
          opacity: 0.42,
          scale: 0.96,
        })
        .to(
          rightRef.current,
          {
            y: -35,
            scale: 1.1,
            rotateY: 7,
            rotateX: -4,
          },
          0
        )
        .to(
          heroInnerRef.current,
          {
            filter: "blur(1px)",
          },
          0.1
        );

      gsap.fromTo(
        aboutLeftRef.current,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        aboutRightRef.current,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        manifestoRef.current,
        { opacity: 0, y: 90, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        manifestoTitleRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        manifestoTextRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 84%",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 84%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const card = visualCardRef.current;

    if (!hero || !left || !right || !card) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;

      gsap.to(left, {
        x: xPercent * 14,
        y: yPercent * 8,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(right, {
        x: xPercent * 20,
        y: yPercent * 14,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(card, {
        x: xPercent * 28,
        y: yPercent * 18,
        rotateY: xPercent * 14,
        rotateX: -yPercent * 10,
        transformPerspective: 1600,
        transformOrigin: "center center",
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to([left, right, card], {
        x: 0,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#020202] text-white"
    >
      

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-28 pb-16"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_24%)]" />

          <div
            ref={orb1Ref}
            className="absolute top-[-120px] left-[-90px] h-[380px] w-[380px] rounded-full bg-[#d79a5c]/18 blur-[130px]"
          />
          <div
            ref={orb2Ref}
            className="absolute bottom-[-120px] right-[-110px] h-[430px] w-[430px] rounded-full bg-[#8b5528]/18 blur-[150px]"
          />
          <div
            ref={orb3Ref}
            className="absolute top-[30%] left-[48%] h-[190px] w-[190px] rounded-full bg-white/7 blur-[120px]"
          />

          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:84px_84px]" />

          <div
            ref={grainRef}
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.7) 0.6px, transparent 0.6px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div
          ref={heroInnerRef}
          className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center"
        >
          <div ref={leftRef}>
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full border border-[#8b5d35] bg-white/5 px-4 py-2 text-xs md:text-sm uppercase tracking-[0.24em] text-[#d5a06b] backdrop-blur-xl"
            >
              <Sparkles size={14} />
              About The Author
            </div>

            <h1
              ref={line1Ref}
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[6.3rem] font-semibold leading-[0.9] tracking-[-0.06em]"
            >
              She writes
            </h1>

            <h1
              ref={line2Ref}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.3rem] font-semibold leading-[0.9] tracking-[-0.06em]"
            >
              with silence.
            </h1>

            <h1
              ref={line3Ref}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.3rem] font-semibold leading-[0.9] tracking-[-0.06em] bg-gradient-to-r from-[#ffd8ac] via-[#d99c59] to-[#8c5628] bg-clip-text text-transparent"
            >
              with soul.
            </h1>

            <p
              ref={descRef}
              className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-white/66"
            >
              Priyanka’s stories live in emotion, softness, beauty, and the kind
              of feeling that stays after the final page. This page is built to
              feel like a cinematic author introduction — not a standard about
              layout.
            </p>

            <div ref={btnsRef} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="group inline-flex items-center gap-2 rounded-full border border-[#b77a46] bg-[#d39a61] px-7 py-3.5 text-sm md:text-base font-semibold text-black transition duration-300 hover:scale-[1.04] hover:shadow-[0_0_35px_rgba(211,154,97,0.35)]"
              >
                Explore Books
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm md:text-base font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Contact Author
              </Link>
            </div>
          </div>

          <div ref={rightRef} className="relative mx-auto w-full max-w-[600px]">
            <div ref={visualCardRef} className="relative perspective-[1800px]">
              <div className="absolute -inset-10 rounded-[3.2rem] bg-gradient-to-br from-[#efb67c]/20 via-white/5 to-[#8c5529]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.05] p-4 md:p-5 shadow-[0_40px_160px_rgba(0,0,0,0.58)] backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-0 z-20 opacity-30">
                  <div
                    ref={shineRef}
                    className="absolute -left-1/3 top-0 h-full w-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#080808] via-[#040404] to-[#1a120d]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(215,154,92,0.18),transparent_35%)]" />
                  <div className="absolute inset-0 opacity-35 bg-[linear-gradient(145deg,transparent,rgba(255,255,255,0.08),transparent)]" />

                  <div className="absolute left-[8%] top-[10%] h-[34%] w-[34%] rounded-full border border-white/10 animate-floatSlow" />
                  <div className="absolute right-[10%] top-[14%] h-[16%] w-[16%] rounded-full border border-white/10 animate-floatSlowSlow" />
                  <div className="absolute left-[24%] top-[24%] h-[42%] w-[42%] rounded-full border border-[#d79a5c]/20 animate-spinSlow" />
                  <div className="absolute right-[14%] bottom-[24%] h-[18%] w-[18%] rounded-full bg-white/[0.03] blur-2xl animate-pulse" />

                  <div className="absolute inset-x-0 bottom-0 top-[16%] flex items-end justify-center">
                    <div className="relative h-[82%] w-[68%] rounded-t-[999px] bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent blur-[1px]" />
                  </div>

                  <div className="absolute inset-x-[18%] top-[18%] h-[18%] rounded-full bg-gradient-to-b from-white/[0.10] to-transparent blur-2xl animate-breatheSlow" />
                  <div className="absolute inset-x-[22%] bottom-[18%] h-[28%] rounded-[50%] bg-[#d39a61]/[0.08] blur-3xl animate-breatheSlowAlt" />

                  <div
                    className="absolute inset-0 opacity-[0.08] mix-blend-screen"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.8) 0.6px, transparent 0.6px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

                  <div className="absolute left-6 right-6 bottom-6 z-10">
                    <p className="text-sm uppercase tracking-[0.28em] text-[#d8a36e]">
                      Priyanka
                    </p>

                    <h2 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
                      A world of feeling.
                    </h2>

                    <p className="mt-4 max-w-sm text-sm md:text-base leading-7 text-white/72">
                      A cinematic author presence shaped by softness, elegance,
                      silence, and emotional depth.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Emotion", "that stays"],
                    ["Silence", "that speaks"],
                    ["Soul", "in every line"],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                    >
                      <p className="text-lg font-semibold text-[#f1c38f]">
                        {item[0]}
                      </p>
                      <p className="mt-1 text-xs text-white/50">{item[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="px-6 md:px-10 lg:px-16 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
          <div ref={aboutLeftRef}>
            <p className="text-sm uppercase tracking-[0.24em] text-[#cb9260]">
              About
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.04em]">
              More than biography.
              <span className="block text-white/50">A living presence.</span>
            </h2>
          </div>

          <div
            ref={aboutRightRef}
            className="space-y-6 text-white/70 text-lg leading-9"
          >
            <p>
              Priyanka writes with emotional clarity and quiet intensity. Her
              work lives between softness and depth — where words feel intimate,
              elegant, and deeply human.
            </p>
            <p>
              She is not interested in noise. She is interested in feeling. In
              the pause after a sentence. In the warmth a page can leave behind.
              In stories that remain with the reader long after they are closed.
            </p>
            <p>
              That is why this page stays minimal, spacious, and cinematic —
              more atmosphere, more presence, less clutter.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-8 md:py-14">
        <div
          ref={manifestoRef}
          className="max-w-7xl mx-auto rounded-[2.8rem] border border-white/10 bg-white/[0.04] p-8 md:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-[#ce9562]">
            Writing Philosophy
          </p>

          <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div ref={manifestoTitleRef}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.04em]">
                A story should
                <span className="block text-white/50">not just be read.</span>
                <span className="block bg-gradient-to-r from-[#ffd8ab] via-[#d99c59] to-[#8c5628] bg-clip-text text-transparent">
                  It should be felt.
                </span>
              </h2>
            </div>

            <div
              ref={manifestoTextRef}
              className="space-y-6 text-white/70 text-lg leading-9"
            >
              <p>
                Every line should carry mood. Every chapter should hold weight.
                Every story should leave a trace.
              </p>
              <p>
                Priyanka’s writing stands for beauty in language, honesty in
                emotion, and a quiet kind of power that never needs to shout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div ref={quoteRef} className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.26em] text-[#d39a61]">
            A Note From Priyanka
          </p>
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.18] tracking-[-0.04em] max-w-5xl mx-auto">
            “I write for the reader who wants something beautiful, quiet, and
            unforgettable.”
          </h2>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div
          ref={ctaRef}
          className="max-w-7xl mx-auto border-t border-white/10 pt-10 md:pt-14"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#cb9260]">
                Begin The Journey
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.04em]">
                Step into Priyanka’s
                <span className="block text-white/50">world of stories.</span>
              </h2>
            </div>

            <Link
              href="/books"
              className="group inline-flex items-center gap-2 rounded-full border border-[#b77b47] bg-[#d39a61] px-7 py-4 text-black font-semibold transition duration-300 hover:scale-[1.04] hover:shadow-[0_0_35px_rgba(211,154,97,0.35)]"
            >
              View Collection
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

       
    </main>
  );
}