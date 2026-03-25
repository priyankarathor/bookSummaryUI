"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function BookDetailsHero({ book }) {
  const sectionRef = useRef(null);
  const leftPageRef = useRef(null);
  const rightPageRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12, opacity: 0 },
        {
          scale: 1,
          opacity: 0.28,
          duration: 1.8,
          ease: "power3.out",
        }
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white px-6 md:px-12 pt-28 pb-20"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${book.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(8%)",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-10 transition"
        >
          <ArrowLeft size={16} />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center min-h-[78vh]">
          {/* LEFT VISUAL AREA */}
          <div className="relative flex items-center justify-center min-h-[580px] perspective-[2400px]">
            {/* Ground shadow */}
            <div className="absolute bottom-8 h-12 w-[72%] rounded-full bg-black/70 blur-3xl" />

            {/* Center spine glow */}
            <div className="absolute h-[430px] md:h-[530px] w-[30px] rounded-full bg-[#d4a574]/10 blur-2xl opacity-80" />

            {/* Extra atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

            <div className="relative flex items-center justify-center">
              {/* LEFT BOOK COVER */}
              <div
                ref={leftPageRef}
                className="absolute z-20 w-[300px] md:w-[370px] h-[420px] md:h-[525px] overflow-hidden border border-white/10 shadow-[0_45px_140px_rgba(0,0,0,0.62)]"
                style={{
                  backgroundImage: `url(${book.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  transformOrigin: "right center",
                  backfaceVisibility: "hidden",
                  borderRadius: "20px 14px 18px 24px",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/12 via-transparent to-black/22" />
                <div className="absolute inset-y-0 left-0 w-[10px] bg-black/35" />
                <div className="absolute inset-y-0 right-0 w-[16px] bg-gradient-to-l from-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_18%,rgba(255,255,255,0.10)_36%,transparent_58%)] opacity-70" />
              </div>

              {/* RIGHT DETAIL PANEL */}
              <div
                ref={rightPageRef}
                className="absolute z-10 w-[295px] md:w-[360px] h-[415px] md:h-[520px] overflow-hidden border border-white/10 shadow-[0_45px_140px_rgba(0,0,0,0.64)]"
                style={{
                  transformOrigin: "left center",
                  backfaceVisibility: "hidden",
                  background:
                    "linear-gradient(145deg, rgba(28,28,28,0.95), rgba(10,10,10,0.98))",
                  backdropFilter: "blur(18px)",
                  borderRadius: "14px 24px 20px 16px",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,165,116,0.16),transparent_34%),linear-gradient(160deg,rgba(255,255,255,0.04),transparent_45%)]" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/8 to-transparent pointer-events-none" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.38em] text-[#d4a574]/75 mb-3">
                      Featured Edition
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
                      {book.title}
                    </h2>

                    <p className="text-sm text-white/55 mt-3">By {book.author}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Genre
                        </p>
                        <p className="mt-2 text-sm text-white/80">{book.genre}</p>
                      </div>

                      <div className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Pages
                        </p>
                        <p className="mt-2 text-sm text-white/80">
                          {book.pages}
                        </p>
                      </div>

                      <div className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Year
                        </p>
                        <p className="mt-2 text-sm text-white/80">{book.year}</p>
                      </div>

                      <div className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Rating
                        </p>
                        <p className="mt-2 text-sm text-[#d4a574] inline-flex items-center gap-1">
                          <Star size={13} fill="currentColor" />
                          {book.rating}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                        Short Note
                      </p>
                      <p className="text-sm leading-6 text-white/70 line-clamp-4">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#d4a574]/80">
              Book Details
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              {book.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span>{book.genre}</span>
              <span>•</span>
              <span>{book.pages} pages</span>
              <span>•</span>
              <span>{book.year}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[#d4a574]">
                <Star size={14} fill="currentColor" />
                {book.rating}
              </span>
            </div>

            <p className="max-w-2xl text-base md:text-lg leading-8 text-white/70">
              {book.description}
            </p>

            <div className="pt-3">
              <h3 className="text-lg font-medium mb-4 text-white">Highlights</h3>

              <div className="grid gap-3">
                {book.highlights?.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-white/70 backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 flex flex-wrap gap-4">
              <button className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.03] transition">
                Buy Now
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}