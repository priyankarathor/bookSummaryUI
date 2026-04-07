"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, ChevronRight, PenTool } from "lucide-react";
import gsap from "gsap";



const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Books", href: "/books" },
  { name: "Contact", href: "/contact" },
  {name: "bookpage" , href:"/bookdetails"}
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);
  const shellRef = useRef(null);
  const innerRef = useRef(null);
  const logoRef = useRef(null);
  const logoIconRef = useRef(null);
  const navRef = useRef(null);
  const actionsRef = useRef(null);
  const activePillRef = useRef(null);
  const navItemRefs = useRef([]);
  const mobileOverlayRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const mobileItemsRef = useRef([]);
  const mobileTlRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateActivePill);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActivePill);
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([logoRef.current, navRef.current, actionsRef.current], {
        opacity: 0,
        y: -24,
      });

      gsap.to([logoRef.current, navRef.current, actionsRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.to(logoIconRef.current, {
        y: -2,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    const inner = innerRef.current;
    if (!shell || !inner) return;

    gsap.to(shell, {
      paddingTop: scrolled ? 10 : 18,
      paddingBottom: scrolled ? 10 : 18,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(inner, {
      backgroundColor: scrolled ? "rgba(8,8,8,0.88)" : "rgba(10,10,10,0.68)",
      borderColor: scrolled
        ? "rgba(216,170,112,0.18)"
        : "rgba(255,255,255,0.08)",
      boxShadow: scrolled
        ? "0 18px 50px rgba(0,0,0,0.40)"
        : "0 10px 30px rgba(0,0,0,0.20)",
      duration: 0.35,
      ease: "power3.out",
    });

    updateActivePill();
  }, [scrolled]);

  useLayoutEffect(() => {
    updateActivePill();
  }, [pathname]);

  useEffect(() => {
    if (!mobilePanelRef.current || !mobileOverlayRef.current) return;

    gsap.set(mobilePanelRef.current, {
      display: "none",
      opacity: 0,
      y: -18,
    });

    gsap.set(mobileOverlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    mobileTlRef.current = gsap.timeline({ paused: true });

    mobileTlRef.current
      .set(mobilePanelRef.current, { display: "block" })
      .to(
        mobileOverlayRef.current,
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.2,
          ease: "power2.out",
        },
        0
      )
      .to(
        mobilePanelRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.34,
          ease: "power3.out",
        },
        0
      )
      .fromTo(
        mobileItemsRef.current,
        { opacity: 0, x: -18 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: "power3.out",
        },
        0.06
      );

    return () => {
      mobileTlRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!mobileTlRef.current) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      mobileTlRef.current.play(0);
    } else {
      document.body.style.overflow = "auto";

      gsap.to(mobileOverlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.18,
        ease: "power2.out",
      });

      gsap.to(mobilePanelRef.current, {
        opacity: 0,
        y: -14,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobilePanelRef.current, { display: "none" });
        },
      });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  function updateActivePill() {
    const activeIndex = navLinks.findIndex((item) => item.href === pathname);
    const activeEl = navItemRefs.current[activeIndex];
    const navEl = navRef.current;
    const pillEl = activePillRef.current;

    if (!activeEl || !navEl || !pillEl) return;

    const itemRect = activeEl.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();

    gsap.to(pillEl, {
      x: itemRect.left - navRect.left,
      y: itemRect.top - navRect.top,
      width: itemRect.width,
      height: itemRect.height,
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  }

  const handleNavMove = (e, index) => {
    const item = navItemRefs.current[index];
    if (!item) return;

    const bounds = item.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const text = item.querySelector(".nav-label");
    const glow = item.querySelector(".nav-glow");
    const line = item.querySelector(".nav-line");

    gsap.to(text, {
      x: (x - centerX) * 0.08,
      y: (y - centerY) * 0.12,
      duration: 0.25,
      ease: "power3.out",
    });

    gsap.to(glow, {
      opacity: 1,
      x: x - bounds.width / 2,
      y: y - bounds.height / 2,
      duration: 0.25,
      ease: "power3.out",
    });

    gsap.to(line, {
      scaleX: 1,
      opacity: 1,
      duration: 0.22,
      ease: "power3.out",
    });
  };

  const handleNavLeave = (index) => {
    const item = navItemRefs.current[index];
    if (!item) return;

    const text = item.querySelector(".nav-label");
    const glow = item.querySelector(".nav-glow");
    const line = item.querySelector(".nav-line");
    const isActive = navLinks[index].href === pathname;

    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(glow, {
      opacity: 0,
      x: 0,
      y: 0,
      duration: 0.25,
      ease: "power3.out",
    });

    gsap.to(line, {
      scaleX: isActive ? 1 : 0.4,
      opacity: isActive ? 1 : 0,
      duration: 0.22,
      ease: "power3.out",
    });
  };

  const handleCTAMove = (e) => {
    const el = ctaRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.12,
      y: y * 0.14,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const resetCTA = () => {
    if (!ctaRef.current) return;

    gsap.to(ctaRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.45)",
    });
  };

  return (
    <>
      


      <header ref={headerRef} className="fixed top-0 z-50 w-full">
        <div
          ref={shellRef}
          className="px-3 pt-3 md:px-6 md:pt-4 lg:px-8"
          style={{ paddingBottom: 10 }}
        >
          <div
            ref={innerRef}
            className="mx-auto flex w-full max-w-[430px] items-center justify-between rounded-[24px] border border-white/10 bg-[#0b0b0b]/88 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:max-w-7xl md:rounded-[28px] md:px-6"
          >
            <Link
              href="/"
              ref={logoRef}
              className="group relative inline-flex items-center gap-3"
            >
              <div
                ref={logoIconRef}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d8aa70]/20 bg-white/[0.04] text-[#f1d8ac]"
              >
                <PenTool size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-[-0.03em] text-white">
                  Priyanka Books
                </p>
                <p className="hidden text-[11px] uppercase tracking-[0.28em] text-white/38 md:block">
                  Collector Editions
                </p>
              </div>
            </Link>

            <div className="hidden lg:block">
              <nav
                ref={navRef}
                className="relative flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-2"
              >
                <div
                  ref={activePillRef}
                  className="absolute left-0 top-0 rounded-full border border-[#d8aa70]/20 bg-white/[0.06] opacity-0"
                />

                {navLinks.map((item, index) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={(el) => (navItemRefs.current[index] = el)}
                      onMouseMove={(e) => handleNavMove(e, index)}
                      onMouseLeave={() => handleNavLeave(index)}
                      className={`relative z-10 overflow-hidden rounded-full px-5 py-3 text-sm transition ${active ? "text-white" : "text-white/62 hover:text-white"
                        }`}
                    >
                      <span className="nav-glow absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8aa70]/12 blur-2xl opacity-0" />
                      <span className="nav-label relative block">{item.name}</span>
                      <span
                        className={`nav-line absolute bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-[#d8aa70] ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
                          }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/collection"
                ref={ctaRef}
                onMouseMove={handleCTAMove}
                onMouseLeave={resetCTA}
                className="group inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(247,242,234,0.12)] transition"
              >
                Explore Collection
                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={mobileOverlayRef}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileOpen(false)}
      />

      <div
        ref={mobilePanelRef}
        className="fixed left-4 right-4 top-[92px] z-50 hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:hidden"
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((item, index) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => (mobileItemsRef.current[index] = el)}
                onClick={() => setMobileOpen(false)}
                className={`rounded-2xl border px-4 py-3 text-sm transition ${active
                    ? "border-[#d8aa70]/20 bg-white/[0.06] text-white"
                    : "border-white/8 bg-white/[0.03] text-white/70"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/collection"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f7f2ea] px-4 py-3 text-sm font-semibold text-black"
          >
            Explore Collection
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}