



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   ShieldCheck,
//   Home,
//   Bug,
//   Rat,
//   Bed,
//   SprayCan,
//   Bird,
//   Sparkles,
//   CheckCircle2,
//   BookOpen,
// } from "lucide-react";

// import { residentialServices } from "../data/servicesData";

// const iconMap = {
//   "rat-mice-control": Rat,
//   "bed-bug-control": Bed,
//   "cockroach-control": Bug,
//   "ant-control": Home,
//   "flea-control": Bug,
//   "wasp-nest-control": SprayCan,
//   "moth-control": Sparkles,
//   "carpet-beetle-control": Bug,
//   "squirrel-control": Home,
//   "bird-control": Bird,
//   "bumble-bee-control": Bug,
// };

// const imageMap = {
//   "rat-mice-control": "/images/service-rat-mice-cutout.webp",
//   "bed-bug-control": "/images/service-bedbug-cutout.webp",
//   "cockroach-control": "/images/service-cockroach-cutout.webp",
//   "ant-control": "/images/service-ant-cutout.webp",
//   "flea-control": "/images/service-flea-cutout.webp",
//   "wasp-nest-control": "/images/service-wasp-cutout.webp",
//   "moth-control": "/images/service-moth-cutout.webp",
//   "carpet-beetle-control": "/images/service-carpet-beetle-cutout.webp",
//   "squirrel-control": "/images/service-squirrel-cutout.webp",
//   "bird-control": "/images/service-bird-cutout.webp",
//   "bumble-bee-control": "/images/service-bee-cutout.webp",
// };

// const pestGuides = [
//   {
//     title: "How to Get Rid of Mice in Your Home",
//     path: "/blogs/mice-in-house-control-solutions",
//     icon: Rat,
//   },
//   {
//     title: "Professional Bed Bug Treatment Guide",
//     path: "/blogs/bed-bug-treatment-guide",
//     icon: Bed,
//   },
//   {
//     title: "Why Cockroaches Invade UK Properties",
//     path: "/blogs/cockroach-control-guide",
//     icon: Bug,
//   },
//   {
//     title: "Safe and Effective Ant Control Solutions",
//     path: "/blogs/ant-control-solutions",
//     icon: Home,
//   },
//   {
//     title: "When to Call Professionals for a Wasp Nest",
//     path: "/blogs/wasp-nest-control",
//     icon: SprayCan,
//   },
//   {
//     title: "Carpet Beetle Signs, Treatment and Prevention",
//     path: "/blogs/carpet-beetle-treatment",
//     icon: Sparkles,
//   },
// ];

// const serviceGuideMap = {
//   "rat-mice-control": {
//     title: "Read our mice control guide",
//     path: "/blogs/mice-in-house-control-solutions",
//   },
//   "bed-bug-control": {
//     title: "Read our bed bug treatment guide",
//     path: "/blogs/bed-bug-treatment-guide",
//   },
//   "cockroach-control": {
//     title: "Read our cockroach control guide",
//     path: "/blogs/cockroach-control-guide",
//   },
//   "ant-control": {
//     title: "Read our ant control guide",
//     path: "/blogs/ant-control-solutions",
//   },
//   "wasp-nest-control": {
//     title: "Read our wasp nest guide",
//     path: "/blogs/wasp-nest-control",
//   },
//   "carpet-beetle-control": {
//     title: "Read our carpet beetle guide",
//     path: "/blogs/carpet-beetle-treatment",
//   },
// };

