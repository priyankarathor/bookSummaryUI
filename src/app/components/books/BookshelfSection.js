"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

function ShelfBook({ book, index, isActive, onOpen, onClose, isMobile }) {
  const wrapRef = useRef(null);
  const bookRef = useRef(null);
  const faceRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    gsap.fromTo(
      wrapRef.current,
      {
        y: 40,
        opacity: 0,
        rotateY: -12,
      },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.9,
        delay: index * 0.08,
        ease: "power3.out",
      }
    );
  }, [index]);

  useEffect(() => {
    if (!wrapRef.current || !bookRef.current || !faceRef.current || !glowRef.current) return;

    const tl = gsap.timeline();

    if (isActive) {
      tl.to(
        wrapRef.current,
        {
          y: isMobile ? -6 : -12,
          duration: 0.28,
          ease: "power2.out",
        },
        0
      )
        .to(
          glowRef.current,
          {
            opacity: 1,
            scale: isMobile ? 1.12 : 1.25,
            duration: 0.35,
            ease: "power2.out",
          },
          0
        )
        .to(
          bookRef.current,
          {
            x: isMobile ? -2 : -6,
            duration: 0.25,
            ease: "power2.out",
          },
          0
        )
        .to(bookRef.current, {
          rotateY: isMobile ? -108 : -118,
          duration: 0.95,
          ease: "power4.out",
        })
        .fromTo(
          faceRef.current,
          {
            opacity: 0,
            x: isMobile ? -10 : -16,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.42,
            ease: "power3.out",
          },
          "-=0.42"
        );
    } else {
      tl.to(
        faceRef.current,
        {
          opacity: 0,
          x: isMobile ? -10 : -18,
          scale: 0.96,
          duration: 0.22,
          ease: "power2.inOut",
        },
        0
      )
        .to(bookRef.current, {
          rotateY: 0,
          x: 0,
          duration: 0.8,
          ease: "power4.inOut",
        })
        .to(
          glowRef.current,
          {
            opacity: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .to(
          wrapRef.current,
          {
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.45"
        );
    }
  }, [isActive, isMobile]);

  return (
    <div className="relative flex h-[300px] items-end justify-center sm:h-[340px] md:h-[400px]">
      <div
        ref={glowRef}
        className="absolute bottom-8 h-10 w-28 rounded-full bg-[#d4a574]/25 blur-3xl opacity-0 sm:h-12 sm:w-36 md:bottom-10 md:h-14 md:w-44"
      />

      <div
        ref={wrapRef}
        className="relative flex items-end justify-center"
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          zIndex: isActive ? 30 : 2,
        }}
      >
        {/* RIGHT OPEN PANEL */}
        <div
          ref={faceRef}
          className="
            absolute bottom-[10px] left-[58px]
            h-[220px] w-[160px]
            rounded-r-[14px] rounded-l-[8px]
            overflow-hidden border border-[#ead8ba]/10
            bg-gradient-to-br from-[#161210] via-[#0d0b0a] to-[#070707]
            opacity-0 shadow-[20px_20px_55px_rgba(0,0,0,0.52)]
            sm:bottom-[14px] sm:left-[68px] sm:h-[250px] sm:w-[180px]
            md:bottom-[16px] md:left-[78px] md:h-[285px] md:w-[200px]
          "
          style={{
            zIndex: 1,
            transformOrigin: "left center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,116,0.13),transparent_58%)]" />
          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#d4a574]/25" />
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/8" />

          <div className="relative flex h-full flex-col justify-between p-3 sm:p-4 md:p-5">
            <div>
              <p className="mb-2 text-[8px] uppercase tracking-[0.28em] text-[#d4a574]/80 sm:text-[9px] sm:tracking-[0.34em] md:mb-3 md:tracking-[0.38em]">
                Rare Edition
              </p>

              <h3 className="line-clamp-3 text-[14px] font-semibold leading-snug text-white sm:text-[16px] md:text-[19px]">
                {book.title}
              </h3>

              <p className="mt-1 text-[10px] text-white/55 sm:text-[11px] md:mt-2 md:text-[12px]">
                {book.author}
              </p>

              <p className="mt-3 line-clamp-4 text-[8px] leading-3 text-white/52 sm:text-[8.5px] md:mt-4 md:text-[9px]">
                {book.description ||
                  "A timeless story preserved in a beautifully crafted volume, resting among classics on a richly detailed shelf."}
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-[10px] text-[#d4a574]/80 sm:text-[11px] md:text-[12px]">
                {book.genre}
              </p>
              <p className="text-[9px] text-white/45 sm:text-[10px] md:text-[11px]">
                {book.pages} pages • {book.year}
              </p>

              <div className="pt-2 md:pt-3">
                <Link
                  href={`/books/${book.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#d4a574] to-[#bf8444] px-3 py-2 text-[10px] font-semibold text-black shadow-[0_8px_25px_rgba(212,165,116,0.28)] transition-all duration-300 hover:scale-[1.05] sm:px-4 sm:text-[11px] md:px-5 md:py-2.5 md:text-[12px]"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOOK */}
        <div
          ref={bookRef}
          onClick={() => (isActive ? onClose() : onOpen())}
          className="relative cursor-pointer"
          style={{
            width: isMobile ? "92px" : "128px",
            height: isMobile
              ? `${180 + (index % 3) * 14}px`
              : `${220 + (index % 3) * 18}px`,
            transformStyle: "preserve-3d",
            transformOrigin: "left center",
            zIndex: 3,
          }}
        >
          {/* Spine */}
          <div
            className="absolute inset-0 rounded-l-[10px] rounded-r-[3px] border border-[#b88952]/20 shadow-[8px_14px_35px_rgba(0,0,0,0.55)]"
            style={{
              background:
                book.spineColor ||
                "linear-gradient(180deg, #6b412d 0%, #4a2d20 35%, #241710 100%)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute inset-y-0 left-0 w-[10px] rounded-l-[10px] bg-black/20 sm:w-[12px]" />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-[#d4a574]/22" />

            <div className="absolute inset-x-0 top-4 flex justify-center sm:top-5">
              <div className="h-[1px] w-10 bg-[#d4a574]/40 sm:w-12 md:w-14" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-2">
              <p
                className="text-center text-[9px] uppercase tracking-[0.16em] text-[#e9d7bb] sm:text-[10px] md:text-[11px]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.18em",
                }}
              >
                {book.title}
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center sm:bottom-5">
              <div className="h-[1px] w-10 bg-[#d4a574]/40 sm:w-12 md:w-14" />
            </div>

            <div className="absolute left-3 right-3 top-8 h-[1px] bg-white/10 sm:top-9" />
            <div className="absolute bottom-8 left-3 right-3 h-[1px] bg-black/25 sm:bottom-9" />
          </div>

          {/* Cover */}
          <div
            className="absolute inset-0 overflow-hidden rounded-r-[14px] rounded-l-[4px] border border-white/10 shadow-[18px_20px_42px_rgba(0,0,0,0.65)] md:rounded-r-[16px]"
            style={{
              backgroundImage: `url(${book.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: isMobile
                ? "rotateY(90deg) translateZ(58px)"
                : "rotateY(90deg) translateZ(82px)",
              transformOrigin: "left center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/76" />
            <div className="absolute left-0 top-0 h-full w-[5px] bg-black/35" />
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/8 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 sm:p-3">
              <h3 className="line-clamp-2 text-[12px] font-semibold leading-tight text-white sm:text-[13px] md:text-sm">
                {book.title}
              </h3>
              <p className="mt-1 text-[10px] text-white/70 md:text-[11px]">{book.author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookshelfSection({ books = [] }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".shelf-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".shelf-sub",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.12,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".shelf-book-item",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.07,
          delay: 0.22,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const shelfBooks = books.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#070504] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bgshell.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,3,3,0.78),rgba(8,6,5,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,116,0.08),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,65,28,0.12),transparent_32%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <p className="shelf-title mb-3 text-[10px] uppercase tracking-[0.28em] text-[#d4a574]/80 sm:text-[11px] sm:tracking-[0.36em] md:mb-4 md:tracking-[0.42em]">
            Vintage Collection
          </p>

          <h2 className="shelf-title text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Books Resting on a Timeless Shelf
          </h2>

          <p className="shelf-sub mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:mt-5 sm:text-[15px] sm:leading-7 md:text-base">
            A cinematic bookshelf experience where every spine feels real, every
            cover opens with depth, and the whole section carries the warmth of
            a classic library.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[#ffffff10] bg-gradient-to-b from-[#1c130e]/95 via-[#120d0a]/96 to-[#0a0706]/98 px-3 pb-12 pt-10 shadow-[0_35px_120px_rgba(0,0,0,0.55)] sm:rounded-[28px] sm:px-5 sm:pb-14 sm:pt-12 md:rounded-[34px] md:px-12 md:pb-16 md:pt-14">
          <div className="absolute inset-x-3 bottom-8 top-4 rounded-[18px] border border-white/5 bg-[linear-gradient(180deg,rgba(65,36,21,0.20),rgba(20,12,8,0.10))] sm:inset-x-5 sm:top-5 sm:rounded-[22px] md:inset-x-6 md:top-6 md:bottom-10 md:rounded-[26px]" />
          <div className="absolute inset-x-6 top-8 h-[1px] bg-white/5 sm:inset-x-8 md:inset-x-10 md:top-10" />
          <div className="absolute inset-x-6 top-[84px] h-[1px] bg-white/[0.03] sm:inset-x-8 sm:top-[92px] md:inset-x-10 md:top-[100px]" />

          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/30 to-transparent md:w-32" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/30 to-transparent md:w-32" />

          {/* Books row */}
          <div
            className={`
              relative z-10 flex items-end gap-3 md:gap-6 lg:gap-8
              ${isMobile ? "overflow-x-auto pb-6 scrollbar-hide" : "justify-between"}
            `}
          >
            {shelfBooks.map((book, index) => (
              <div
                key={`${book.id}-${index}`}
                className="shelf-book-item relative flex justify-center"
                style={{
                  width: isMobile
                    ? activeIndex === index
                      ? "260px"
                      : "96px"
                    : activeIndex === index
                    ? "360px"
                    : "132px",
                  minWidth: isMobile
                    ? activeIndex === index
                      ? "260px"
                      : "96px"
                    : undefined,
                  transition: "width 0.48s cubic-bezier(0.22, 1, 0.36, 1)",
                  flexShrink: 0,
                }}
              >
                <ShelfBook
                  book={book}
                  index={index}
                  isActive={activeIndex === index}
                  onOpen={() => setActiveIndex(index)}
                  onClose={() => setActiveIndex(null)}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>

          {/* Shelf base */}
          <div className="absolute bottom-6 left-3 right-3 z-20 h-[14px] rounded-[12px] bg-gradient-to-r from-[#4f2d1b] via-[#8f5a32] to-[#4f2d1b] shadow-[0_10px_22px_rgba(0,0,0,0.55)] sm:left-5 sm:right-5 sm:h-[16px] md:bottom-8 md:left-6 md:right-6 md:h-[18px] md:rounded-[14px]" />
          <div className="absolute bottom-4 left-5 right-5 z-10 h-[8px] rounded-full bg-black/30 blur-md sm:left-6 sm:right-6 md:bottom-5 md:left-8 md:right-8 md:h-[10px]" />
          <div className="absolute bottom-0 left-2 right-2 h-8 rounded-b-[20px] bg-gradient-to-b from-[#6a4328] to-[#2b1a11] sm:left-3 sm:right-3 sm:h-9 md:left-4 md:right-4 md:h-10 md:rounded-b-[26px]" />

          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#d4a574]/[0.05] to-transparent md:h-24" />
        </div>
      </div>
    </section>
  );
}