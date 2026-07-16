


import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  Home,
  Building2,
  CheckCircle2,
  Send,
  MessageSquareText,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Our Team",
    value: "07845 873058",
    description: "Speak directly with our pest control team.",
    href: "tel:07845873058",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@promptpestcontrol.co.uk",
    description: "Send your pest control enquiry by email.",
    href: "mailto:info@promptpestcontrol.co.uk",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "London, United Kingdom",
    description: "Serving homes and businesses across London.",
  },
  {
    icon: Clock3,
    label: "Availability",
    value: "Available 24/7",
    description: "Request pest control support at any time.",
  },
];

const serviceOptions = [
  "Rat & Mice Control",
  "Bed Bug Control",
  "Cockroach Control",
  "Ant Control",
  "Flea Control",
  "Wasp Nest Control",
  "Moth Control",
  "Carpet Beetle Control",
  "Squirrel Control",
  "Bird Control",
  "Residential Pest Control",
  "Commercial Pest Control",
  "Other Pest Problem",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(
        "https://theprompt-backend.vercel.app/api/contact",
        formData
      ),
      {
        loading: "Sending your pest control enquiry...",
        success: () => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            postcode: "",
            service: "",
            message: "",
          });

          setPhoneError("");
          setLoading(false);

          return "Your enquiry has been sent. Our team will contact you shortly.";
        },
        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Your enquiry could not be sent. Please try again."
          );
        },
      },
      {
        style: {
          background: "#002447",
          color: "#FFFFFF",
          border: "1px solid rgba(244,233,64,0.45)",
          borderRadius: "18px",
          padding: "14px 18px",
          fontSize: "14px",
          fontWeight: "700",
        },
        success: {
          style: {
            background: "#002447",
            color: "#FFFFFF",
            border: "1px solid #F4E940",
          },
        },
        error: {
          style: {
            background: "#4c0519",
            color: "#fecdd3",
            border: "1px solid #fb7185",
          },
        },
      }
    );
  };

  return (
    <main>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "115px",
          zIndex: 999999,
        }}
      />

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#225486] py-24 text-white sm:py-28">
        <div className="absolute inset-0">
          <img
            src="/images/contact-pest-control-hero.webp"
            alt="Contact The Prompt Pest Control team in London"
            className="h-full w-full object-cover opacity-25"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-[#002447]/82" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
              <MessageSquareText size={18} />
              Contact Our London Team
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[72px]">
              Contact The Prompt
              <span className="block text-[#F4E940]">Pest Control</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Tell us about your pest problem and property requirements. Our
              team will review your enquiry and contact you to discuss the
              appropriate next steps.
            </p>

            <a
              href="tel:07845873058"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#F4E940] hover:text-[#031B38]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4E940] text-[#031B38]">
                <Phone size={20} />
              </span>

              Call 07845 873058
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section className="relative z-20 -mt-10 px-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            const content = (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38] transition duration-300 group-hover:scale-105">
                  <Icon size={25} />
                </div>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#082A55]">
                  {item.label}
                </p>

                <h2 className="mt-2 break-words text-xl font-black text-[#031B38]">
                  {item.value}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="group rounded-[2.2rem] border border-slate-100 bg-white p-6 shadow-[0_20px_65px_rgba(3,27,56,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,36,71,0.18)]"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="group rounded-[2.2rem] border border-slate-100 bg-white p-6 shadow-[0_20px_65px_rgba(3,27,56,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,36,71,0.18)]"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="overflow-hidden bg-white py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 lg:grid-cols-12 lg:px-8">
          {/* LEFT CONTENT */}

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#002447] px-5 py-2 text-sm font-black text-[#F4E940]">
                <ShieldCheck size={18} />
                Professional Pest Control Support
              </div>

              <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
                Need Help With a
                <span className="block text-[#082A55]">Pest Problem?</span>
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                Complete the contact form with your property details and the
                type of pest issue you are experiencing. The Prompt Pest Control
                team will use this information to understand your enquiry.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  {
                    icon: Home,
                    title: "Residential Pest Control",
                    text: "Support for houses, flats, landlords and residential properties.",
                  },
                  {
                    icon: Building2,
                    title: "Commercial Pest Control",
                    text: "Professional pest management support for London businesses.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Clear Service Process",
                    text: "Inspection, suitable treatment and prevention guidance.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F4E940] hover:shadow-xl"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#002447] text-[#F4E940] transition duration-300 group-hover:bg-[#F4E940] group-hover:text-[#031B38]">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-[#031B38]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 overflow-hidden rounded-[2.5rem] bg-[#F4E940] p-7 text-[#031B38]">
                <p className="text-sm font-black uppercase tracking-[0.2em]">
                  Prefer to speak directly?
                </p>

                <a
                  href="tel:07845873058"
                  className="mt-3 flex items-center gap-3 text-3xl font-black sm:text-4xl"
                >
                  <Phone size={30} />
                  07845 873058
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[3.2rem] bg-[#002447]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-[#F8FAFC] p-7 shadow-[0_30px_100px_rgba(3,27,56,0.14)] sm:p-10">
                <div className="mb-9 flex flex-col gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#082A55]">
                      Online Enquiry
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-[#031B38] sm:text-4xl">
                      Request Pest Control Help
                    </h2>
                  </div>

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-[#F4E940] text-[#031B38]">
                    <Send size={28} />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#031B38]"
                      >
                        Full Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#031B38] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#031B38]"
                      >
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#031B38] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#031B38]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        required
                        className={`w-full rounded-2xl border bg-white px-5 py-4 text-[#031B38] outline-none transition duration-200 placeholder:text-slate-400 focus:ring-4 ${
                          phoneError
                            ? "border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-[#F4E940] focus:ring-[#F4E940]/20"
                        }`}
                      />

                      {phoneError && (
                        <p className="mt-2 text-sm font-bold text-red-600">
                          {phoneError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-postcode"
                        className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#031B38]"
                      >
                        Postcode
                      </label>

                      <input
                        id="contact-postcode"
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="Enter your postcode"
                        autoComplete="postal-code"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#031B38] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#031B38]"
                    >
                      Service Required
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#031B38] outline-none transition duration-200 focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
                    >
                      <option value="">Select a pest control service</option>

                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#031B38]"
                    >
                      Tell Us About the Problem
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the pest activity, affected areas or any signs you have noticed."
                      rows={6}
                      required
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#031B38] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#F4E940] focus:ring-4 focus:ring-[#F4E940]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#002447] px-7 py-5 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#031B38] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending Your Enquiry..." : "Send Your Enquiry"}

                    <ArrowRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}

      <section className="bg-[#002447] py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="font-black uppercase tracking-[0.2em] text-[#F4E940]">
              London Pest Control Coverage
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Supporting London Homes
              <span className="block text-[#F4E940]">
                and Commercial Properties
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              The Prompt Pest Control supports residential customers,
              landlords and businesses across London. Send your postcode with
              your enquiry so our team can discuss service availability for
              your location.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[3rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
              <MapPin size={42} className="text-[#F4E940]" />

              <h3 className="mt-5 text-3xl font-black">London Service Area</h3>

              <p className="mt-4 leading-8 text-white/70">
                Residential pest control, landlord support and commercial pest
                management across London and nearby areas.
              </p>

              <a
                href="tel:07845873058"
                className="mt-7 flex items-center justify-center gap-3 rounded-2xl bg-[#F4E940] px-6 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1"
              >
                <Phone size={18} />
                Call Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}