// export default function ResidentialPestControl() {
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     if (path) {
//       navigate(path);
//     }
//   };

//   const handleCardKeyDown = (event, path) => {
//     if (
//       path &&
//       (event.key === "Enter" || event.key === " ")
//     ) {
//       event.preventDefault();
//       navigate(path);
//     }
//   };

//   const stopCardNavigation = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     <main>
//       {/* HERO SECTION */}

//       <section className="relative overflow-hidden bg-[#031B38] pb-28 pt-32 text-white">
//         <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F4E940]/10 blur-3xl" />

//         <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-3xl" />

//         <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-12 lg:px-8">
//           <div className="lg:col-span-7">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4E940]/35 bg-white/10 px-5 py-2 text-sm font-black text-[#F4E940] backdrop-blur">
//               <ShieldCheck size={18} />
//               The Prompt Residential Pest Control London
//             </div>

//             <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[76px]">
//               The Prompt Residential Pest Control

//               <span className="block text-[#F4E940]">
//                 For London Homes
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
//               The Prompt Pest Control provides professional residential pest
//               control services for houses, flats, landlords and family homes
//               across London. You can also explore our{" "}
//               <Link
//                 to="/blogs"
//                 className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
//               >
//                 pest control guides and advice
//               </Link>
//               .
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               {["Inspection", "Treatment", "Prevention"].map((item) => (
//                 <span
//                   key={item}
//                   className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur"
//                 >
//                   <CheckCircle2
//                     size={17}
//                     className="text-[#F4E940]"
//                   />

//                   {item}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-10 flex flex-wrap gap-4">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-white"
//               >
//                 Contact Us
//                 <ArrowRight size={18} />
//               </Link>

//               <a
//                 href="tel:07845873058"
//                 className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#031B38]"
//               >
//                 <Phone size={18} />
//                 07845 873058
//               </a>
//             </div>
//           </div>

//           <div className="relative hidden lg:col-span-5 lg:block">
//             <div className="absolute -inset-4 rounded-[3rem] bg-[#F4E940]/15 blur-2xl" />

//             <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-4 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur">
//               <img
//                 src="/images/services-prompt-banner.webp"
//                 alt="Residential pest control service for London homes"
//                 className="h-[520px] w-full rounded-[2.4rem] object-cover"
//                 loading="eager"
//               />

//               <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-white p-5 text-[#031B38] shadow-2xl">
//                 <p className="text-xs font-black uppercase tracking-[0.22em] text-[#082A55]">
//                   Home Protection
//                 </p>

//                 <h2 className="mt-2 text-2xl font-black">
//                   Inspect • Treat • Prevent
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}

//       <section className="relative overflow-hidden bg-white py-28">
//         <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F4E940]/20 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="mb-16 max-w-3xl">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
//               <Home size={18} />
//               Our Residential Services
//             </div>

//             <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
//               Pest Control Services

//               <span className="block text-[#082A55]">
//                 For Your Home
//               </span>
//             </h2>

//             <p className="mt-5 text-lg leading-8 text-slate-600">
//               Choose a service below to view full details or{" "}
//               <Link
//                 to="/contact-us"
//                 className="font-black text-[#082A55] underline decoration-[#082A55] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#B69E00] hover:decoration-[#B69E00]"
//               >
//                 contact our team
//               </Link>{" "}
//               for direct pest control support.
//             </p>
//           </div>

//           {/* PEST CONTROL ARTICLE LINKS */}

//           <div className="mb-28 rounded-[3rem] bg-[#031B38] p-7 text-white shadow-[0_25px_80px_rgba(3,27,56,0.18)] sm:p-10">
//             <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
//               <div>
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
//                   <BookOpen size={18} />
//                   Helpful Pest Control Articles
//                 </div>

//                 <h2 className="text-3xl font-black sm:text-4xl">
//                   Learn How to Identify and Manage Common Pests
//                 </h2>

//                 <p className="mt-4 max-w-3xl leading-8 text-white/70">
//                   Read practical guides covering pest signs, common causes,
//                   professional treatments and prevention advice for London
//                   properties.
//                 </p>
//               </div>

//               <Link
//                 to="/blogs"
//                 className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/20 bg-white/10 px-6 py-4 font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#031B38] hover:decoration-[#031B38]"
//               >
//                 View All Articles
//                 <ArrowRight size={18} />
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               {pestGuides.map((guide) => {
//                 const GuideIcon = guide.icon;

//                 return (
//                   <Link
//                     key={guide.path}
//                     to={guide.path}
//                     className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F4E940]/50 hover:bg-white"
//                   >
//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4E940] text-[#031B38]">
//                       <GuideIcon size={22} />
//                     </span>

//                     <span className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-[#082A55] group-hover:decoration-[#082A55]">
//                       {guide.title}
//                     </span>

//                     <ArrowRight
//                       size={18}
//                       className="ml-auto shrink-0 text-[#F4E940] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#082A55]"
//                     />
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* SERVICE CARDS */}

//           <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
//             {residentialServices.map((service, index) => {
//               const Icon = iconMap[service.slug] || ShieldCheck;
//               const image = imageMap[service.slug] || "";
//               const relatedGuide = serviceGuideMap[service.slug];

//               return (
//                 <article
//                   key={service.slug}
//                   role="link"
//                   tabIndex={0}
//                   aria-label={`View details for ${service.title}`}
//                   onClick={() => handleCardClick(service.path)}
//                   onKeyDown={(event) =>
//                     handleCardKeyDown(event, service.path)
//                   }
//                   className="group relative cursor-pointer rounded-[3rem] outline-none focus-visible:ring-4 focus-visible:ring-[#082A55]/40 focus-visible:ring-offset-4"
//                 >
//                   <div className="pointer-events-none absolute -inset-[2px] rounded-[3rem] bg-[linear-gradient(120deg,transparent,#7C3AED,transparent,#F4E940,transparent)] opacity-0 blur-md transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

//                   <div className="relative min-h-[590px] overflow-visible rounded-[3rem] border border-slate-100 bg-[#F8FAFC] px-7 pb-8 pt-48 shadow-[0_20px_70px_rgba(3,27,56,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:bg-white group-hover:shadow-[0_35px_100px_rgba(3,27,56,0.18)] group-focus-visible:-translate-y-3 group-focus-visible:bg-white group-focus-visible:shadow-[0_35px_100px_rgba(3,27,56,0.18)]">
//                     {image && (
//                       <div className="absolute -top-20 left-1/2 h-72 w-[88%] -translate-x-1/2">
//                         <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-purple-500/30 blur-2xl transition duration-500 group-hover:scale-125 group-focus-visible:scale-125" />

//                         <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl transition duration-700 group-hover:-translate-y-3 group-hover:scale-105 group-focus-visible:-translate-y-3 group-focus-visible:scale-105">
//                           <img
//                             src={image}
//                             alt={`${service.title} by The Prompt Pest Control London`}
//                             className="h-full w-full rounded-[2rem] object-cover"
//                             loading="lazy"
//                           />
//                         </div>
//                       </div>
//                     )}

//                     <div className="absolute right-7 top-7 text-7xl font-black text-[#082A55]/5">
//                       {String(index + 1).padStart(2, "0")}
//                     </div>

//                     <div className="mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#031B38] text-[#F4E940] shadow-lg transition duration-500 group-hover:bg-[#F4E940] group-hover:text-[#031B38] group-focus-visible:bg-[#F4E940] group-focus-visible:text-[#031B38]">
//                       <Icon size={30} />
//                     </div>

//                     <h3 className="text-center text-3xl font-black leading-tight text-[#082A55] underline decoration-[#082A55] decoration-[3px] underline-offset-8 transition-colors duration-300 group-hover:text-[#031B38] group-hover:decoration-[#F4A900]">
//                       {service.title}
//                     </h3>

//                     <p className="mt-5 text-center text-base leading-8 text-slate-600">
//                       Professional residential pest control support for London
//                       properties with inspection, treatment and prevention
//                       guidance.
//                     </p>

//                     {relatedGuide && (
//                       <div className="mt-5 text-center">
//                         <Link
//                           to={relatedGuide.path}
//                           onClick={stopCardNavigation}
//                           onKeyDown={stopCardNavigation}
//                           className="relative z-20 inline-flex items-center gap-2 font-black text-[#7C3AED] underline decoration-[#7C3AED] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#082A55] hover:decoration-[#082A55]"
//                         >
//                           <BookOpen size={17} />
//                           {relatedGuide.title}
//                         </Link>
//                       </div>
//                     )}

//                     <div className="mt-8 flex flex-wrap justify-center gap-3">
//                       <Link
//                         to="/contact-us"
//                         onClick={stopCardNavigation}
//                         onKeyDown={stopCardNavigation}
//                         aria-label={`Contact us about ${service.title}`}
//                         className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-[#031B38] hover:text-white"
//                       >
//                         Contact Us
//                         <Phone size={15} />
//                       </Link>

//                       <Link
//                         to={service.path}
//                         onClick={stopCardNavigation}
//                         onKeyDown={stopCardNavigation}
//                         aria-label={`View ${service.title} details`}
//                         className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#082A55] px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#031B38]"
//                       >
//                         <span className="underline decoration-2 underline-offset-4">
//                           View Detail
//                         </span>

//                         <ArrowRight size={15} />
//                       </Link>
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
  Home,
  Bug,
  Rat,
  Bed,
  SprayCan,
  Bird,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

import { residentialServices } from "../data/servicesData";
import AboutCallbackSection from "../components/AboutCallbackSection";

const iconMap = {
  "rat-mice-control": Rat,
  "bed-bug-control": Bed,
  "cockroach-control": Bug,
  "ant-control": Home,
  "flea-control": Bug,
  "wasp-nest-control": SprayCan,
  "moth-control": Sparkles,
  "carpet-beetle-control": Bug,
  "squirrel-control": Home,
  "bird-control": Bird,
  "bumble-bee-control": Bug,
};

const imageMap = {
  "rat-mice-control": "/images/service-rat-mice-cutout.webp",
  "bed-bug-control": "/images/service-bedbug-cutout.webp",
  "cockroach-control": "/images/service-cockroach-cutout.webp",
  "ant-control": "/images/service-ant-cutout.webp",
  "flea-control": "/images/service-flea-cutout.webp",
  "wasp-nest-control": "/images/service-wasp-cutout.webp",
  "moth-control": "/images/service-moth-cutout.webp",
  "carpet-beetle-control": "/images/service-carpet-beetle-cutout.webp",
  "squirrel-control": "/images/service-squirrel-cutout.webp",
  "bird-control": "/images/service-bird-cutout.webp",
  "bumble-bee-control": "/images/service-bee-cutout.webp",
};

const pestGuides = [
  {
    title: "How to Get Rid of Mice in Your Home",
    path: "/blogs/mice-in-house-control-solutions",
    icon: Rat,
  },
  {
    title: "Professional Bed Bug Treatment Guide",
    path: "/blogs/bed-bug-treatment-guide",
    icon: Bed,
  },
  {
    title: "Why Cockroaches Invade UK Properties",
    path: "/blogs/cockroach-control-guide",
    icon: Bug,
  },
  {
    title: "Safe and Effective Ant Control Solutions",
    path: "/blogs/ant-control-solutions",
    icon: Home,
  },
  {
    title: "When to Call Professionals for a Wasp Nest",
    path: "/blogs/wasp-nest-control",
    icon: SprayCan,
  },
  {
    title: "Carpet Beetle Signs, Treatment and Prevention",
    path: "/blogs/carpet-beetle-treatment",
    icon: Sparkles,
  },
];

const bumbleBeeFallback = {
  slug: "bumble-bee-control",
  title: "Bumble Bee Control",
  path: "/residential-pest-control/bumble-bee-control",
};

const getCompleteResidentialServices = () => {
  const services = Array.isArray(residentialServices)
    ? residentialServices
    : [];

  const hasBumbleBee = services.some(
    (service) => service.slug === "bumble-bee-control"
  );

  if (hasBumbleBee) {
    return services;
  }

  return [...services, bumbleBeeFallback];
};

export default function ResidentialPestControl() {
  const navigate = useNavigate();

  const completeServices = getCompleteResidentialServices();

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

      {/* <section className="relative overflow-hidden bg-[#031B38] pb-28 pt-32 text-white">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F4E940]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4E940]/35 bg-white/10 px-5 py-2 text-sm font-black text-[#F4E940] backdrop-blur">
              <ShieldCheck size={18} />
              The Prompt Residential Pest Control London
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[76px]">
              The Prompt Residential Pest Control

              <span className="block text-[#F4E940]">
                For London Homes
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              The Prompt Pest Control provides professional residential pest
              control services for houses, flats, landlords and family homes
              across London. You can also explore our{" "}
              <Link
                to="/blogs"
                className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
              >
                pest control guides and advice
              </Link>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Inspection", "Treatment", "Prevention"].map((item) => (
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

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Contact Us
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

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="absolute -inset-4 rounded-[3rem] bg-[#F4E940]/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-4 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur">
              <img
                src="/images/services-prompt-banner.webp"
                alt="Residential pest control service for London homes"
                className="h-[520px] w-full rounded-[2.4rem] object-cover"
                loading="eager"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-white p-5 text-[#031B38] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#082A55]">
                  Home Protection
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Inspect • Treat • Prevent
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}





<section className="relative overflow-hidden bg-[#031B38] pb-28 pt-28 text-white sm:pt-32">
  {/* Background decoration */}
  <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F4E940]/10 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-3xl" />

  <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:gap-14 lg:grid-cols-12 lg:px-8">
    {/* Left content */}
    <div className="lg:col-span-7">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4E940]/35 bg-white/10 px-4 py-2 text-xs font-black text-[#F4E940] backdrop-blur sm:px-5 sm:text-sm">
        <ShieldCheck size={18} className="shrink-0" />
        The Prompt Residential Pest Control London
      </div>

      <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[76px]">
        The Prompt Residential Pest Control

        <span className="mt-2 block text-[#F4E940]">
          For London Homes
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        The Prompt Pest Control provides professional residential pest
        control services for houses, flats, landlords and family homes
        across London. You can also explore our{" "}
        <Link
          to="/blogs"
          className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
        >
          pest control guides and advice
        </Link>
        .
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {["Inspection", "Treatment", "Prevention"].map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur sm:px-5"
          >
            <CheckCircle2
              size={17}
              className="shrink-0 text-[#F4E940]"
            />

            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link
          to="/contact-us"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-white"
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>

        <a
          href="tel:07845873058"
          className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#031B38]"
        >
          <Phone size={18} />
          07845 873058
        </a>
      </div>
    </div>

    {/* Responsive image */}
    <div className="relative mx-auto w-full max-w-[520px] lg:col-span-5 lg:max-w-none">
      <div className="absolute -inset-3 rounded-[2.5rem] bg-[#F4E940]/15 blur-2xl sm:-inset-4 sm:rounded-[3rem]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur sm:rounded-[3rem] sm:p-4">
        <img
          src="/images/services-prompt-banner.webp"
          alt="Residential pest control service for London homes"
          className="h-[360px] w-full rounded-[1.6rem] object-cover object-center sm:h-[460px] sm:rounded-[2.4rem] lg:h-[520px]"
          loading="eager"
        />

        <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white p-4 text-[#031B38] shadow-2xl sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-[2rem] sm:p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#082A55] sm:text-xs sm:tracking-[0.22em]">
            Home Protection
          </p>

          <h2 className="mt-2 text-lg font-black sm:text-2xl">
            Inspect • Treat • Prevent
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>





      {/* SERVICES SECTION */}

      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F4E940]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-24 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
              <Home size={18} />
              Our Residential Services
            </div>

            <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
              Pest Control Services

              <span className="block text-[#082A55]">
                For Your Home
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose a service below to view full details or{" "}
              <Link
                to="/contact-us"
                className="font-black text-[#082A55] underline decoration-[#082A55] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#B69E00] hover:decoration-[#B69E00]"
              >
                contact our team
              </Link>{" "}
              for direct pest control support.
            </p>
          </div>

          {/* SERVICE CARDS */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
            {completeServices.map((service, index) => {
              const Icon = iconMap[service.slug] || ShieldCheck;
              const image = imageMap[service.slug] || "";
              const servicePath =
                service.path ||
                `/residential-pest-control/${service.slug}`;

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
                  className="group relative cursor-pointer rounded-[3rem] outline-none focus-visible:ring-4 focus-visible:ring-[#082A55]/40 focus-visible:ring-offset-4"
                >
                  <div className="pointer-events-none absolute -inset-[2px] rounded-[3rem] bg-[linear-gradient(120deg,transparent,#7C3AED,transparent,#F4E940,transparent)] opacity-0 blur-md transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

                  <div className="relative min-h-[540px] overflow-visible rounded-[3rem] border border-slate-100 bg-[#F8FAFC] px-7 pb-8 pt-48 shadow-[0_20px_70px_rgba(3,27,56,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:bg-white group-hover:shadow-[0_35px_100px_rgba(3,27,56,0.18)] group-focus-visible:-translate-y-3 group-focus-visible:bg-white group-focus-visible:shadow-[0_35px_100px_rgba(3,27,56,0.18)]">
                    {image && (
                      <div className="absolute -top-20 left-1/2 h-72 w-[88%] -translate-x-1/2">
                        <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-purple-500/30 blur-2xl transition duration-500 group-hover:scale-125 group-focus-visible:scale-125" />

                        <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl transition duration-700 group-hover:-translate-y-3 group-hover:scale-105 group-focus-visible:-translate-y-3 group-focus-visible:scale-105">
                          <img
                            src={image}
                            alt={`${service.title} by The Prompt Pest Control London`}
                            className="h-full w-full rounded-[2rem] object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    <div className="absolute right-7 top-7 text-7xl font-black text-[#082A55]/5">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#031B38] text-[#F4E940] shadow-lg transition duration-500 group-hover:bg-[#F4E940] group-hover:text-[#031B38] group-focus-visible:bg-[#F4E940] group-focus-visible:text-[#031B38]">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-center text-3xl font-black leading-tight text-[#082A55] underline decoration-[#082A55] decoration-[3px] underline-offset-8 transition-colors duration-300 group-hover:text-[#031B38] group-hover:decoration-[#F4A900]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-center text-base leading-8 text-slate-600">
                      Professional residential pest control support for London
                      properties with inspection, treatment and prevention
                      guidance.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <Link
                        to="/contact-us"
                        onClick={stopCardNavigation}
                        onKeyDown={stopCardNavigation}
                        aria-label={`Contact us about ${service.title}`}
                        className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-3 text-sm font-black text-[#031B38] transition duration-300 hover:-translate-y-1 hover:bg-[#031B38] hover:text-white"
                      >
                        Contact Us
                        <Phone size={15} />
                      </Link>

                      <Link
                        to={servicePath}
                        onClick={stopCardNavigation}
                        onKeyDown={stopCardNavigation}
                        aria-label={`View ${service.title} details`}
                        className="relative z-20 inline-flex items-center gap-2 rounded-full bg-[#082A55] px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#031B38]"
                      >
                        <span className="underline decoration-2 underline-offset-4">
                          View Detail
                        </span>

                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* HELPFUL ARTICLE LINKS */}

          <div className="mt-32 rounded-[3rem] bg-[#031B38] p-7 text-white shadow-[0_25px_80px_rgba(3,27,56,0.18)] sm:p-10">
            <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
                  <BookOpen size={18} />
                  Helpful Pest Control Articles
                </div>

                <h2 className="text-3xl font-black sm:text-4xl">
                  Learn How to Identify and Manage Common Pests
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-white/70">
                  Read practical guides covering pest signs, common causes,
                  professional treatments and prevention advice for London
                  properties.
                </p>
              </div>

              <Link
                to="/blogs"
                className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/20 bg-white/10 px-6 py-4 font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#031B38] hover:decoration-[#031B38]"
              >
                View All Articles
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {pestGuides.map((guide) => {
                const GuideIcon = guide.icon;

                return (
                  <Link
                    key={guide.path}
                    to={guide.path}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F4E940]/50 hover:bg-white"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4E940] text-[#031B38]">
                      <GuideIcon size={22} />
                    </span>

                    <span className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-[#082A55] group-hover:decoration-[#082A55]">
                      {guide.title}
                    </span>

                    <ArrowRight
                      size={18}
                      className="ml-auto shrink-0 text-[#F4E940] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#082A55]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
   
      </section>
             <AboutCallbackSection/>
    </main>
  );
}