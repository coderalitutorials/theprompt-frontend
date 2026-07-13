






// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Phone,
//   ChevronDown,
//   Home,
//   Building2,
//   ShieldCheck,
//   ArrowRight,
//   Mail,
//   MapPin,
// } from "lucide-react";

// import {
//   residentialServices,
//   commercialServices,
// } from "../data/servicesData";

// const navClass = ({ isActive }) =>
//   `relative py-8 text-[15px] font-semibold transition ${
//     isActive ? "text-[#082A55]" : "text-slate-700 hover:text-[#082A55]"
//   } after:absolute after:left-0 after:bottom-6 after:h-[3px] after:rounded-full after:bg-[#F4E940] after:transition-all ${
//     isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
//   }`;

// function MegaDropdown({ title, items, mainPath, type }) {
//   const Icon = type === "commercial" ? Building2 : Home;

//   return (
//     <div className="relative group">
//       <Link
//         to={mainPath}
//         className="flex items-center gap-1 py-8 text-[15px] font-semibold text-slate-700 hover:text-[#082A55] transition"
//       >
//         {title}
//         <ChevronDown size={16} className="group-hover:rotate-180 transition" />
//       </Link>

//       <div className="absolute left-1/2 top-full hidden w-[720px] -translate-x-1/2 pt-3 group-hover:block z-50">
//         <div className="overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(3,27,56,0.22)] ring-1 ring-slate-100">
//           <div className="grid grid-cols-[260px_1fr]">
//             <div className="relative bg-gradient-to-br from-[#031B38] via-[#082A55] to-[#123F78] p-6 text-white">
//               <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#F4E940]/20" />

//               <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">
//                 <Icon size={25} />
//               </div>

//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4E940]">
//                 London Pest Control
//               </p>

//               <h3 className="mt-2 text-2xl font-black leading-tight">
//                 {title}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-white/80">
//                 Fast inspection, targeted treatment and prevention support for
//                 London properties.
//               </p>

//               <Link
//                 to={mainPath}
//                 className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082A55] hover:bg-[#F4E940] transition"
//               >
//                 View All Services <ArrowRight size={16} />
//               </Link>
//             </div>

//             <div className="grid grid-cols-2 gap-2 p-5">
//               {items.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className="group/item flex items-center justify-between rounded-2xl border border-slate-100 bg-[#F7F9FC] px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#F4E940] hover:bg-white hover:text-[#082A55] hover:shadow-md transition"
//                 >
//                   <span>{item.title}</span>

//                   <ArrowRight
//                     size={15}
//                     className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition"
//                   />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [resOpen, setResOpen] = useState(false);
//   const [comOpen, setComOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50">
//       <div className="hidden lg:block bg-[#031B38] text-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
//           <div className="flex items-center gap-6 text-white/80">
//             <span className="flex items-center gap-2">
//               <MapPin size={15} className="text-[#F4E940]" />
//               Serving London & Nearby Areas
//             </span>

//             <span className="flex items-center gap-2">
//               <Mail size={15} className="text-[#F4E940]" />
//               Professional Pest Control Support
//             </span>
//           </div>

//           <div className="flex items-center gap-2 font-semibold text-[#F4E940]">
//             <ShieldCheck size={16} />
//             Residential & Commercial Pest Control
//           </div>
//         </div>
//       </div>

//       <div className="bg-white/95 shadow-[0_10px_35px_rgba(3,27,56,0.08)] backdrop-blur-xl">
//         <div className="mx-auto max-w-7xl px-4 lg:px-6">
//           <div className="flex h-24 items-center justify-between">
//             <Link to="/" className="flex items-center">
//               <img
//                 src="/images/thepromt.webp"
//                 alt="The Prompt Pest Control London"
//                 className="h-16 w-auto object-contain"
//               />
//             </Link>

//             <nav className="hidden lg:flex items-center gap-7">
//               <NavLink to="/" className={navClass}>
//                 Home
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 About Us
//               </NavLink>

//               <MegaDropdown
//                 title="Residential Pest Control"
//                 mainPath="/residential-pest-control"
//                 items={residentialServices}
//                 type="residential"
//               />

//               <MegaDropdown
//                 title="Commercial Pest Control"
//                 mainPath="/commercial-pest-control"
//                 items={commercialServices}
//                 type="commercial"
//               />

//               <NavLink to="/blogs" className={navClass}>
//                 Blogs
//               </NavLink>

//               <NavLink to="/faqs" className={navClass}>
//                 FAQs
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 Contact
//               </NavLink>
//             </nav>

