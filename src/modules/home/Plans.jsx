import React from 'react'
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    id: "basic",
    label: "Plan 1 · Starter",
    name: "Velnorix Basic",
    price: "$100 – $499",
    duration: "30 days",
    potential: "5% – 8%",
    total: "105% – 108%",
    icon: "⬡",
  },
  {
    id: "pro",
    label: "Plan 2 · Standard",
    name: "Velnorix Pro",
    price: "$500 – $4,999",
    duration: "60 days",
    potential: "8% – 12%",
    total: "108% – 112%",
    popular: true,
    icon: "▥",
  },
  {
    id: "elite",
    label: "Plan 3 · Premium",
    name: "Velnorix Elite",
    price: "$5,000 – $50,000",
    duration: "90 days",
    potential: "12% – 18%",
    total: "118% – 118%",
    icon: "♢",
  },
];




const Plans = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#020916] py-10 text-white sm:py-12 lg:py-5">
      {/* Decorative golden lines */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(201,139,47,0.09),transparent_35%),radial-gradient(ellipse_at_5%_85%,rgba(0,104,210,0.09),transparent_40%)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/90 sm:text-xs">
            Our Investment Plans
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[29px]">
            Choose Your Path to Growth
          </h2>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
            Flexible plans designed to match your investment goals.
            All figures are illustrative examples.
          </p>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-3 xl:gap-4">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex min-w-[82vw] snap-center flex-col rounded-2xl border p-5 transition duration-300 sm:min-w-0 sm:p-5 lg:p-5 xl:p-6 ${
                plan.popular
                  ? "border-[#F4C45E] bg-[linear-gradient(145deg,rgba(16,32,48,0.98),rgba(2,12,26,0.98))] shadow-[0_0_24px_rgba(255,191,62,0.15)] ring-1 ring-[#DDAA46]/50"
                  : "border-[#34475D] bg-[linear-gradient(145deg,rgba(10,27,44,0.96),rgba(2,12,25,0.98))] hover:border-[#9A773C]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 rounded-lg bg-gradient-to-r from-[#FFE6A0] to-[#F2BB50] px-3 py-1.5 text-[11px] font-bold text-[#141414] shadow-md sm:right-3">
                  Most Popular
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-3xl !text-goldenDark ${
                    plan.popular
                      ? "border-[#A67D38]/70 bg-[#F6C45E]/10"
                      : "border-[#A67D38]/50 bg-[#F6C45E]/[0.07]"
                  }`}
                >
                  {plan.icon}
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] !text-goldenDark sm:text-[10px]">
                    {plan.label}
                  </p>

                  <h3 className="mt-1.5 text-lg font-semibold leading-tight sm:text-xl">
                    {plan.name}
                  </h3>

                  <p className="mt-1 text-xl font-semibold tracking-tight text-[#FFE0A0] sm:text-[22px]">
                    {plan.price}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Illustrative investment range
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5 text-[13px] leading-5 text-slate-200 sm:text-sm">
                {[
                  ["Example duration:", plan.duration],
                  ["Potential return (Illustrative):", plan.potential],
                  ["Total return (Illustrative):", plan.total],
                ].map(([label, value]) => (
                  <li key={label} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#F9BD4E]"
                    />
                    <span>
                      {label}{" "}
                      <span className="ml-1 text-slate-300">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/pre-register?plan=${plan.id}`}
                className={`mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition hover:brightness-110 ${
                  plan.popular
                    ? "border-transparent bg-gradient-to-b from-[#FFE5A0] to-[#F0B847] text-[#10131A] shadow-[0_5px_20px_rgba(246,187,73,0.13)]"
                    : "border-[#A77939] bg-[#031020]/70 text-white hover:bg-[#102238]"
                }`}
              >
                Choose Plan
                {plan.popular && <ArrowRight size={17} />}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Plans
