
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bell,
  Home,
  Layers3,
  Users,
  ReceiptText,
  Headset,
  Menu,
  X,
  LayoutDashboard,
  ChartNoAxesCombined,
  Info,
  Mail,
} from "lucide-react";

import ColorButton from "@/components/ColorButton";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about-company", label: "About Us" },
  { href: "/investment-plans", label: "Investment Plans" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/transactions", label: "Transactions" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const mobileLinks = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/investment-plans", label: "Plans", icon: Layers3 },
  { href: "/referral", label: "Referral", icon: Users },
  { href: "/transactions", label: "Transactions", icon: ReceiptText },
  { href: "/support", label: "Support", icon: Headset },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Desktop + Mobile Top Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020916]/90 text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex h-[68px] items-center justify-between gap-4 md:h-[76px] lg:h-[88px]">

            {/* Logo */}
            <Link
              href="/home"
              className="group flex shrink-0 items-center gap-2.5"
              aria-label="Velnorix Home"
            >
              <span className="text-[27px] font-black leading-none tracking-[-2px] !text-goldenDark sm:text-3xl">
                V<span className="text-white">/</span>
              </span>

              <span className="flex flex-col">
                <span className="text-[19px] font-bold leading-tight tracking-[0.16em] !text-goldenDark sm:text-[22px]">
                  VELNORIX
                </span>
                <span className="mt-1 hidden text-[9px] tracking-[0.28em] text-white/65 sm:block">
                  INVESTMENT PLATFORM
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-200 xl:text-sm ${
                      active
                        ? "!text-goldenDark"
                        : "text-white/85 hover:!text-goldenDark"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <span className="absolute inset-x-0 -bottom-[7px] h-[2px] rounded-full bg-gradient-to-r from-[#D99A32] via-[#FFE5A0] to-[#D99A32] shadow-[0_0_12px_rgba(255,199,89,0.5)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden shrink-0 lg:block">
              <ColorButton href="/pre-register">
                <span className="text-sm">Login / Register</span>
                <ArrowRight size={16} />
              </ColorButton>
            </div>

            {/* Mobile Actions */}
            <div className="flex shrink-0 items-center gap-3 lg:hidden">
              <Link
                href="/notifications"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center text-white transition hover:text-goldenDark!"
              >
                <Bell size={25} strokeWidth={1.8} />
                <span className="absolute right-0.5 top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  3
                </span>
              </Link>

              <span className="h-8 w-px bg-white/15" />

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/5 hover:text-goldenDark!"
              >
                {open ? <X size={28} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute inset-x-0 top-full z-50 border-b border-[#263a56] bg-[#030b19]/[98%] px-4 pb-5 pt-3 shadow-[0_20px_45px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden">
            <nav className="mx-auto max-w-xl space-y-1">
              {navLinks.map((link, index) => {
                const icons = [
                  Home,
                  Info,
                  Layers3,
                  LayoutDashboard,
                  ReceiptText,
                  ChartNoAxesCombined,
                  Mail,
                ];
                const Icon = icons[index];
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition ${
                      active
                        ? "border border-[#87662e]/60 !bg-goldenDark/[0.08] !text-goldenDark"
                        : "border border-transparent text-white/85 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={19} />
                      <span className="text-sm font-medium">
                        {link.label}
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className={active ? "!text-goldenDark" : "text-white/35"}
                    />
                  </Link>
                );
              })}

              <Link
                href="/pre-register"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F2BE58] via-[#FFE4A0] to-[#E8A63D] px-4 py-3.5 text-sm font-bold text-[#10121a]"
              >
                Login / Register
                <ArrowRight size={17} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      {/* <nav
        aria-label="Mobile bottom navigation"
        className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#233650] bg-[#020916]/95 px-1 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur-2xl lg:hidden"
      >
        <div className="mx-auto grid max-w-[600px] grid-cols-5 gap-1">
          {mobileLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 transition-all duration-200 ${
                  active
                    ? "border border-[#C99B43]/60 bg-gradient-to-b from-goldenDark/15 to-transparent !text-goldenDark shadow-[0_0_22px_rgba(255,194,76,0.09)]"
                    : "border border-transparent text-white/75 hover:text-goldenDark!"
                }`}
              >
                <Icon
                  size={24}
                  strokeWidth={active ? 2.2 : 1.7}
                  className={active ? "drop-shadow-[0_0_7px_rgba(255,212,119,0.35)]" : ""}
                />
                <span className="max-w-full truncate text-[10px] font-medium sm:text-[11px]">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav> */}
    </>
  );
}
