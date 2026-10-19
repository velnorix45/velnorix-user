import React from 'react'
import Link from "next/link";
import { ArrowRight , Globe2  } from "lucide-react";
const Hero = () => {
  return (
   <>
     <section
      className="relative isolate overflow-hidden bg-[#020916] text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,9,22,0.98) 0%, rgba(2,9,22,0.88) 32%, rgba(2,9,22,0.18) 70%, rgba(2,9,22,0.12) 100%), url('/images/hero-building.webp')",
        backgroundPosition: "center, center 44%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_52%_45%,rgba(0,112,255,0.17),transparent_46%)]" />

      <div className="relative mx-auto min-h-[480px] max-w-[1500px] px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:flex lg:min-h-[450px] lg:items-center lg:px-12 lg:py-12 xl:px-16">
        <div className="max-w-[570px]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.38em] text-white/90 sm:text-xs">
            Investment Platform
          </p>

          <h1 className="text-[38px] font-normal leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[50px] xl:text-[58px]">
            Your Partner in
            <span className="mt-1 block bg-gradient-to-r from-[#FFE9B0] via-[#FFD16C] to-[#E7A63C] bg-clip-text font-bold text-transparent">
              Financial Growth
            </span>
          </h1>

          <p className="mt-4 max-w-[490px] text-[15px] leading-6 text-slate-200 sm:text-base sm:leading-[1.6]">
            Join Velnorix and unlock tailored investment opportunities
            with innovative strategies, transparent operations and
            a commitment to your financial future.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
            <Link
              href="/investment-plans"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-[#FFE5A0] to-[#F1B84F] px-5 py-3 text-sm font-bold text-[#10131A] shadow-[0_5px_24px_rgba(255,193,75,0.16)] transition hover:brightness-110 sm:min-w-[207px] sm:px-7"
            >
              Start Investing
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about-company"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D89C43] bg-[#031020]/75 px-6 py-3 text-sm font-medium text-white transition hover:bg-[#10233A] sm:min-w-[160px]"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-8 flex w-fit items-center gap-4 rounded-2xl border border-[#D5A64D]/40 bg-[#030B18]/85 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5 lg:absolute lg:bottom-7 lg:right-12 lg:mt-0 xl:right-16">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8A94E]/40 bg-[#E7B650]/10 text-[#FFD477]">
            <Globe2 size={31} strokeWidth={1.7} />
          </div>

          <div>
            <p className="text-xs text-white/80">Trusted by</p>
            <p className="mt-0.5 text-xl font-bold leading-tight text-[#FFD477]">
              10,000+
            </p>
            <p className="mt-0.5 text-xs text-slate-300">
              Global Investors
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Hero
