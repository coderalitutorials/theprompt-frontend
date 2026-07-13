// import React from "react";
// import {
//   ShieldCheck,
//   CheckCircle2,
//   Bug,
//   Building2,
//   Home,
//   ArrowRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function WelcomeSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-28">
      
//       <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F4E940]/20 blur-3xl" />

//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">

//         {/* IMAGE SIDE */}

//         <div className="relative lg:col-span-6">

//           <div className="absolute -left-5 -top-5 h-full w-full rounded-[3rem] bg-[#082A55]" />

//           <div className="relative overflow-hidden rounded-[3rem] shadow-[0_30px_90px_rgba(3,27,56,0.25)]">
//             <img
//               src="/images/prompt-about-inspection.webp"
//               alt="The Prompt Pest Control London technician inspecting property"
//               className="h-[550px] w-full object-cover"
//               loading="lazy"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#031B38]/70 via-transparent" />

//             <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-5 backdrop-blur">
//               <div className="flex items-center gap-4">
                
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">
//                   <ShieldCheck size={28}/>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-black text-[#031B38]">
//                     Trusted Pest Control
//                   </h3>

//                   <p className="text-sm font-semibold text-slate-600">
//                     Residential & Commercial Experts
//                   </p>

//                 </div>

//               </div>
//             </div>

//           </div>

//         </div>



//         {/* CONTENT */}

//         <div className="lg:col-span-6">

//           <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
//             <Bug size={18}/>
//             Welcome To The Prompt
//           </div>


//           <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
//             Professional Pest Control Services 
//             <span className="text-[#082A55]">
//               {" "}Across London
//             </span>
//           </h2>


//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             The Prompt Pest Control provides reliable pest management solutions
//             for London homes and businesses. Our experienced team helps identify
//             pest activity, provide targeted treatments and deliver prevention
//             advice to protect your property.
//           </p>


//           <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

//             {[
//               {
//                 icon:Home,
//                 title:"Residential Services"
//               },

//               {
//                 icon:Building2,
//                 title:"Commercial Solutions"
//               },

//               {
//                 icon:Bug,
//                 title:"Wide Pest Coverage"
//               },

//               {
//                 icon:ShieldCheck,
//                 title:"Safe Treatment Plans"
//               },

//             ].map((item)=>{

//               const Icon=item.icon;

//               return(
//                 <div
//                 key={item.title}
//                 className="group rounded-3xl border border-slate-100 bg-[#F7F9FC] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//                 >

//                   <Icon 
//                   size={26}
//                   className="mb-4 text-[#082A55]"
//                   />

//                   <h4 className="font-black text-[#031B38]">
//                     {item.title}
//                   </h4>

//                 </div>
//               )
//             })}

//           </div>


//           <div className="mt-10 flex flex-wrap gap-4">

//             <Link
//             to="/about-us"
//             className="inline-flex items-center gap-3 rounded-full bg-[#082A55] px-7 py-4 font-black text-white transition hover:-translate-y-1"
//             >
//               More About Us
//               <ArrowRight size={18}/>
//             </Link>


//             <a
//             href="tel:07845873058"
//             className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-7 py-4 font-black text-[#031B38]"
//             >
//               Call 07845 873058
//             </a>

//           </div>


//         </div>

//       </div>

//     </section>
//   );
// }





import React from "react";
import {
  ShieldCheck,
  Bug,
  Building2,
  Home,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const services = [
    {
      icon: Home,
      title: "Residential Services",
      path: "/residential-pest-control",
    },
    {
      icon: Building2,
      title: "Commercial Solutions",
      path: "/commercial-pest-control",
    },
    {
      icon: Bug,
      title: "Wide Pest Coverage",
      path: "/residential-pest-control",
    },
    {
      icon: ShieldCheck,
      title: "Safe Treatment Plans",
      path: "/blogs",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F4E940]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
        {/* IMAGE SIDE */}

        <div className="relative lg:col-span-6">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[3rem] bg-[#082A55]" />

          <div className="relative overflow-hidden rounded-[3rem] shadow-[0_30px_90px_rgba(3,27,56,0.25)]">
            <img
              src="/images/prompt-about-inspection.webp"
              alt="The Prompt Pest Control London technician inspecting property"
              className="h-[550px] w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031B38]/70 via-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-5 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#031B38]">
                    Trusted Pest Control
                  </h3>

                  <p className="text-sm font-semibold text-slate-600">
                    Residential & Commercial Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}

        <div className="lg:col-span-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
            <Bug size={18} />
            Welcome To The Prompt
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
            Professional Pest Control Services
            <span className="text-[#082A55]"> Across London</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The Prompt Pest Control provides reliable pest management solutions
            for London{" "}
            <Link
              to="/residential-pest-control"
              className="font-bold text-[#082A55] underline decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#F4A900]"
            >
              homes
            </Link>{" "}
            and{" "}
            <Link
              to="/commercial-pest-control"
              className="font-bold text-[#082A55] underline decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#F4A900]"
            >
              businesses
            </Link>
            . Our experienced team helps identify pest activity, provide
            targeted treatments and deliver prevention advice to protect your
            property.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  aria-label={`View ${item.title}`}
                  className="group block rounded-3xl border border-slate-100 bg-[#F7F9FC] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon
                    size={26}
                    className="mb-4 text-[#082A55] transition-transform duration-300 group-hover:scale-110"
                  />

                  <h4 className="inline-block font-black text-[#082A55] underline decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-[#031B38]">
                    {item.title}
                  </h4>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-3 rounded-full bg-[#082A55] px-7 py-4 font-black text-white transition hover:-translate-y-1"
            >
              More About Us
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:07845873058"
              className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-7 py-4 font-black text-[#031B38] transition hover:-translate-y-1"
            >
              Call 07845 873058
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}