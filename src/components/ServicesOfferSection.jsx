
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   ShieldCheck,
//   Bug,
//   Rat,
//   Bed,
//   SprayCan,
//   Bird,
//   Home,
// } from "lucide-react";

// const services = [
//   {
//     title: "Mice & Rats Pest Control",
//     slug: "/residential-pest-control/rat-mice-control",
//     icon: Rat,
//     image: "/images/service-rat-mice-cutout.webp",
//     text: "Professional rodent control for London homes and businesses with inspection, treatment and prevention advice.",
//   },
//   {
//     title: "Bed Bugs Pest Control",
//     slug: "/residential-pest-control/bed-bug-control",
//     icon: Bed,
//     image: "/images/service-bedbug-cutout.webp",
//     text: "Targeted bed bug inspection and treatments for bedrooms, mattresses, furniture and hidden cracks.",
//   },
//   {
//     title: "Cockroaches Control",
//     slug: "/residential-pest-control/cockroach-control",
//     icon: Bug,
//     image: "/images/service-cockroach-cutout.webp",
//     text: "Cockroach control for kitchens, bathrooms, food areas and commercial premises across London.",
//   },
//   {
//     title: "Wasp Nest Control",
//     slug: "/residential-pest-control/wasp-nest-control",
//     icon: SprayCan,
//     image: "/images/service-wasp-cutout.webp",
//     text: "Safe support for wasp nest problems around roof edges, lofts, gardens and property entry points.",
//   },
//   {
//     title: "Bird Control",
//     slug: "/residential-pest-control/bird-control",
//     icon: Bird,
//     image: "/images/service-bird-cutout.webp",
//     text: "Bird proofing and deterrent solutions for roofs, ledges, buildings and commercial properties.",
//   },
//   {
//     title: "Ant Control",
//     slug: "/residential-pest-control/ant-control",
//     icon: Home,
//     image: "/images/service-ant-cutout.webp",
//     text: "Ant inspection and treatment for kitchens, floors, wall gaps, gardens and property entry points.",
//   },
// ];

// export default function ServicesOfferSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#031B38] py-28 text-white">
//       <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
//         <div className="mx-auto mb-20 max-w-4xl text-center">
//           <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4E940]/35 bg-white/10 px-5 py-2 text-sm font-black text-[#F4E940] backdrop-blur">
//             <ShieldCheck size={18} />
//             Pest Control Services We Offer
//           </div>

//           <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
//             Pest Control Services
//             <span className="block text-[#F4E940]">We Offer</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
//             The Prompt Pest Control offers professional pest control services
//             for residential and commercial customers across London.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <article key={service.title} className="group relative">
//                 <div className="absolute -inset-[2px] rounded-[3rem] bg-[linear-gradient(120deg,transparent,#7C3AED,transparent,#F4E940,transparent)] opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

//                 <div className="relative min-h-[540px] overflow-visible rounded-[3rem] border border-white/10 bg-white/10 px-7 pb-8 pt-48 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur transition duration-500 group-hover:-translate-y-3 group-hover:bg-white group-hover:shadow-[0_0_45px_rgba(124,58,237,0.55),0_35px_100px_rgba(3,27,56,0.35)]">
//                   <div className="absolute -top-20 left-1/2 h-72 w-[88%] -translate-x-1/2">
//                     <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-purple-500/40 blur-2xl transition duration-500 group-hover:scale-125" />

//                     <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] bg-white/10 p-3 shadow-2xl transition duration-700 group-hover:-translate-y-3 group-hover:scale-105">
//                       {service.image && (
//                         <img
//                           src={service.image}
//                           alt={`${service.title} by The Prompt Pest Control London`}
//                           className="h-full w-full rounded-[2rem] object-cover"
//                           loading="lazy"
//                         />
//                       )}
//                     </div>
//                   </div>

//                   <div className="absolute right-7 top-7 text-7xl font-black text-white/5 group-hover:text-[#082A55]/5">
//                     0{index + 1}
//                   </div>

//                   <div className="mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F4E940] text-[#031B38] shadow-lg transition duration-500 group-hover:bg-[#082A55] group-hover:text-[#F4E940]">
//                     <Icon size={30} />
//                   </div>

//                   <h3 className="text-center text-3xl font-black leading-tight text-white transition group-hover:text-[#031B38]">
//                     {service.title}
//                   </h3>

//                   <p className="mt-5 text-center text-base leading-8 text-white/70 transition group-hover:text-slate-600">
//                     {service.text}
//                   </p>

//                   <div className="mt-8 flex flex-wrap justify-center gap-3">
//                     <Link
//                       to="/contact-us"
//                       className="inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition hover:-translate-y-1"
//                     >
//                       Contact Us
//                       <Phone size={15} />
//                     </Link>

//                     <Link
//                       to={service.slug}
//                       className="inline-flex items-center gap-2 rounded-full bg-[#082A55] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#031B38]"
//                     >
//                       View Detail
//                       <ArrowRight size={15} />
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="mt-20 text-center">
//           <Link
//             to="/residential-pest-control"
//             className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-10 py-5 font-black text-[#031B38] transition duration-300 hover:-translate-y-1"
//           >
//             View All Pest Control Services
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
















import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Bug,
  Rat,
  Bed,
  SprayCan,
  Bird,
  Home,
} from "lucide-react";

