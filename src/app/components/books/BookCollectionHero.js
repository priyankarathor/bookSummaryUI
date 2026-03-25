"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BookCollectionHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, rotateX: 30 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.3,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        subRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          delay: 0.25,
          ease: "power3.out",
        }
      );

      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] text-white pt-32 pb-20 px-6 md:px-12"
    >
      <div
        ref={glowRef}
        className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(212,165,116,0.5) 0%, rgba(212,165,116,0.0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="mb-4 text-[11px] md:text-xs uppercase tracking-[0.45em] text-[#d4a574]/80">
          Curated Collection
        </p>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight"
        >
          Stories That <br />
          Feel Alive
        </h1>

        <p
          ref={subRef}
          className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-white/60 leading-7"
        >
          A premium book collection experience with cinematic motion, luxurious
          dark visuals, and immersive storytelling design.
        </p>
      </div>
    </section>
  );
}