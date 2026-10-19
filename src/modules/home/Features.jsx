import React from 'react'
import {
  ShieldCheck,
  ChartNoAxesCombined,
  Globe2,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Secure Platform",
    description: <>Bank-grade security<br className="hidden sm:block" /> & encrypted data</>,
    icon: ShieldCheck,
  },
  {
    title: "Transparent Operations",
    description: <>Real-time tracking<br className="hidden sm:block" /> & clear reporting</>,
    icon: ChartNoAxesCombined,
  },
  {
    title: "Global Access",
    description: <>Invest from anywhere<br className="hidden sm:block" /> in the world</>,
    icon: Globe2,
  },
  {
    title: "24/7 Support",
    description: <>Dedicated support<br className="hidden sm:block" /> whenever you need</>,
    icon: Headset,
  },
];


const Features = () => {
  return (
    <>
    <section className="relative z-10 mx-auto -mt-1 max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-14">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#23364F] bg-[#020B18]/90 shadow-[0_15px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl md:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`flex min-w-0 flex-col items-center justify-center gap-3 px-3 py-5 text-center sm:flex-row sm:gap-4 sm:px-4 sm:py-6 sm:text-left lg:gap-5 lg:px-5 ${
                index % 2 === 0 ? "border-r border-white/10" : ""
              } ${
                index < 2 ? "border-b border-white/10 md:border-b-0" : ""
              } ${
                index === 1 ? "md:border-r md:border-white/10" : ""
              } ${
                index === 2 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#9A7135]/50 bg-gradient-to-br from-[#F6C76A]/10 to-[#15202E] text-[#FFD16C] shadow-[inset_0_0_15px_rgba(255,201,96,0.06)] sm:h-[58px] sm:w-[58px]">
                <Icon size={29} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h3 className="text-[13px] font-semibold leading-snug text-white sm:text-sm lg:text-[15px]">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-[1.65] text-slate-300 sm:text-[13px]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  )
}

export default Features
