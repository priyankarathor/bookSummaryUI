"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  FaPaperPlane,
  FaArrowRight,
  FaBookOpen,
  FaFeatherPointed,
  FaEnvelope,
  FaQuoteLeft,
  FaPenNib,
} from "react-icons/fa6";

gsap.registerPlugin(MotionPathPlugin);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactPage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const leftBookRef = useRef(null);
  const rightBookRef = useRef(null);
  const stripRef = useRef(null);

  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  const floatingBook1Ref = useRef(null);
  const floatingBook2Ref = useRef(null);
  const floatingBook3Ref = useRef(null);
  const floatingBook4Ref = useRef(null);

  const pen1Ref = useRef(null);
  const pen2Ref = useRef(null);

  const infinityPathRef = useRef(null);
  const planeRef = useRef(null);

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 70, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        leftBookRef.current,
        { opacity: 0, x: -80, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          delay: 0.12,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        rightBookRef.current,
        { opacity: 0, x: 80, rotateY: 10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          delay: 0.16,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        stripRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.25,
          ease: "power3.out",
        }
      );

      gsap.to(orb1Ref.current, {
        x: 90,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -80,
        y: -30,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3Ref.current, {
        x: 50,
        y: -45,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatingBook1Ref.current, {
        y: -18,
        rotate: -8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatingBook2Ref.current, {
        y: -14,
        rotate: 6,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatingBook3Ref.current, {
        y: -16,
        rotate: 7,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatingBook4Ref.current, {
        y: -12,
        rotate: -6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(pen1Ref.current, {
        y: -12,
        rotate: -7,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(pen2Ref.current, {
        y: -10,
        rotate: 6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const page = pageRef.current;

      const handleMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / innerWidth;
        const y = (e.clientY - innerHeight / 2) / innerHeight;

        gsap.to([leftBookRef.current, rightBookRef.current], {
          rotateY: x * 8,
          rotateX: y * -5,
          duration: 0.85,
          ease: "power3.out",
          transformPerspective: 1200,
        });

        gsap.to(orb1Ref.current, {
          xPercent: x * 20,
          yPercent: y * 18,
          duration: 1.1,
          ease: "power3.out",
        });

        gsap.to(orb2Ref.current, {
          xPercent: x * -22,
          yPercent: y * -18,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.to(orb3Ref.current, {
          xPercent: x * 16,
          yPercent: y * -16,
          duration: 1.1,
          ease: "power3.out",
        });
      };

      const handleLeave = () => {
        gsap.to([leftBookRef.current, rightBookRef.current], {
          rotateY: 0,
          rotateX: 0,
          duration: 0.9,
          ease: "power3.out",
        });

        gsap.to([orb1Ref.current, orb2Ref.current, orb3Ref.current], {
          xPercent: 0,
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
        });
      };

      page?.addEventListener("mousemove", handleMove);
      page?.addEventListener("mouseleave", handleLeave);

      return () => {
        page?.removeEventListener("mousemove", handleMove);
        page?.removeEventListener("mouseleave", handleLeave);
      };
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const runSendAnimation = () => {
    if (isSending) return;
    setIsSending(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setIsSending(false), 400);
      },
    });

    tl.set(planeRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 0,
    })
      .to(planeRef.current, {
        motionPath: {
          path: infinityPathRef.current,
          align: infinityPathRef.current,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        duration: 1.9,
        ease: "power1.inOut",
      })
      .to(
        planeRef.current,
        {
          scale: 0.15,
          opacity: 0,
          duration: 0.32,
          ease: "power2.out",
        },
        "-=0.15"
      );
  };

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#201712_0%,#0b0908_34%,#050505_70%,#000_100%)]" />

        <div
          ref={orb1Ref}
          className="absolute left-[-8%] top-[6%] h-[340px] w-[340px] rounded-full bg-[#e6d6c6]/10 blur-[130px]"
        />
        <div
          ref={orb2Ref}
          className="absolute right-[-8%] top-[16%] h-[360px] w-[360px] rounded-full bg-[#b08968]/12 blur-[140px]"
        />
        <div
          ref={orb3Ref}
          className="absolute bottom-[-10%] left-[35%] h-[280px] w-[280px] rounded-full bg-white/6 blur-[115px]"
        />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* Floating Books + Pens */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <FloatingBook
          refProp={floatingBook1Ref}
          className="left-[6%] top-[18%] hidden md:flex"
          rotate="-18deg"
        />
        <FloatingBook
          refProp={floatingBook2Ref}
          className="right-[7%] top-[22%] hidden lg:flex"
          rotate="16deg"
        />
        <FloatingBook
          refProp={floatingBook3Ref}
          className="left-[10%] bottom-[20%] hidden lg:flex"
          rotate="12deg"
        />
        <FloatingBook
          refProp={floatingBook4Ref}
          className="right-[10%] bottom-[16%] hidden md:flex"
          rotate="-14deg"
        />

        <FloatingPen refProp={pen1Ref} className="left-[18%] top-[46%] hidden lg:flex" />
        <FloatingPen refProp={pen2Ref} className="right-[18%] top-[54%] hidden lg:flex" reverse />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-10 pt-28 md:px-10 lg:px-16">
        <div ref={heroRef} className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#d0ac8d]/15 bg-white/[0.04] px-5 py-2 text-[10px] uppercase tracking-[0.38em] text-[#d7b89f] backdrop-blur-xl md:text-xs">
            Author Desk • Letters • Books • Conversations
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl lg:text-[5.8rem]">
            Send a letter into the world of books
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            For reader notes, literary invitations, interviews, rights inquiries,
            and messages that belong in an author’s world — not a normal inbox.
          </p>
        </div>
      </section>

      {/* Book Panels */}
      <section className="relative z-10 px-6 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.96fr_1.08fr]">
          {/* Left Book */}
          <div
            ref={leftBookRef}
            className="relative overflow-hidden rounded-[34px] border border-[#cfa786]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.38)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-full rounded-[33px] bg-[linear-gradient(180deg,#17120f,#0d0a09)] p-6 md:p-8">
              <div className="absolute inset-y-0 left-0 w-[18px] rounded-l-[33px] bg-[linear-gradient(180deg,#6f4e37,#2b1f17)] opacity-85" />
              <div className="absolute inset-y-6 left-[15px] w-[2px] bg-white/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(222,190,165,0.09),transparent_28%)]" />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative pl-4"
              >
                <motion.div variants={fadeUp}>
                  <p className="text-xs uppercase tracking-[0.34em] text-[#cfa786]">
                    From the Writing Room
                  </p>
                  <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    A quieter shelf for readers, editors, and letters.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/56">
                    This side is designed like a page from a private author desk —
                    intimate, warm, and built around books instead of generic contact content.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-8">
                  <div className="rounded-[26px] border border-[#cfa786]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(176,137,104,0.03))] p-5">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[#e7d5c4]/55">
                      Notebook Fragment
                    </p>
                    <div className="mt-4 flex gap-3">
                      <FaQuoteLeft className="mt-1 text-[#cfa786]/70" />
                      <p className="text-base leading-8 text-white/78">
                        Some letters do not arrive as messages. They arrive like
                        bookmarks left inside a life.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-8 space-y-4">
                  <motion.div variants={fadeUp}>
                    <ShelfItem
                      icon={<FaEnvelope />}
                      title="Reader Letters"
                      text="Share a page, a line, a reaction, or the memory a book left in you."
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <ShelfItem
                      icon={<FaBookOpen />}
                      title="Press & Literary Invitations"
                      text="For interviews, podcasts, features, festivals, and thoughtful appearances."
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <ShelfItem
                      icon={<FaFeatherPointed />}
                      title="Rights & Collaborations"
                      text="Publishing, translation, curated projects, and selected creative collaborations."
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Book */}
          <div
            ref={rightBookRef}
            className="relative overflow-hidden rounded-[34px] border border-[#cfa786]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.38)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-full rounded-[33px] bg-[linear-gradient(180deg,#17120f,#0d0a09)] p-6 md:p-8">
              <div className="absolute inset-y-0 left-0 w-[18px] rounded-l-[33px] bg-[linear-gradient(180deg,#7b573f,#2f2218)] opacity-85" />
              <div className="absolute inset-y-6 left-[15px] w-[2px] bg-white/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(222,190,165,0.09),transparent_28%)]" />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative pl-4"
              >
                <motion.div variants={fadeUp}>
                  <p className="text-xs uppercase tracking-[0.34em] text-[#cfa786]">
                    Write a Letter
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    Leave words worth keeping.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/56">
                    Not a normal form. More like a page waiting for a meaningful note.
                  </p>
                </motion.div>

                <motion.form
                  variants={fadeUp}
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    runSendAnimation();
                  }}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField label="Your Name" placeholder="Kapil Vaishnav" />
                    <InputField label="Email Address" placeholder="you@example.com" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField
                      label="Subject"
                      placeholder="Reader letter / Interview / Rights"
                    />
                    <InputField
                      label="Type of Message"
                      placeholder="Reader Note / Press / Event"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">
                      Your Letter
                    </label>
                    <textarea
                      rows={9}
                      placeholder="Write your message here..."
                      className="w-full rounded-[24px] border border-[#cfa786]/12 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(29,20,14,0.55))] px-5 py-4 text-sm text-white outline-none transition duration-500 placeholder:text-white/22 focus:border-[#c59a76]/60 focus:shadow-[0_0_0_1px_rgba(197,154,118,0.25),0_0_30px_rgba(197,154,118,0.08)]"
                    />
                  </div>

                  <div className="rounded-[24px] border border-[#cfa786]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(176,137,104,0.03))] p-4">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-white/35">
                      Best for
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/56">
                      Reader responses, literary invitations, interviews, book conversations,
                      translations, rights, and carefully chosen collaborations.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-md text-xs leading-6 text-white/36">
                      The simplest letters are often the ones remembered the longest.
                    </p>

                    <div className="relative">
                      <svg
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[88px] w-[210px] -translate-x-1/2 -translate-y-1/2 opacity-70"
                        viewBox="0 0 260 110"
                        fill="none"
                      >
                        <path
                          ref={infinityPathRef}
                          d="M24 55 C 48 12, 94 12, 128 55 C 162 98, 208 98, 236 55 C 208 12, 162 12, 128 55 C 94 98, 48 98, 24 55"
                          stroke="rgba(214,173,141,0.18)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeDasharray="4 5"
                        />
                      </svg>

                      <div
                        ref={planeRef}
                        className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7b89f]/25 bg-[#140f0c] text-[#d9b495] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                      >
                        <FaPaperPlane className="text-[12px]" />
                      </div>

                      <motion.button
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-[#c59a76]/35 bg-gradient-to-r from-[#eadccc] via-[#d7b597] to-[#9b6c48] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_16px_50px_rgba(176,137,104,0.24)] transition"
                      >
                        <span className="relative z-10">
                          {isSending ? "Sending..." : "Send Letter"}
                        </span>
                        <FaPaperPlane className="relative z-10 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]" />
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="relative z-10 px-6 pb-24 md:px-10 lg:px-16">
        <div
          ref={stripRef}
          className="mx-auto max-w-7xl rounded-[34px] border border-[#cfa786]/10 bg-white/[0.04] p-6 backdrop-blur-2xl md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#cfa786]">
                Literary Presence
              </p>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                Some conversations begin like a page opening for the first time.
              </h3>
            </div>

            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:hello@authorname.com"
              className="group inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/6 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Contact via Email
              <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FloatingBook({ refProp, className = "", rotate = "0deg" }) {
  return (
    <div
      ref={refProp}
      className={`absolute ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="relative h-20 w-16 rounded-[8px] border border-[#d7b89f]/20 bg-[linear-gradient(180deg,#2a211c,#120e0b)] shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-y-0 left-0 w-3 rounded-l-[8px] bg-[linear-gradient(180deg,#7b573f,#35261c)]" />
        <div className="absolute left-4 top-4 right-3 h-[1px] bg-white/10" />
        <div className="absolute left-4 top-7 right-5 h-[1px] bg-white/10" />
        <div className="absolute left-4 top-10 right-4 h-[1px] bg-white/10" />
        <div className="absolute bottom-3 right-3 text-[#d0a987]/70">
          <FaBookOpen className="text-xs" />
        </div>
      </div>
    </div>
  );
}

function FloatingPen({ refProp, className = "", reverse = false }) {
  return (
    <div
      ref={refProp}
      className={`absolute ${className} items-center gap-2`}
      style={{ transform: `rotate(${reverse ? "24deg" : "-22deg"})` }}
    >
      <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-[#6a4b38] via-[#c89c78] to-[#3b2b21]" />
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d7b89f]/18 bg-[#17110e] text-[#d7b89f]/80 shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
        <FaPenNib className="text-sm" />
      </div>
    </div>
  );
}

function ShelfItem({ icon, title, text }) {
  return (
    <div className="group flex gap-4 rounded-[24px] border border-[#cfa786]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 transition duration-500 hover:-translate-y-1 hover:border-[#c59a76]/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(176,137,104,0.05))]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d7b89f]/12 bg-white/6 text-[16px] text-[#d9b495] transition duration-500 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/38">
          {title}
        </p>
        <p className="mt-2 text-sm leading-7 text-white/58">{text}</p>
      </div>
    </div>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="h-14 w-full rounded-[18px] border border-[#cfa786]/12 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(29,20,14,0.55))] px-5 text-sm text-white outline-none transition duration-500 placeholder:text-white/22 focus:border-[#c59a76]/60 focus:shadow-[0_0_0_1px_rgba(197,154,118,0.25),0_0_30px_rgba(197,154,118,0.08)]"
      />
    </div>
  );
}