



import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Bug,
  Home,
  Building2,
  Sparkles,
} from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(
        "https://theprompt-backend.vercel.app/api/callback",
        formData
      ),
      {
        loading: "Sending your callback request...",

        success: () => {
          setFormData({
            name: "",
            postcode: "",
            phone: "",
          });

          setPhoneError("");
          setLoading(false);

          return "Callback request sent! Our pest control team will contact you shortly.";
        },

        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Request failed. Please try again."
          );
        },
      }
    );
  };

  return (
    <section className="relative overflow-visible bg-[#031B38] text-white">
      <Toaster position="top-center" />

      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,233,64,0.20),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(255,255,255,0.10),transparent_26%)]" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#031B38] via-[#082A55] to-[#020B18]" />

        <div className="absolute left-[-160px] top-24 h-[420px] w-[420px] rounded-full border border-[#F4E940]/20" />

        <div className="absolute bottom-[-160px] right-[-180px] h-[520px] w-[520px] rounded-full bg-[#F4E940]/10 blur-3xl" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-[860px] max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-36 pt-24 sm:pb-40 sm:pt-28 lg:grid-cols-12 lg:px-8">
        {/* Left content */}
        <div className="animate-heroUp lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#F4E940]/35 bg-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#F4E940] backdrop-blur sm:px-5 sm:text-xs sm:tracking-[0.18em]">
            <ShieldCheck size={18} />
            London Residential & Commercial Pest Control
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-[78px]">
            <span>The Prompt </span>

            <Link
              to="/residential-pest-control"
              aria-label="View residential pest control services"
              className="inline-block cursor-pointer text-[#F4E940] underline decoration-[#F4E940] decoration-[3px] underline-offset-[8px] transition-all duration-300 hover:text-white hover:decoration-white sm:decoration-[4px] sm:underline-offset-[10px]"
            >
              Pest Control Services
            </Link>

            <span className="mt-2 block text-[#F4E940]">in London</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Professional pest inspection, targeted treatment and prevention
            support for London homes, landlords, offices, retail businesses and
            commercial premises.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                icon: Bug,
                text: "Pest Treatments",
              },
              {
                icon: Home,
                text: "Homes",
              },
              {
                icon: Building2,
                text: "Businesses",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} className="text-[#F4E940]" />

                  <span className="text-sm font-bold">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              to="/residential-pest-control"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] shadow-xl shadow-[#F4E940]/20 transition-transform duration-300 hover:-translate-y-1"
            >
              View Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:07845873058"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#082A55]"
            >
              <Phone size={18} />
              07845 873058
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-white/80">
            <MapPin size={20} className="shrink-0 text-[#F4E940]" />

            <span className="text-sm font-bold">
              Serving London & Nearby Areas
            </span>
          </div>
        </div>

        {/* Responsive hero images */}
        <div className="relative mx-auto mt-4 h-[420px] w-full max-w-[430px] animate-heroFade sm:mt-8 sm:h-[520px] sm:max-w-[540px] lg:col-span-6 lg:mt-0 lg:min-h-[620px] lg:max-w-none">
          {/* Yellow shape */}
          <div className="absolute left-[6%] top-[8%] h-[72%] w-[78%] rotate-[-5deg] rounded-[48%_52%_44%_56%/58%_44%_56%_42%] bg-[#F4E940] sm:left-[8%] sm:h-[78%] sm:w-[80%] lg:left-10 lg:top-8 lg:h-[500px] lg:w-[430px]" />

          {/* Main technician image */}
          <div className="absolute left-[10%] top-0 h-[78%] w-[76%] rotate-[4deg] overflow-hidden rounded-[44%_56%_52%_48%/48%_42%_58%_52%] border-[6px] border-white/15 bg-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:left-[12%] sm:h-[84%] sm:w-[76%] sm:border-[8px] lg:left-16 lg:h-[550px] lg:w-[450px] lg:border-[10px]">
            <img
              src="/images/prompt-technician-inspection.webp"
              alt="Prompt Pest Control technician inspecting a London property"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Small pest image */}
          <div className="absolute bottom-[2%] right-[1%] h-[135px] w-[145px] rotate-[8deg] overflow-hidden rounded-[42%_58%_45%_55%/55%_45%_55%_45%] border-[5px] border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:bottom-[1%] sm:h-[190px] sm:w-[200px] sm:border-[7px] lg:bottom-16 lg:right-0 lg:h-[250px] lg:w-[260px] lg:border-[8px]">
            <img
              src="/images/pest-closeup-identification.webp"
              alt="Close up pest identification during pest control inspection"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Fast response floating card */}
          <div className="absolute right-0 top-[12%] animate-softFloat rounded-2xl border border-white/20 bg-white/95 p-2.5 text-[#031B38] shadow-2xl sm:right-[1%] sm:top-[16%] sm:rounded-3xl sm:p-4 lg:right-6 lg:top-24">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4E940] sm:h-11 sm:w-11 sm:rounded-2xl">
                <Bug size={17} className="sm:hidden" />
                <Bug size={22} className="hidden sm:block" />
              </span>

              <div>
                <p className="text-[8px] font-black uppercase tracking-wider text-[#082A55] sm:text-xs sm:tracking-widest">
                  Fast Response
                </p>

                <p className="text-xs font-black sm:text-lg">
                  Pest Issue Checked
                </p>
              </div>
            </div>
          </div>

          {/* Treatment plan floating card */}
          <div className="absolute bottom-[15%] left-0 animate-softFloatDelay rounded-2xl border border-[#F4E940]/30 bg-[#031B38]/90 p-2.5 shadow-2xl backdrop-blur sm:bottom-[17%] sm:p-4 lg:bottom-28 lg:left-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4E940] text-[#031B38] sm:h-11 sm:w-11 sm:rounded-2xl">
                <Sparkles size={16} className="sm:hidden" />
                <Sparkles size={21} className="hidden sm:block" />
              </span>

              <div>
                <p className="text-[8px] font-black uppercase tracking-wider text-[#F4E940] sm:text-xs sm:tracking-widest">
                  Treatment Plan
                </p>

                <p className="text-xs font-black text-white sm:text-lg">
                  Inspect • Treat • Prevent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callback form */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-5 sm:-mt-20 lg:-mt-24 lg:px-8">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 text-[#031B38] shadow-[0_25px_80px_rgba(3,27,56,0.22)] sm:p-6">
          <div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#082A55]">
                Quick Callback
              </p>

              <h2 className="text-xl font-black sm:text-2xl">
                Need a professional pest control service?
              </h2>
            </div>

            <a
              href="tel:07845873058"
              className="hidden rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition-transform duration-300 hover:-translate-y-1 lg:inline-flex"
            >
              Call 07845 873058
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr_1fr_auto]"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              className="w-full rounded-2xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 outline-none transition focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
            />

            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              placeholder="Postcode *"
              required
              className="w-full rounded-2xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 outline-none transition focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
            />

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className={`w-full rounded-2xl border bg-[#F7F9FC] px-5 py-4 outline-none transition focus:ring-4 ${
                  phoneError
                    ? "border-red-500 focus:ring-red-100"
                    : "border-slate-200 focus:border-[#F4E940] focus:ring-[#F4E940]/20"
                }`}
              />

              {phoneError && (
                <p className="mt-1 text-xs font-bold text-red-600">
                  {phoneError}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-gradient-to-r from-[#082A55] to-[#031B38] px-8 py-4 font-black text-white transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

