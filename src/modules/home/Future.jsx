import React from 'react'
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
const Future = () => {
  return (
   <>
     <section
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#020916] text-white rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,9,22,0.86), rgba(2,9,22,0.2) 55%, rgba(2,9,22,0.65)), url('/Mountain.webp')",
        backgroundPosition: "center 52%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#020916]/20 via-transparent to-[#020916]/65" />

      <div className="mx-auto flex max-w-[1500px] flex-col gap-7 px-5 py-7 sm:px-8 sm:py-9 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-5 xl:px-14">
        <div className="max-w-[570px]">
          <h2 className="text-base sm:text-[27px] font-semibold tracking-tight ">
            Built for a Stronger Financial Future
          </h2>

          <p className="mt-1.5 max-w-[460px] text-xs sm:text-sm leading-6 text-slate-200">
            At Velnorix, we combine technology, expertise and
            transparency to help you achieve your financial goals.
          </p>

          <Link
            href="/home"
            className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#FFE5A0] to-[#F1B84F] px-7 py-2.5 text-sm font-bold !text-[#10131A] transition hover:brightness-110"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>

        <Link
          href="/home"
          className="group inline-flex w-fit items-center gap-4 rounded-full pr-3 transition hover:bg-white/[0.05]"
          aria-label="Watch our story"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border !border-goldenDark bg-[#071323]/60 text-white shadow-[0_0_25px_rgba(255,204,91,0.12)] transition group-hover:bg-[#F5C45D] group-hover:text-[#07101D]">
            <Play size={22} fill="currentColor" className="ml-1" />
          </span>

          <span className="text-sm font-medium leading-6">
            Watch Our
            <br />
            Story
          </span>
        </Link>
      </div>
    </section>
   </>
  )
}

export default Future
