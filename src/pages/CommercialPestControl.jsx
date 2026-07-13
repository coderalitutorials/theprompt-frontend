// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   ShieldCheck,
//   Building2,
//   Store,
//   Factory,
//   HeartPulse,
//   Landmark,
//   Utensils,
//   Ship,
//   Pill,
//   CheckCircle2,
// } from "lucide-react";

// import { commercialServices } from "../data/servicesData";

// const commercialVisuals = {
//   "office-pest-control": {
//     icon: Building2,
//     image: "/images/commercial-office-pest-control.webp",
//     label: "Office Spaces",
//   },
//   "retail-business-pest-control": {
//     icon: Store,
//     image: "/images/commercial-retail-pest-control.webp",
//     label: "Retail Business",
//   },
//   "pharmaceutical-pest-control": {
//     icon: Pill,
//     image: "/images/commercial-pharmaceutical-pest-control.webp",
//     label: "Pharmaceutical",
//   },
//   "marine-port-pest-control": {
//     icon: Ship,
//     image: "/images/commercial-marine-port-pest-control.webp",
//     label: "Marine & Port",
//   },
//   "industrial-premises-pest-control": {
//     icon: Factory,
//     image: "/images/commercial-industrial-pest-control.webp",
//     label: "Industrial Sites",
//   },
//   "health-care-pest-control": {
//     icon: HeartPulse,
//     image: "/images/commercial-healthcare-pest-control.webp",
//     label: "Healthcare",
//   },
//   "museums-antiquities-pest-control": {
//     icon: Landmark,
//     image: "/images/commercial-museum-pest-control.webp",
//     label: "Museums",
//   },
//   "food-business-pest-control": {
//     icon: Utensils,
//     image: "/images/commercial-food-business-pest-control.webp",
//     label: "Food Businesses",
//   },
// };

// export default function CommercialPestControl() {
//   return (
//     <main>
//       <section className="relative overflow-hidden bg-[#031B38] pt-36 pb-28 text-white">
//         <div className="absolute inset-0">
//           <img
//             src="/images/commercial-pest-control-hero.webp"
//             alt="Commercial pest control services in London by The Prompt Pest Control"
//             className="h-full w-full object-cover opacity-30"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-[#031B38]/78" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="mx-auto max-w-5xl text-center">
//             <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
//               <ShieldCheck size={18} />
//               Commercial Pest Control London
//             </div>

//             <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[76px]">
//               Commercial Pest Control
//               <span className="block text-[#F4E940]">For London Businesses</span>
//             </h1>

//             <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
//               The Prompt Pest Control provides professional commercial pest
//               control support for offices, retail sites, healthcare properties,
//               food businesses, industrial premises and specialist industries.
//             </p>

//             <div className="mt-9 flex flex-wrap justify-center gap-3">
//               {["Inspection", "Treatment", "Compliance Support"].map((item) => (
//                 <span
//                   key={item}
//                   className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur"
//                 >
//                   <CheckCircle2 size={17} className="text-[#F4E940]" />
//                   {item}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-10 flex flex-wrap justify-center gap-4">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition hover:-translate-y-1"
//               >
//                 Request Commercial Support
//                 <ArrowRight size={18} />
//               </Link>

//               <a
//                 href="tel:07845873058"
//                 className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-black text-white transition hover:bg-white hover:text-[#031B38]"
//               >
//                 <Phone size={18} />
//                 07845 873058
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden bg-white py-28">
//         <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#F4E940]/20 blur-3xl" />
//         <div className="absolute right-[-160px] bottom-20 h-[420px] w-[420px] rounded-full bg-[#082A55]/10 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
//             <div className="lg:col-span-8">
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
//                 <Building2 size={18} />
//                 Business Pest Control Services
//               </div>

//               <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
//                 Industry Focused Pest Control
//                 <span className="block text-[#082A55]">For Commercial Sites</span>
//               </h2>

//               <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
//                 Choose your business sector below. Each commercial service page
//                 explains the pest risks, treatment approach and prevention
//                 support for that industry.
//               </p>
//             </div>

//             <div className="lg:col-span-4 lg:text-right">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 rounded-full bg-[#031B38] px-7 py-4 font-black text-white transition hover:-translate-y-1"
//               >
//                 Speak To Our Team
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
//             {commercialServices.map((service, index) => {
//               const visual = commercialVisuals[service.slug] || {};
//               const Icon = visual.icon || Building2;