//             <a
//               href="tel:07845873058"
//               className="hidden lg:flex items-center gap-3 rounded-full bg-gradient-to-r from-[#082A55] to-[#031B38] px-5 py-3 font-black text-white shadow-lg shadow-[#082A55]/20 hover:-translate-y-0.5 hover:shadow-xl transition"
//             >
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4E940] text-[#031B38]">
//                 <Phone size={18} />
//               </span>
//               <span>07845 873058</span>
//             </a>

//             <button
//               onClick={() => setOpen(!open)}
//               className="lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082A55] text-white"
//               aria-label="Toggle menu"
//             >
//               {open ? <X size={27} /> : <Menu size={27} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {open && (
//         <div className="lg:hidden bg-white shadow-2xl border-t border-slate-100 px-5 py-5 max-h-[calc(100vh-96px)] overflow-y-auto">
//           <div className="space-y-3">
//             <NavLink
//               to="/"
//               onClick={() => setOpen(false)}
//               className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/about-us"
//               onClick={() => setOpen(false)}
//               className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"
//             >
//               About Us
//             </NavLink>

//             <div className="rounded-2xl bg-[#F7F9FC]">
//               <button
//                 onClick={() => setResOpen(!resOpen)}
//                 className="flex w-full items-center justify-between px-4 py-3 font-bold text-[#082A55]"
//               >
//                 Residential Pest Control
//                 <ChevronDown
//                   className={`${resOpen ? "rotate-180" : ""} transition`}
//                 />
//               </button>

//               {resOpen && (
//                 <div className="px-4 pb-4 space-y-2">
//                   <Link
//                     to="/residential-pest-control"
//                     onClick={() => setOpen(false)}
//                     className="block rounded-xl bg-white px-3 py-3 text-sm font-bold text-[#082A55]"
//                   >
//                     View All Residential Services
//                   </Link>

//                   {residentialServices.map((item) => (
//                     <Link
//                       key={item.path}
//                       to={item.path}
//                       onClick={() => setOpen(false)}
//                       className="block rounded-xl bg-white px-3 py-3 text-sm text-slate-600"
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="rounded-2xl bg-[#F7F9FC]">
//               <button
//                 onClick={() => setComOpen(!comOpen)}
//                 className="flex w-full items-center justify-between px-4 py-3 font-bold text-[#082A55]"
//               >
//                 Commercial Pest Control
//                 <ChevronDown
//                   className={`${comOpen ? "rotate-180" : ""} transition`}
//                 />
//               </button>

//               {comOpen && (
//                 <div className="px-4 pb-4 space-y-2">
//                   <Link
//                     to="/commercial-pest-control"
//                     onClick={() => setOpen(false)}
//                     className="block rounded-xl bg-white px-3 py-3 text-sm font-bold text-[#082A55]"
//                   >
//                     View All Commercial Services
//                   </Link>

//                   {commercialServices.map((item) => (
//                     <Link
//                       key={item.path}
//                       to={item.path}
//                       onClick={() => setOpen(false)}
//                       className="block rounded-xl bg-white px-3 py-3 text-sm text-slate-600"
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/blogs"
//               onClick={() => setOpen(false)}
//               className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"
//             >
//               Blogs
//             </NavLink>

//             <NavLink
//               to="/faqs"
//               onClick={() => setOpen(false)}
//               className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"
//             >
//               FAQs
//             </NavLink>

//             <NavLink
//               to="/contact-us"
//               onClick={() => setOpen(false)}
//               className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"
//             >
//               Contact
//             </NavLink>

//             <a
//               href="tel:07845873058"
//               className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-[#082A55] px-5 py-4 font-black text-white"
//             >
//               <Phone size={19} />
//               07845 873058
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

















import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import {

  Menu,

  X,

  Phone,

  ChevronDown,

  Home,

  Building2,

  ShieldCheck,

  ArrowRight,

  Mail,

  MapPin,

} from "lucide-react";



import {

  residentialServices,

  commercialServices,

} from "../data/servicesData";



const navClass = ({ isActive }) =>

  `relative py-8 text-[15px] font-semibold transition ${

    isActive ? "text-[#082A55]" : "text-slate-700 hover:text-[#082A55]"

  } after:absolute after:left-0 after:bottom-6 after:h-[3px] after:rounded-full after:bg-[#F4E940] after:transition-all ${

    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"

  }`;



function MegaDropdown({

  title,

  items,

  mainPath,

  type,

  activeDropdown,

  setActiveDropdown,

}) {

  const Icon = type === "commercial" ? Building2 : Home;

  const isOpen = activeDropdown === type;



  const closeDropdown = () => {

    setActiveDropdown(null);

  };



  return (

    <div

      className="relative"

      onMouseEnter={() => setActiveDropdown(type)}

      onMouseLeave={closeDropdown}

    >

      <Link

        to={mainPath}

        onClick={closeDropdown}

        className="flex items-center gap-1 py-8 text-[15px] font-semibold text-slate-700 transition hover:text-[#082A55]"

      >

        {title}



        <ChevronDown

          size={16}

          className={`transition-transform duration-200 ${

            isOpen ? "rotate-180" : ""

          }`}

        />

      </Link>



      <div

        className={`absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-3 transition-all duration-200 ${

          isOpen

            ? "visible translate-y-0 opacity-100"

            : "invisible -translate-y-2 opacity-0"

        }`}

      >

        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(3,27,56,0.22)] ring-1 ring-slate-100">

          <div className="grid grid-cols-[260px_1fr]">

            <div className="relative bg-gradient-to-br from-[#031B38] via-[#082A55] to-[#123F78] p-6 text-white">

              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#F4E940]/20" />



              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">

                <Icon size={25} />

              </div>



              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4E940]">

                London Pest Control

              </p>



              <h3 className="mt-2 text-2xl font-black leading-tight">

                {title}

              </h3>



              <p className="mt-3 text-sm leading-6 text-white/80">

                Fast inspection, targeted treatment and prevention support for

                London properties.

              </p>



              <Link

                to={mainPath}

                onClick={closeDropdown}

                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082A55] transition hover:bg-[#F4E940]"

              >

                View All Services

                <ArrowRight size={16} />

              </Link>

            </div>



            <div className="grid grid-cols-2 gap-2 p-5">

              {items.map((item) => (

                <Link

                  key={item.path}

                  to={item.path}

                  onClick={closeDropdown}

                  className="group/item flex items-center justify-between rounded-2xl border border-slate-100 bg-[#F7F9FC] px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#F4E940] hover:bg-white hover:text-[#082A55] hover:shadow-md"

                >

                  <span>{item.title}</span>



                  <ArrowRight

                    size={15}

                    className="-translate-x-2 opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100"

                  />

                </Link>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}



export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [resOpen, setResOpen] = useState(false);

  const [comOpen, setComOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);



  const closeMobileMenu = () => {

    setOpen(false);

    setResOpen(false);

    setComOpen(false);

  };



  return (

    <header className="sticky top-0 z-50">

      <div className="hidden bg-[#031B38] text-white lg:block">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

          <div className="flex items-center gap-6 text-white/80">

            <span className="flex items-center gap-2">

              <MapPin size={15} className="text-[#F4E940]" />

              Serving London & Nearby Areas

            </span>



            <span className="flex items-center gap-2">

              <Mail size={15} className="text-[#F4E940]" />

              Professional Pest Control Support

            </span>

          </div>



          <div className="flex items-center gap-2 font-semibold text-[#F4E940]">

            <ShieldCheck size={16} />

            Residential & Commercial Pest Control

          </div>

        </div>

      </div>



      <div className="bg-white/95 shadow-[0_10px_35px_rgba(3,27,56,0.08)] backdrop-blur-xl">

        <div className="mx-auto max-w-7xl px-4 lg:px-6">

          <div className="flex h-24 items-center justify-between">

            <Link

              to="/"

              onClick={() => setActiveDropdown(null)}

              className="flex items-center"

            >

              <img

                src="/images/thepromt.webp"

                alt="The Prompt Pest Control London"

                className="h-16 w-auto object-contain"

              />

            </Link>



            <nav className="hidden items-center gap-7 lg:flex">

              <NavLink

                to="/"

                onClick={() => setActiveDropdown(null)}

                className={navClass}

              >

                Home

              </NavLink>



              <NavLink

                to="/about-us"

                onClick={() => setActiveDropdown(null)}

                className={navClass}

              >

                About Us

              </NavLink>



              <MegaDropdown

                title="Residential Pest Control"

                mainPath="/residential-pest-control"

                items={residentialServices}

                type="residential"

                activeDropdown={activeDropdown}

                setActiveDropdown={setActiveDropdown}

              />



              <MegaDropdown

                title="Commercial Pest Control"

                mainPath="/commercial-pest-control"

                items={commercialServices}

                type="commercial"

                activeDropdown={activeDropdown}

                setActiveDropdown={setActiveDropdown}

              />



              <NavLink

                to="/blogs"

                onClick={() => setActiveDropdown(null)}

                className={navClass}

              >

                Blogs

              </NavLink>



              <NavLink

                to="/faqs"

                onClick={() => setActiveDropdown(null)}

                className={navClass}

              >

                FAQs

              </NavLink>



              <NavLink

                to="/contact-us"

                onClick={() => setActiveDropdown(null)}

                className={navClass}

              >

                Contact

              </NavLink>

            </nav>



            <a

              href="tel:07845873058"

              className="hidden items-center gap-3 rounded-full bg-gradient-to-r from-[#082A55] to-[#031B38] px-5 py-3 font-black text-white shadow-lg shadow-[#082A55]/20 transition hover:-translate-y-0.5 hover:shadow-xl lg:flex"

            >

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4E940] text-[#031B38]">

                <Phone size={18} />

              </span>



              <span>07845 873058</span>

            </a>



            <button

              type="button"

              onClick={() => setOpen((previous) => !previous)}

              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082A55] text-white lg:hidden"

              aria-label={open ? "Close navigation menu" : "Open navigation menu"}

              aria-expanded={open}

            >

              {open ? <X size={27} /> : <Menu size={27} />}

            </button>

          </div>

        </div>

      </div>        {open && (

        <div className="max-h-[calc(100vh-96px)] overflow-y-auto border-t border-slate-100 bg-white px-5 py-5 shadow-2xl lg:hidden">

          <div className="space-y-3">

            <NavLink

              to="/"

              onClick={closeMobileMenu}

              className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"

            >

              Home

            </NavLink>



            <NavLink

              to="/about-us"

              onClick={closeMobileMenu}

              className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"

            >

              About Us

            </NavLink>



            <div className="rounded-2xl bg-[#F7F9FC]">

              <button

                type="button"

                onClick={() => {

                  setResOpen((previous) => !previous);

                  setComOpen(false);

                }}

                className="flex w-full items-center justify-between px-4 py-3 font-bold text-[#082A55]"

                aria-expanded={resOpen}

              >

                Residential Pest Control



                <ChevronDown

                  size={20}

                  className={`transition-transform duration-200 ${

                    resOpen ? "rotate-180" : ""

                  }`}

                />

              </button>



              <div

                className={`grid transition-[grid-template-rows] duration-300 ${

                  resOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"

                }`}

              >

                <div className="overflow-hidden">

                  <div className="space-y-2 px-4 pb-4">

                    <Link

                      to="/residential-pest-control"

                      onClick={closeMobileMenu}

                      className="block rounded-xl bg-white px-3 py-3 text-sm font-bold text-[#082A55]"

                    >

                      View All Residential Services

                    </Link>



                    {residentialServices.map((item) => (

                      <Link

                        key={item.path}

                        to={item.path}

                        onClick={closeMobileMenu}

                        className="block rounded-xl bg-white px-3 py-3 text-sm text-slate-600 transition hover:text-[#082A55]"

                      >

                        {item.title}

                      </Link>

                    ))}

                  </div>

                </div>

              </div>

            </div>



            <div className="rounded-2xl bg-[#F7F9FC]">

              <button

                type="button"

                onClick={() => {

                  setComOpen((previous) => !previous);

                  setResOpen(false);

                }}

                className="flex w-full items-center justify-between px-4 py-3 font-bold text-[#082A55]"

                aria-expanded={comOpen}

              >

                Commercial Pest Control



                <ChevronDown

                  size={20}

                  className={`transition-transform duration-200 ${

                    comOpen ? "rotate-180" : ""

                  }`}

                />

              </button>



              <div

                className={`grid transition-[grid-template-rows] duration-300 ${

                  comOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"

                }`}

              >

                <div className="overflow-hidden">

                  <div className="space-y-2 px-4 pb-4">

                    <Link

                      to="/commercial-pest-control"

                      onClick={closeMobileMenu}

                      className="block rounded-xl bg-white px-3 py-3 text-sm font-bold text-[#082A55]"

                    >

                      View All Commercial Services

                    </Link>



                    {commercialServices.map((item) => (

                      <Link

                        key={item.path}

                        to={item.path}

                        onClick={closeMobileMenu}

                        className="block rounded-xl bg-white px-3 py-3 text-sm text-slate-600 transition hover:text-[#082A55]"

                      >

                        {item.title}

                      </Link>

                    ))}

                  </div>

                </div>

              </div>

            </div>



            <NavLink

              to="/blogs"

              onClick={closeMobileMenu}

              className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"

            >

              Blogs

            </NavLink>



            <NavLink

              to="/faqs"

              onClick={closeMobileMenu}

              className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"

            >

              FAQs

            </NavLink>



            <NavLink

              to="/contact-us"

              onClick={closeMobileMenu}

              className="block rounded-2xl bg-[#F7F9FC] px-4 py-3 font-semibold text-slate-700"

            >

              Contact

            </NavLink>



            <a

              href="tel:07845873058"

              onClick={closeMobileMenu}

              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-[#082A55] px-5 py-4 font-black text-white"

            >

              <Phone size={19} />

              07845 873058

            </a>

          </div>

        </div>

      )}

    </header>

  );

}