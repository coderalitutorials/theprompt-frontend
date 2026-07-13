


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const platformFadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
// };

// const linkContainerStagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.04 } },
// };

// const Footer = () => {
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.1 }}
//       className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans"
//     >
//       {/* TECH BACKDROP MATRIX LAYER */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-[160px] pointer-events-none" />

//       {/* MAIN LAYOUT HUB */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        
//         {/* UPPER ZONE: ASYMMETRIC SPLIT PLATFORM */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
          
//           {/* BRAND PROFILE MATRIX (5 COLUMNS) */}
//           <motion.div variants={platformFadeUp} className="lg:col-span-5 space-y-6 text-left">
//             <img
//               src="/images/peslog.webp"
//               alt="PesSave Services"
//               className="h-14 w-auto object-contain"
//             />
//             <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               Premium biological safety and structural pest containment infrastructure engineered for high-end residential and commercial zones in Chelsea.
//             </p>
//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl backdrop-blur-md shadow-xl">
//               <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </motion.div>

//           {/* DYNAMIC NAVIGATION LINKS BLOCK (7 COLUMNS) */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
            
//             {/* LINK HUB A: NAVIGATION INTERACTION */}
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Corporate Directory
//               </h4>
//               <motion.nav 
//                 variants={linkContainerStagger} 
//                 className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium"
//               >
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </motion.nav>
//             </div>

//             {/* LINK HUB B: DEEP ROUTING SERVICES */}
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
//                 Active Deployments
//               </h4>
//               <motion.div 
//                 variants={linkContainerStagger} 
//                 className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium"
//               >
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: { scrollToService: "Rats & Mice Control", category: "Rodents & Wildlife" },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: { scrollToService: "Bed Bugs Control", category: "Insects" },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: { scrollToService: "Carpet Moth Control Treatment", category: "Insects" },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </motion.div>
//             </div>

//           </div>
//         </div>

//         {/* MIDDLE ZONE: HORIZONTAL FLOW CONTACT GRID */}
//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
          
//           <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 text-left">
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>
//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Operational Base</span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">Chelsea, London, UK</span>
//             </div>
//           </div>

//           <a 
//             href="tel:07405 613595"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-all duration-300 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>
//             <div className="min-w-0 flex-grow">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Direct Hotline 24/7</span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors">07405 613595</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:text-[#76C7C0]" />
//           </a>

//           <a 
//             href="mailto:info@pessave.co.uk"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-all duration-300 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <Mail className="w-5 h-5" />
//             </div>
//             <div className="min-w-0 flex-grow truncate">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Secure Inbound Relay</span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors truncate">info@pestcontrolchelsea.uk</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:text-[#4FA3A5]" />
//           </a>

//         </div>

//         {/* LOWER ZONE: TERMINAL FOOTNOTE */}
//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()} <span className="text-slate-400">PesSave Services</span>. All rights engineered.
//           </p>
//           <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//             <span>PesSave System Core Architecture v2.4</span>
//           </div>
//         </div>

//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;


















// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/peslog.webp"
//               alt="PesSave Services"
//               className="h-14 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               Premium biological safety and structural pest containment
//               infrastructure engineered for high-end residential and commercial
//               zones in Chelsea.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
//           <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Operational Base
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 Chelsea, London, UK
//               </span>
//             </div>
//           </div>

//           <a
//             href="tel:07405613595"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Direct Hotline 24/7
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors duration-200">
//                 07405 613595
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#76C7C0]" />
//           </a>

//           <a
//             href="mailto:info@pessave.co.uk"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <Mail className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow truncate">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Secure Inbound Relay
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors duration-200 truncate">
//                 info@pestcontrolchelsea.uk
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#4FA3A5]" />
//           </a>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-400">PesSave Services</span>. All
//             rights engineered.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
//             <span>PesSave System Core Architecture v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;













// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#111111] text-white overflow-hidden border-t border-[#F36F21]/20 z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.08]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Services Limited"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               PrimeShield Services Limited provides professional pest control
//               support for London homes, landlords and businesses with reliable
//               treatments, inspections and prevention advice.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#F36F21]/10 border border-[#F36F21]/30 px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-200 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Treatment",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Treatment",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Control Services",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.08]">
//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Location
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 12 Old Bond Street, London, England,W1S4PW
//               </span>
//             </div>
//           </div>

//           {/* <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <ShieldCheck className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Company Number
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 17263881
//               </span>
//             </div>
//           </div> */}

//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Service Area
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 London, UK
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-300">
//               PrimeShield Services Limited
//             </span>
//             . All rights reserved.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] opacity-90" />
//             <span>PrimeShield Protection Framework</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





















import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

// import logo from "../assets/logo.png";


const usefulLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About Us",
    path: "/about-us",
  },

  {
    name: "Residential Pest Control",
    path: "/residential-pest-control",
  },

  {
    name: "Commercial Pest Control",
    path: "/commercial-pest-control",
  },
];