//               return (
//                 <article
//                   key={service.slug}
//                   className="group relative overflow-hidden rounded-[3rem] border border-slate-100 bg-[#F8FAFC] p-4 shadow-[0_20px_70px_rgba(3,27,56,0.08)] transition duration-500 hover:-translate-y-2 hover:bg-[#031B38] hover:shadow-[0_35px_100px_rgba(3,27,56,0.22)]"
//                 >
//                   <div className="grid grid-cols-1 gap-5 lg:grid-cols-[230px_1fr]">
//                     <div className="relative overflow-hidden rounded-[2.4rem] bg-[#031B38]">
//                       {visual.image && (
//                         <img
//                           src={visual.image}
//                           alt={`${service.title} London`}
//                           className="h-72 w-full object-cover  object-[55%_center] transition duration-700 group-hover:scale-105 lg:h-full"
//                           loading="lazy"
//                         />
//                       )}

//                       <div className="absolute inset-0 bg-gradient-to-t from-[#031B38]/80 via-transparent to-transparent" />

//                       <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">
//                         <Icon size={27} />
//                       </div>
//                     </div>

//                     <div className="relative flex flex-col justify-between p-3 lg:p-5">
//                       <span className="absolute right-3 top-0 text-7xl font-black text-[#082A55]/5 group-hover:text-white/5">
//                         0{index + 1}
//                       </span>

//                       <div>
//                         <p className="text-sm font-black uppercase tracking-[0.2em] text-[#082A55] transition group-hover:text-[#F4E940]">
//                           {visual.label || "Commercial Service"}
//                         </p>

//                         <h3 className="mt-3 text-3xl font-black leading-tight text-[#031B38] transition group-hover:text-white">
//                           {service.title}
//                         </h3>

//                         <p className="mt-4 leading-8 text-slate-600 transition group-hover:text-white/70">
//                           Professional commercial pest control support designed
//                           around your site, industry risks, working environment
//                           and prevention needs.
//                         </p>
//                       </div>

//                       <div className="mt-7 flex flex-wrap gap-3">
//                         <Link
//                           to="/contact-us"
//                           className="inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition hover:-translate-y-1"
//                         >
//                           Contact Us
//                           <Phone size={15} />
//                         </Link>

//                         <Link
//                           to={service.path}
//                           className="inline-flex items-center gap-2 rounded-full bg-[#082A55] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 group-hover:bg-white group-hover:text-[#031B38]"
//                         >
//                           View Detail
//                           <ArrowRight size={15} />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }








import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Building2,
  Store,
  Factory,
  HeartPulse,
  Landmark,
  Utensils,
  Ship,
  Pill,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

import { commercialServices } from "../data/servicesData";
import AboutCallbackSection from "../components/AboutCallbackSection";

const commercialVisuals = {
  "office-pest-control": {
    icon: Building2,
    image: "/images/commercial-office-pest-control.webp",
    label: "Office Spaces",
  },
  "retail-business-pest-control": {
    icon: Store,
    image: "/images/commercial-retail-pest-control.webp",
    label: "Retail Business",
  },
  "pharmaceutical-pest-control": {
    icon: Pill,
    image: "/images/commercial-pharmaceutical-pest-control.webp",
    label: "Pharmaceutical",
  },
  "marine-port-pest-control": {
    icon: Ship,
    image: "/images/commercial-marine-port-pest-control.webp",
    label: "Marine & Port",
  },
  "industrial-premises-pest-control": {
    icon: Factory,
    image: "/images/commercial-industrial-pest-control.webp",
    label: "Industrial Sites",
  },
  "health-care-pest-control": {
    icon: HeartPulse,
    image: "/images/commercial-healthcare-pest-control.webp",
    label: "Healthcare",
  },
  "museums-antiquities-pest-control": {
    icon: Landmark,
    image: "/images/commercial-museum-pest-control.webp",
    label: "Museums",
  },
  "food-business-pest-control": {
    icon: Utensils,
    image: "/images/commercial-food-business-pest-control.webp",
    label: "Food Businesses",
  },
};

