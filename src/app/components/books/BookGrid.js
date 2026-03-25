"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".book-item");
    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-[#050505] px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4a574]/80 mb-3">
              Collection
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Shelved With Style
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base text-white/55 leading-7">
            Each book card is designed to feel like a real premium edition
            standing on a cinematic shelf.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {books.map((book, index) => (
            <div key={book.id} className="book-item">
              <BookCard book={book} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}