const otherLinks = [
  {
    name: "Blogs",
    path: "/blogs",
  },

  {
    name: "FAQs",
    path: "/faqs",
  },

  {
    name: "Contact",
    path: "/contact-us",
  },
];



export default function Footer() {


  return (

    <footer className="relative overflow-hidden bg-[#031B38] text-white">


      {/* background lights */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F4E940]/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-3xl" />





      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-20 lg:px-8">


        {/* TOP CTA */}


        <div className="
        mb-16
        rounded-[3rem]
        border border-white/10
        bg-white/10
        p-8
        backdrop-blur
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        ">


          <div className="
          flex flex-col gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          ">


            <div>

              <div className="
              mb-4
              inline-flex items-center gap-2
              rounded-full
              bg-[#F4E940]
              px-5 py-2
              text-sm
              font-black
              text-[#031B38]
              ">

                <ShieldCheck size={17}/>

                The Prompt Pest Control

              </div>



              <h2 className="
              max-w-2xl
              text-3xl
              sm:text-5xl
              font-black
              leading-tight
              ">
                Protect Your Property From Unwanted Pests
              </h2>


            </div>




            <a
            href="tel:07845873058"
            className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#F4E940]
            px-8 py-5
            font-black
            text-[#031B38]
            transition
            duration-300
            hover:-translate-y-1
            "
            >

              <Phone size={20}/>

              07845 873058


            </a>


          </div>


        </div>






        {/* FOOTER GRID */}


        <div className="
        grid
        grid-cols-1
        gap-12
        pb-16
        md:grid-cols-2
        lg:grid-cols-4
        ">



          {/* ABOUT */}


          <div>


            {/* <img
            src={logo}
            alt="The Prompt Pest Control London"
            className="
            mb-7
            h-20
            w-auto
            rounded-2xl
            bg-white
            p-2
            "
            /> */}



            <p className="
            leading-8
            text-white/70
            ">
              The Prompt Pest Control provides professional pest control
              solutions for homes and businesses across London.
            </p>



            <div className="mt-7 flex gap-3">


              {[
                FaFacebookF,
                FaLinkedinIn,
                FaInstagram,
                FaYoutube,
                FaTiktok,
              ].map((Icon,index)=>(


                <a
                key={index}
                href="#"
                className="
                flex h-11 w-11
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                border border-white/10
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#F4E940]
                hover:text-[#031B38]
                "
                >

                  <Icon size={17}/>


                </a>


              ))}


            </div>


          </div>






          {/* LINKS */}


          <div>


            <h3 className="text-xl font-black">
              Useful Links
            </h3>

            <div className="
            my-5
            h-1
            w-16
            rounded-full
            bg-[#F4E940]
            "/>



            <ul className="space-y-5">


              {usefulLinks.map((item)=>(


                <li key={item.path}>


                  <Link
                  to={item.path}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-white/70
                  transition
                  hover:translate-x-1
                  hover:text-[#F4E940]
                  "
                  >

                    <ArrowRight size={15}/>

                    {item.name}


                  </Link>


                </li>


              ))}


            </ul>



          </div>






          {/* OTHER */}



          <div>


            <h3 className="text-xl font-black">
              Other Links
            </h3>


            <div className="
            my-5
            h-1
            w-16
            rounded-full
            bg-[#F4E940]
            "/>



            <ul className="space-y-5">


              {otherLinks.map((item)=>(


                <li key={item.path}>


                  <Link
                  to={item.path}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-white/70
                  transition
                  hover:translate-x-1
                  hover:text-[#F4E940]
                  "
                  >

                    <ArrowRight size={15}/>

                    {item.name}


                  </Link>


                </li>


              ))}



            </ul>



          </div>








          {/* CONTACT */}



          <div>


            <h3 className="text-xl font-black">
              Contact Info
            </h3>


            <div className="
            my-5
            h-1
            w-16
            rounded-full
            bg-[#F4E940]
            "/>



            <div className="space-y-5">


              <p className="flex gap-3 text-white/75">

                <Phone className="text-[#F4E940]"/>

                07845 873058

              </p>



              <p className="flex gap-3 text-white/75">

                <Mail className="text-[#F4E940]"/>

                info@theprompt.co.uk

              </p>



              <p className="flex gap-3 text-white/75">

                <MapPin className="text-[#F4E940]"/>

                London, United Kingdom

              </p>



              <p className="flex gap-3 text-white/75">

                <Clock className="text-[#F4E940]"/>

                Available 24/7

              </p>


            </div>



          </div>


        </div>





        {/* COPYRIGHT */}


        <div className="
        border-t
        border-white/10
        py-6
        text-center
        text-sm
        text-white/55
        ">

          © The Prompt - 2025. All rights reserved.
          {" "}
          Design & Developed By

          <span className="font-black text-[#F4E940]">
            {" "}Hello Online Marketing
          </span>


        </div>



      </div>


    </footer>

  );
}