const services = [
  {
    title: "Mice & Rats Pest Control",
    slug: "/residential-pest-control/rat-mice-control",
    icon: Rat,
    image: "/images/service-rat-mice-cutout.webp",
    text: "Professional rodent control for London homes and businesses with inspection, treatment and prevention advice.",
  },
  {
    title: "Bed Bugs Pest Control",
    slug: "/residential-pest-control/bed-bug-control",
    icon: Bed,
    image: "/images/service-bedbug-cutout.webp",
    text: "Targeted bed bug inspection and treatments for bedrooms, mattresses, furniture and hidden cracks.",
  },
  {
    title: "Cockroaches Control",
    slug: "/residential-pest-control/cockroach-control",
    icon: Bug,
    image: "/images/service-cockroach-cutout.webp",
    text: "Cockroach control for kitchens, bathrooms, food areas and commercial premises across London.",
  },
  {
    title: "Wasp Nest Control",
    slug: "/residential-pest-control/wasp-nest-control",
    icon: SprayCan,
    image: "/images/service-wasp-cutout.webp",
    text: "Safe support for wasp nest problems around roof edges, lofts, gardens and property entry points.",
  },
  {
    title: "Bird Control",
    slug: "/residential-pest-control/bird-control",
    icon: Bird,
    image: "/images/service-bird-cutout.webp",
    text: "Bird proofing and deterrent solutions for roofs, ledges, buildings and commercial properties.",
  },
  {
    title: "Ant Control",
    slug: "/residential-pest-control/ant-control",
    icon: Home,
    image: "/images/service-ant-cutout.webp",
    text: "Ant inspection and treatment for kitchens, floors, wall gaps, gardens and property entry points.",
  },
];

export default function ServicesOfferSection() {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(slug);
  };

  const handleCardKeyDown = (event, slug) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(slug);
    }
  };

  const stopCardNavigation = (event) => {
    event.stopPropagation();
  };

  return (
    <section className="relative overflow-hidden bg-[#031B38] py-28 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4E940]/35 bg-white/10 px-5 py-2 text-sm font-black text-[#F4E940] backdrop-blur">
            <ShieldCheck size={18} />
            Pest Control Services We Offer
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
            Pest Control Services

            <Link
              to="/residential-pest-control"
              className="mx-auto mt-2 block w-fit text-[#F4E940] underline decoration-[3px] underline-offset-8 transition-colors duration-300 hover:text-white hover:decoration-white"
            >
              We Offer
            </Link>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            The Prompt Pest Control offers professional{" "}
            <Link
              to="/residential-pest-control"
              className="font-bold text-[#F4E940] underline decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white"
            >
              pest control services
            </Link>{" "}
            for residential and commercial customers across London.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                role="link"
                tabIndex={0}
                aria-label={`View ${service.title}`}
                onClick={() => handleCardClick(service.slug)}
                onKeyDown={(event) =>
                  handleCardKeyDown(event, service.slug)
                }
                className="group relative cursor-pointer rounded-[3rem] outline-none focus-visible:ring-4 focus-visible:ring-[#F4E940]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#031B38]"
              >
                <div className="pointer-events-none absolute -inset-[2px] rounded-[3rem] bg-[linear-gradient(120deg,transparent,#7C3AED,transparent,#F4E940,transparent)] opacity-0 blur-md transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

                <div className="relative min-h-[540px] overflow-visible rounded-[3rem] border border-white/10 bg-white/10 px-7 pb-8 pt-48 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur transition duration-500 group-hover:-translate-y-3 group-hover:bg-white group-hover:shadow-[0_0_45px_rgba(124,58,237,0.55),0_35px_100px_rgba(3,27,56,0.35)] group-focus-visible:-translate-y-3 group-focus-visible:bg-white">
                  <div className="absolute -top-20 left-1/2 h-72 w-[88%] -translate-x-1/2">
                    <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-purple-500/40 blur-2xl transition duration-500 group-hover:scale-125" />

                    <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] bg-white/10 p-3 shadow-2xl transition duration-700 group-hover:-translate-y-3 group-hover:scale-105">
                      {service.image && (
                        <img
                          src={service.image}
                          alt={`${service.title} by The Prompt Pest Control London`}
                          className="h-full w-full rounded-[2rem] object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>

                  <div className="absolute right-7 top-7 text-7xl font-black text-white/5 transition group-hover:text-[#082A55]/5">
                    0{index + 1}
                  </div>

                  <div className="mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F4E940] text-[#031B38] shadow-lg transition duration-500 group-hover:bg-[#082A55] group-hover:text-[#F4E940]">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-center text-3xl font-black leading-tight text-[#F4E940] underline decoration-[3px] underline-offset-8 transition-colors duration-300 group-hover:text-[#082A55] group-hover:decoration-[#082A55]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-center text-base leading-8 text-white/70 transition group-hover:text-slate-600">
                    {service.text}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link
                      to="/contact-us"
                      onClick={stopCardNavigation}
                      onKeyDown={stopCardNavigation}
                      className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition hover:-translate-y-1 hover:bg-white"
                    >
                      Contact Us
                      <Phone size={15} />
                    </Link>

                    <Link
                      to={service.slug}
                      onClick={stopCardNavigation}
                      onKeyDown={stopCardNavigation}
                      className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#082A55] px-5 py-3 text-sm font-black text-white underline decoration-2 underline-offset-4 transition hover:-translate-y-1 hover:bg-[#031B38]"
                    >
                      View Detail
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/residential-pest-control"
            className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-10 py-5 font-black text-[#031B38] underline decoration-2 underline-offset-4 transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            View All Pest Control Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}