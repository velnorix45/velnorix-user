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
      <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-[#23364F] bg-navyDark">
        {features?.map((feature, index) => {
          const Icon = feature?.icon;

          return (
            <div
              key={feature.title}
              className={`flex min-w-0 flex-col items-center justify-center gap-3 lg:gap-5 px-3 lg:px-5 py-5 sm:py-6 text-center sm:flex-row sm:text-left ${
                index % 2 === 0 ? "border-r border-white/10" : ""
              } ${
                index < 2 ? "border-b border-white/10 md:border-b-0" : ""
              } ${
                index === 1 ? "md:border-r md:border-white/10" : ""
              } ${
                index === 2 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <div className="flex h-10 w-10 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border border-[#9A7135]/50 bg-gradient-to-br from-[#F6C76A]/10 to-[#15202E] text-[#FFD16C] shadow-[inset_0_0_15px_rgba(255,201,96,0.06)] ">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h3 className="text-[10px] sm:text-[12px] lg:text-[15px] font-semibold leading-snug text-white sm:text-sm ">
                  {feature?.title}
                </h3>

                <p className="mt-1.5 text-[10px] sm:text-[13px] leading-[1.65] text-slate-300 ">
                  {feature?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
  
    </>
  )
}

export default Features
