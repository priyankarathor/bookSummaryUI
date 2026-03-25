"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Layers3, User } from "lucide-react";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Books", href: "/books", icon: BookOpen },
  { label: "About", href: "/About", icon: Layers3 },
  { label: "Profile", href: "/profile", icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] block md:hidden">
      <div className="mx-auto max-w-[430px] px-3 pb-3">
        <div className="grid grid-cols-4 rounded-[28px] border border-white/10 bg-[#0b0b0b]/90 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center rounded-[20px] py-2 text-[10px] font-medium transition ${
                  active
                    ? "bg-white/[0.07] text-[#f1d8ac]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                <Icon size={18} className="mb-1" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}