export default function CommercialPestControl() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const handleCardKeyDown = (event, path) => {
    if (
      path &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      navigate(path);
    }
  };

  const stopCardNavigation = (event) => {
    event.stopPropagation();
  };

  return (
    <main>
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#031B38] pb-28 pt-36 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/commercial-pest-control-hero.webp"
            alt="Commercial pest control services in London by The Prompt Pest Control"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />

          <div className="absolute inset-0 bg-[#031B38]/78" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
              <ShieldCheck size={18} />
              Commercial Pest Control London
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[76px]">
              Commercial Pest Control

              <span className="block text-[#F4E940]">
                For London Businesses
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
              The Prompt Pest Control provides professional commercial pest
              control support for offices, retail sites, healthcare properties,
              food businesses, industrial premises and specialist industries.
              You can also explore our{" "}
              <Link
                to="/blogs"
                className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
              >
                pest control guides and advice
              </Link>
              .
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {[
                "Inspection",
                "Treatment",
                "Compliance Support",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur"
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#F4E940]"
                  />

                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Request Commercial Support
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:07845873058"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#031B38]"
              >
                <Phone size={18} />
                07845 873058
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SERVICES SECTION */}

      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#F4E940]/20 blur-3xl" />

        <div className="absolute bottom-20 right-[-160px] h-[420px] w-[420px] rounded-full bg-[#082A55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
                <Building2 size={18} />
                Business Pest Control Services
              </div>

              <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
                Industry Focused Pest Control

                <span className="block text-[#082A55]">
                  For Commercial Sites
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Choose your business sector below. Each commercial service page
                explains the pest risks, treatment approach and prevention
                support for that industry. For help choosing the right service,{" "}
                <Link
                  to="/contact-us"
                  className="font-black text-[#082A55] underline decoration-[#082A55] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#B69E00] hover:decoration-[#B69E00]"
                >
                  contact our commercial team
                </Link>
                .
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#031B38] px-7 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#082A55]"
              >
                Speak To Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* COMMERCIAL SERVICE CARDS */}

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {commercialServices.map((service, index) => {
              const visual = commercialVisuals[service.slug] || {};
              const Icon = visual.icon || Building2;

              const servicePath =
                service.path ||
                `/commercial-pest-control/${service.slug}`;

              return (
                <article
                  key={service.slug}
                  role="link"
                  tabIndex={0}
                  aria-label={`View details for ${service.title}`}
                  onClick={() => handleCardClick(servicePath)}
                  onKeyDown={(event) =>
                    handleCardKeyDown(event, servicePath)
                  }
                  className="group relative cursor-pointer overflow-hidden rounded-[3rem] border border-slate-100 bg-[#F8FAFC] p-4 shadow-[0_20px_70px_rgba(3,27,56,0.08)] outline-none transition duration-500 hover:-translate-y-2 hover:bg-[#031B38] hover:shadow-[0_35px_100px_rgba(3,27,56,0.22)] focus-visible:ring-4 focus-visible:ring-[#082A55]/40 focus-visible:ring-offset-4"
                >
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-[230px_1fr]">
                    <div className="relative overflow-hidden rounded-[2.4rem] bg-[#031B38]">
                      {visual.image ? (
                        <img
                          src={visual.image}
                          alt={`${service.title} service in London`}
                          className="h-72 w-full object-cover object-[55%_center] transition duration-700 group-hover:scale-105 lg:h-full"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-72 w-full items-center justify-center bg-[#082A55] text-[#F4E940] lg:h-full">
                          <Icon size={70} />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#031B38]/80 via-transparent to-transparent" />

                      <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38] shadow-lg">
                        <Icon size={27} />
                      </div>
                    </div>

                    <div className="relative flex flex-col justify-between p-3 lg:p-5">
                      <span className="absolute right-3 top-0 text-7xl font-black text-[#082A55]/5 transition-colors duration-300 group-hover:text-white/5">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#082A55] transition-colors duration-300 group-hover:text-[#F4E940]">
                          {visual.label || "Commercial Service"}
                        </p>

                        <h3 className="mt-3 inline-block text-3xl font-black leading-tight text-[#082A55] underline decoration-[#082A55] decoration-[3px] underline-offset-8 transition-colors duration-300 group-hover:text-[#F4E940] group-hover:decoration-[#F4E940]">
                          {service.title}
                        </h3>

                        <p className="mt-5 leading-8 text-slate-600 transition-colors duration-300 group-hover:text-white/70">
                          Professional commercial pest control support designed
                          around your site, industry risks, working environment
                          and prevention needs.
                        </p>
                      </div>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                          to="/contact-us"
                          onClick={stopCardNavigation}
                          onKeyDown={stopCardNavigation}
                          aria-label={`Contact us about ${service.title}`}
                          className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-white"
                        >
                          Contact Us
                          <Phone size={15} />
                        </Link>

                        <Link
                          to={servicePath}
                          onClick={stopCardNavigation}
                          onKeyDown={stopCardNavigation}
                          aria-label={`View ${service.title} details`}
                          className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#082A55] px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#031B38] group-hover:bg-white group-hover:text-[#031B38]"
                        >
                          <span className="underline decoration-2 underline-offset-4">
                            View Detail
                          </span>

                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* COMMERCIAL GUIDANCE CTA */}

          <div className="mt-20 rounded-[3rem] bg-[#031B38] p-8 text-white shadow-[0_25px_80px_rgba(3,27,56,0.18)] sm:p-10">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
                  <BookOpen size={18} />
                  Pest Control Information
                </div>

                <h2 className="text-3xl font-black sm:text-4xl">
                  Read Pest Control Guides for London Properties
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-white/70">
                  Explore practical information about common pest activity,
                  warning signs, treatment options and prevention methods that
                  may also affect offices, retail sites and commercial
                  premises.
                </p>
              </div>

              <Link
                to="/blogs"
                className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#F4E940] px-7 py-4 font-black text-[#031B38] underline decoration-[#031B38] decoration-2 underline-offset-4 transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                View Pest Control Articles
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
       <AboutCallbackSection/>
    </main>
  );
}