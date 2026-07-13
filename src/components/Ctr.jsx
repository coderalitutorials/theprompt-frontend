import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

export default function ProfessionalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#031B38] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur lg:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F4E940]/20 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
                <ShieldCheck size={18} />
                Professional Pest Control Support
              </div>

              <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Need a Professional Pest Control Service?
                <span className="block text-[#F4E940]">
                  Let’s discuss your case!
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Contact The Prompt Pest Control for fast advice, inspection
                support and treatment options for your London property.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[2rem] bg-white p-6 text-[#031B38] shadow-2xl">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#082A55]">
                  Contact Us Online
                </p>

                <Link
                  to="/contact-us"
                  className="mt-5 flex items-center justify-between rounded-2xl bg-[#031B38] px-5 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#082A55]"
                >
                  Contact Us Online
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="tel:07845873058"
                  className="mt-3 flex items-center justify-between rounded-2xl bg-[#F4E940] px-5 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={18} />
                    07845 873058
                  </span>
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}