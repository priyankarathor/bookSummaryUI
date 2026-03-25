"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, BookOpen, Sparkles } from "lucide-react";
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FooterSection() {
  return (
    <>
      {/* MOBILE APP STYLE FOOTER */}
      <section className="block md:hidden">
        <div className="space-y-3 pb-2">
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#0d0d0d_0%,#111111_100%)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8aa70]/20 bg-[#d8aa70]/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#d8aa70]">
              <Sparkles size={11} />
              Final Chapter
            </div>

            <h2 className="mt-4 text-[28px] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
              Stay in the story
              <span className="block text-[#d8aa70]">like a premium app.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Get collector drops, featured editions, reading notes, and curated
              updates in a cleaner mobile experience.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="/books"
                className="inline-flex items-center justify-center rounded-full bg-[#f7f1e7] px-5 py-3 text-sm font-semibold text-black"
              >
                Explore
              </Link>

              <Link
                href="/About"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white"
              >
                About
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <BookOpen size={18} className="text-[#d8aa70]" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[-0.03em] text-white">
                  Priyanka Books
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Collector Editions
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/56">
              Premium storytelling, collector mood, and cinematic presentation —
              now shaped for a smoother mobile app feel.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(155deg,#0d0b0b_0%,#17120e_16%,#2a1f18_40%,#5c3f26_72%,#c08a4a_100%)] p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            <div className="rounded-[30px] bg-[#0b0b0b]/88 p-5 backdrop-blur-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#f1d8ac]">
                <Mail size={11} />
                Stay Updated
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                New editions,
                <span className="block text-[#f1d8ac]">drops, and notes.</span>
              </h3>

              <div className="mt-5 space-y-3">
                <div className="group flex h-12 items-center gap-3 rounded-full border border-white/12 bg-black/20 px-4 text-white/70 transition duration-300 focus-within:border-[#f1d8ac]/40 focus-within:bg-black/30">
                  <Mail
                    size={16}
                    className="text-[#f1d8ac] transition duration-300 group-focus-within:scale-110"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                  />
                </div>

                <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f7f1e7] px-6 text-sm font-semibold text-black transition duration-300">
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MobileLinkCard
              title="Navigation"
              links={[
                { label: "Home", href: "/" },
                { label: "Collection", href: "/books" },
                { label: "About", href: "/About" },
              ]}
            />

            <MobileLinkCard
              title="Categories"
              links={[
                { label: "New Arrivals", href: "/new-arrivals" },
                { label: "Best Sellers", href: "/best-sellers" },
                { label: "Archive", href: "/archive" },
              ]}
            />
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/44">
              Connect
            </p>

            <div className="mt-4 flex items-center gap-3">
              <SocialButton href="#" icon={<FaInstagram size={17} />} />
              <SocialButton href="#" icon={<FaXTwitter size={17} />} />
              <SocialButton href="#" icon={<FaGithub size={17} />} />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/42">
              <p>© 2026 Priyanka Books</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="transition hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP FOOTER */}
      <footer className="relative hidden overflow-hidden bg-[#030303] text-white md:block">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#c69052]/10 blur-[170px]" />
          <div className="absolute bottom-[-120px] right-[-80px] h-[260px] w-[260px] rounded-full bg-[#8d5f31]/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),transparent_20%,transparent_78%,rgba(255,255,255,0.025))]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10 rounded-[34px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_35px_140px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:grid-cols-[1.08fr_0.92fr] lg:p-10"
          >
            <motion.div variants={fadeUp} custom={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8aa70]/20 bg-[#d8aa70]/8 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[#d8aa70]">
                <Sparkles size={12} />
                Final Chapter
              </div>

              <h2 className="mt-6 max-w-[720px] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                End the experience with
                <span className="block text-[#d8aa70]">
                  presence, warmth, and detail.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                A luxury books brand should not feel ordinary at the bottom. It
                should close like the last page of a beautiful edition —
                composed, memorable, and premium.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/books"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#f7f1e7] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(247,241,231,0.15)] transition duration-300"
                  >
                    Explore Collection
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/About"
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    About Brand
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.15}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(155deg,#0d0b0b_0%,#17120e_16%,#2a1f18_40%,#5c3f26_72%,#c08a4a_100%)] p-[10px] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_12%,transparent_28%,transparent_74%,rgba(0,0,0,0.24)_100%)]" />
              <div className="absolute left-[10%] top-[10%] h-[34%] w-[62%] rotate-[14deg] bg-white/10 blur-[28px]" />
              <div className="absolute inset-[18px] rounded-[24px] border border-[#f0d7ad]/18" />
              <div className="absolute inset-[28px] rounded-[18px] border border-white/8" />

              <div className="relative z-10 rounded-[24px] p-6 lg:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#f1d8ac]">
                  <BookOpen size={12} />
                  Stay in the story
                </div>

                <h3 className="mt-5 text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                  Get new editions,
                  <span className="block text-[#f1d8ac]">drops, and notes.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
                  Join the mailing list for featured releases, collector
                  editions, reading notes, and curated library updates.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <div className="group flex h-12 flex-1 items-center gap-3 rounded-full border border-white/12 bg-black/20 px-4 text-white/70 transition duration-300 focus-within:border-[#f1d8ac]/40 focus-within:bg-black/30">
                    <Mail
                      size={16}
                      className="text-[#f1d8ac] transition duration-300 group-focus-within:scale-110"
                    />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f7f1e7] px-6 text-sm font-semibold text-black transition duration-300"
                  >
                    Subscribe
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeUp} custom={0.05}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <BookOpen size={18} className="text-[#d8aa70]" />
                </div>
                <p className="text-lg font-semibold tracking-[-0.03em] text-white">
                  Priyanka Books
                </p>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-7 text-white/56">
                Premium storytelling, collector mood, and cinematic digital
                presentation for modern readers.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.1}>
              <FooterLinks
                title="Navigation"
                links={[
                  { label: "Home", href: "/" },
                  { label: "Collection", href: "/books" },
                  { label: "Featured", href: "/featured" },
                  { label: "About", href: "/About" },
                ]}
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={0.15}>
              <FooterLinks
                title="Categories"
                links={[
                  { label: "Signature Editions", href: "/signature-editions" },
                  { label: "New Arrivals", href: "/new-arrivals" },
                  { label: "Best Sellers", href: "/best-sellers" },
                  { label: "Archive", href: "/archive" },
                ]}
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={0.2}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/44">
                Connect
              </p>

              <div className="mt-5 flex items-center gap-3">
                <SocialButton href="#" icon={<FaInstagram size={17} />} />
                <SocialButton href="#" icon={<FaXTwitter size={17} />} />
                <SocialButton href="#" icon={<FaGithub size={17} />} />
              </div>

              <p className="mt-6 text-sm leading-7 text-white/56">
                Follow the latest collector drops, editorial releases, and
                premium design notes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between"
          >
            <p>© 2026 Priyanka Books. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/44">
        {title}
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <motion.div
            key={link.label}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="w-fit"
          >
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-white/62 transition duration-300 hover:text-white"
            >
              <span>{link.label}</span>
              <ArrowRight
                size={14}
                className="translate-x-[-4px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MobileLinkCard({ title, links }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/44">
        {title}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group inline-flex items-center justify-between text-sm text-white/62 transition duration-300 hover:text-white"
          >
            <span>{link.label}</span>
            <ArrowRight
              size={14}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialButton({ href, icon }) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 backdrop-blur-xl transition duration-300 hover:border-[#d8aa70]/35 hover:bg-white/[0.08] hover:text-white"
      >
        <span className="transition duration-300 group-hover:scale-110 group-hover:text-[#f1d8ac]">
          {icon}
        </span>
      </Link>
    </motion.div>
  );
}