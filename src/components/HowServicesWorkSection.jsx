import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Search,
  ClipboardCheck,
  SprayCan,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Your Inspection",
    icon: Phone,
    text: "Contact The Prompt Pest Control online or by phone and tell us what pest problem you are facing.",
    path: "/contact-us",
  },
  {
    number: "02",
    title: "We Inspect The Property",
    icon: Search,
    text: "Our team checks key areas, signs of activity, entry points and hiding places around your London property.",
  },
  {
    number: "03",
    title: "Treatment Plan",
    icon: ClipboardCheck,
    text: "We explain the suitable pest control approach based on the type of pest, property and level of activity.",
  },
  {
    number: "04",
    title: "Targeted Treatment",
    icon: SprayCan,
    text: "Professional treatment is carried out carefully with focus on affected areas and prevention points.",
  },
  {
    number: "05",
    title: "Prevention Advice",
    icon: ShieldCheck,
    text: "We guide you on how to reduce future pest problems with proofing and practical prevention advice.",
    path: "/blogs",
  },
];

export default function HowServicesWorkSection() {
  return (
    <section className="relative overflow-hidden bg-[#031B38] py-28 text-white">
      <div className="absolute left-[-120px] top-10 h-96 w-96 rounded-full bg-[#F4E940]/10 blur-3xl" />

      <div className="absolute bottom-10 right-[-120px] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4E940]/30 bg-white/10 px-5 py-2 text-sm font-black text-[#F4E940] backdrop-blur">
            <ShieldCheck size={18} />
            How Our Services Work
          </div>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Simple Process,
            <span className="block text-[#F4E940]">
              Professional Results
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/70">
            From your first call to treatment and prevention advice, our pest
            control process is clear, professional and property focused.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              const cardClasses = `
                group relative overflow-hidden rounded-[2.5rem]
                border border-white/10 bg-white/10 p-7
                shadow-[0_20px_70px_rgba(0,0,0,0.18)]
                backdrop-blur transition duration-500
                hover:-translate-y-2 hover:bg-white
                hover:shadow-[0_0_45px_rgba(124,58,237,0.45),0_30px_90px_rgba(0,0,0,0.35)]
                ${isRight ? "lg:ml-10" : "lg:mr-10"}
              `;

              const cardContent = (
                <>
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#F4E940]/10 blur-2xl transition duration-500 group-hover:bg-purple-500/20" />

                  <span className="absolute right-7 top-5 text-7xl font-black text-white/5 transition group-hover:text-[#082A55]/5">
                    {step.number}
                  </span>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F4E940] text-[#031B38] transition duration-500 group-hover:bg-[#031B38] group-hover:text-[#F4E940]">
                    <Icon size={30} />
                  </div>

                  <h3
                    className={`text-2xl font-black transition group-hover:text-[#031B38] ${
                      step.path
                        ? "text-[#F4E940] underline decoration-2 underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-8 text-white/70 transition group-hover:text-slate-600">
                    {step.text}
                  </p>
                </>
              );

              return (
                <div
                  key={step.title}
                  className={`relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2 ${
                    isRight ? "lg:[&>div:first-child]:col-start-2" : ""
                  }`}
                >
                  {step.path ? (
                    <Link
                      to={step.path}
                      aria-label={`Open ${step.title}`}
                      className={cardClasses}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className={cardClasses}>{cardContent}</div>
                  )}

                  <div className="absolute left-1/2 top-1/2 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#031B38] bg-[#F4E940] shadow-[0_0_25px_rgba(244,233,64,0.65)] lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1"
          >
            Contact Us Online
            <ArrowRight size={18} />
          </Link>

          <a
            href="tel:07845873058"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#031B38]"
          >
            <Phone size={18} />
            07845 873058
          </a>
        </div>
      </div>
    </section>
  );
}