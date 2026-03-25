"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Star } from "lucide-react";

export default function BookCard({ book }) {
  const cardRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const cover = coverRef.current;

    if (!card || !cover) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 12;
      const rotateX = -((y / rect.height) - 0.5) * 12;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1200,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cover, {
        x: ((x / rect.width) - 0.5) * 8,
        y: ((y / rect.height) - 0.5) * 8,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(cover, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-[22px] border border-white/10 bg-[#0b0b0b] p-3 md:p-4 overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-transform max-w-[320px] mx-auto"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at center, ${book.accent}18 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[9px] uppercase tracking-[0.28em] text-white/40">
            {book.genre}
          </span>

          <span className="flex items-center gap-1 text-[11px] text-[#d4a574]">
            <Star size={12} fill="currentColor" />
            {book.rating}
          </span>
        </div>

        <div className="relative h-[200px] mb-3 flex items-end justify-center perspective-[1200px]">
          <div className="absolute bottom-2 h-6 w-[65%] bg-black/60 blur-2xl rounded-full" />

          <div
            ref={coverRef}
            className="relative w-[160px] h-[180px] rounded-r-[12px] rounded-l-[5px] overflow-hidden shadow-[16px_16px_40px_rgba(0,0,0,0.5)] border border-white/10"
            style={{
              backgroundImage: `url(${book.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotateY(-15deg) rotateX(2deg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/70" />
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-[2px] bg-white/20" />

            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-[8px] tracking-[0.25em] uppercase text-white/60 mb-1">
                Priyanka Collection
              </p>
              <h3 className="text-white text-base font-semibold leading-tight line-clamp-2">
                {book.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg md:text-xl font-semibold text-white leading-tight">
            {book.title}
          </h2>

          <p className="text-xs text-white/50">By {book.author}</p>

          <p className="text-xs leading-5 text-white/65 line-clamp-3">
            {book.shortDescription}
          </p>

          <div className="flex items-center justify-between pt-2 text-[11px] text-white/45">
            <span>{book.pages} pages</span>
            <span>{book.year}</span>
          </div>

          <Link
            href={`/books/${book.slug}`}
            className="inline-flex items-center gap-2 mt-3 rounded-full border border-white/15 px-3 py-2 text-[11px] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}