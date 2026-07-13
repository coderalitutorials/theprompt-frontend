// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Search,
//   SprayCan,
//   Home,
//   Phone,
//   Users,
//   Building2,
//   CheckCircle2,
// } from "lucide-react";

// const values = [
//   {
//     icon: Search,
//     title: "Detailed Inspection",
//     text:
//       "We carefully inspect affected areas, hiding spots and possible pest entry points before recommending treatment.",
//   },
//   {
//     icon: SprayCan,
//     title: "Targeted Treatment",
//     text:
//       "Our approach focuses on applying suitable pest control methods based on the property and pest activity.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Prevention Focus",
//     text:
//       "We provide practical prevention advice to help reduce future pest problems.",
//   },
// ];

// const whyChoose = [
//   "Residential & commercial pest control support",
//   "Experienced London pest control technicians",
//   "Inspection focused treatment approach",
//   "Professional advice for long term prevention",
// ];

// export default function About() {
//   return (
//     <main>


//       {/* HERO */}


//       <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#031B38] px-5 text-center text-white">

//         <div className="absolute inset-0">

//           <img
//             src="/images/about-pest-control-hero.webp"
//             alt="The Prompt Pest Control London professional pest control company"
//             className="h-full w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-[#031B38]/85" />

//         </div>


//         <div className="relative z-10 max-w-5xl">


//           <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">

//             <ShieldCheck size={18}/>
//             About Our Company

//           </div>


//           <h1 className="text-4xl font-black sm:text-6xl">

//             About The Prompt

//             <span className="block text-[#F4E940]">
//               Pest Control
//             </span>

//           </h1>


//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">

//             Providing professional{" "}

//             <Link
//               to="/residential-pest-control"
//               className="
//               font-black
//               text-[#F4E940]
//               underline-offset-4
//               transition
//               hover:underline
//               "
//             >
//               residential pest control
//             </Link>

//             {" "}and{" "}

//             <Link
//               to="/commercial-pest-control"
//               className="
//               font-black
//               text-[#F4E940]
//               underline-offset-4
//               transition
//               hover:underline
//               "
//             >
//               commercial pest control
//             </Link>

//             {" "}services across London with inspection,
//             treatment and prevention focused solutions.

//           </p>


//         </div>

//       </section>





//       {/* WHO WE ARE */}


//       <section className="bg-white py-28">


//         <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">


//           <div>


//             <p className="font-black uppercase tracking-widest text-[#082A55]">

//               Who We Are

//             </p>


//             <h2 className="mt-4 text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">

//               Professional Pest Control Services Across London

//             </h2>


//             <p className="mt-6 text-lg leading-9 text-slate-600">

//               The Prompt Pest Control helps customers protect their properties
//               from unwanted pests through careful inspections, effective
//               treatment plans and prevention guidance.

//             </p>


//             <p className="mt-5 text-lg leading-9 text-slate-600">

//               Whether you are dealing with pests inside your home, rental
//               property, office or commercial premises, our team works to
//               identify the problem and provide suitable pest control support.

//             </p>


//             <div className="mt-8 grid grid-cols-2 gap-5">


//               <Link
//                 to="/residential-pest-control"
//                 className="
//                 rounded-[2rem]
//                 bg-[#031B38]
//                 p-6
//                 text-white
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-xl
//                 "
//               >

//                 <Users className="mb-4 text-[#F4E940]" />

//                 <h3 className="text-2xl font-black">
//                   Residential
//                 </h3>

//                 <p className="mt-2 text-white/70">
//                   Home pest control
//                 </p>

//               </Link>



//               <Link
//                 to="/commercial-pest-control"
//                 className="
//                 rounded-[2rem]
//                 bg-[#F4E940]
//                 p-6
//                 text-[#031B38]
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-xl
//                 "
//               >

//                 <Building2 className="mb-4"/>

//                 <h3 className="text-2xl font-black">
//                   Commercial
//                 </h3>

//                 <p className="mt-2 font-semibold">
//                   Business solutions
//                 </p>

//               </Link>


//             </div>


//           </div>



//           <div className="relative">


//             <div className="absolute -inset-4 rounded-[3rem] bg-[#F4E940]/30 blur-3xl"/>


//             <img
//               src="/images/prompt-who-we-are.webp"
//               alt="The Prompt Pest Control technician inspection"
//               className="
//               relative
//               h-[520px]
//               w-full
//               rounded-[3rem]
//               object-contain
//               object-center
//               shadow-[0_35px_100px_rgba(3,27,56,.25)]
//               "
//             />


//           </div>


//         </div>


//       </section>






//       {/* VALUES */}


//       <section className="bg-[#031B38] py-28 text-white">


//         <div className="mx-auto max-w-7xl px-5 lg:px-8">


//           <div className="text-center">

//             <h2 className="text-5xl font-black">

//               Our Pest Control Approach

//             </h2>


//             <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">

//               A simple process designed around inspection,
//               treatment and prevention.

//             </p>

//           </div>



//           <div className="mt-14 grid gap-7 md:grid-cols-3">


//             {values.map((item)=>{

//               const Icon = item.icon;

//               return(

//               <div
//               key={item.title}
//               className="
//               rounded-[3rem]
//               bg-white/10
//               p-8
//               transition
//               duration-300
//               hover:-translate-y-2
//               hover:bg-white
//               hover:text-[#031B38]
//               "
//               >

//                 <Icon
//                   size={42}
//                   className="mb-6 text-[#F4E940]"
//                 />


//                 <h3 className="text-2xl font-black">
//                   {item.title}
//                 </h3>


//                 <p className="mt-4 leading-8 opacity-75">

//                   {item.text}

//                 </p>


//               </div>

//               )

//             })}


//           </div>


//         </div>


//       </section>







//       {/* WHY CHOOSE */}


//       <section className="bg-white py-28">


//         <div className="mx-auto max-w-5xl px-5 text-center">


//           <h2 className="text-5xl font-black text-[#031B38]">

//             Why Choose The Prompt Pest Control?

//           </h2>


//           <div className="mt-12 grid gap-5 text-left">


//             {whyChoose.map((item)=>(

//               <div
//               key={item}
//               className="
//               flex
//               gap-4
//               rounded-2xl
//               bg-[#F8FAFC]
//               p-6
//               font-bold
//               text-slate-700
//               transition
//               hover:-translate-y-1
//               hover:shadow-xl
//               "
//               >

//                 <CheckCircle2 className="text-[#082A55]" />

//                 {item}

//               </div>

//             ))}


//           </div>


//           <Link
//           to="/contact-us"
//           className="
//           mt-12
//           inline-flex
//           items-center
//           gap-3
//           rounded-full
//           bg-[#031B38]
//           px-10
//           py-5
//           font-black
//           text-white
//           transition
//           hover:-translate-y-1
//           "
//           >

//             Contact Our Team
//             <ArrowRight/>

//           </Link>


//         </div>


//       </section>



//     </main>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  SprayCan,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";
import AboutCallbackSection from "../components/AboutCallbackSection";

const values = [
  {
    icon: Search,
    title: "Detailed Inspection",
    text: "We carefully inspect affected areas, hiding spots and possible pest entry points before recommending treatment.",
    path: "/residential-pest-control",
  },
  {
    icon: SprayCan,
    title: "Targeted Treatment",
    text: "Our approach focuses on applying suitable pest control methods based on the property and pest activity.",
    path: "/residential-pest-control",
  },
  {
    icon: ShieldCheck,
    title: "Prevention Focus",
    text: "We provide practical prevention advice to help reduce future pest problems.",
    path: "/blogs",
  },
];

const whyChoose = [
  "Residential & commercial pest control support",
  "Experienced London pest control technicians",
  "Inspection focused treatment approach",
  "Professional advice for long term prevention",
];

export default function About() {
  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#031B38] px-5 text-center text-white">
        <div className="absolute inset-0">
          <img
            src="/images/about-pest-control-hero.webp"
            alt="The Prompt Pest Control London professional pest control company"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#031B38]/85" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
            <ShieldCheck size={18} />
            About Our Company
          </div>

          <h1 className="text-4xl font-black sm:text-6xl">
            About The Prompt

            <span className="block text-[#F4E940]">
              Pest Control
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Providing professional{" "}
            <Link
              to="/residential-pest-control"
              className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
            >
              residential pest control
            </Link>{" "}
            and{" "}
            <Link
              to="/commercial-pest-control"
              className="font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
            >
              commercial pest control
            </Link>{" "}
            services across London with inspection, treatment and prevention
            focused solutions.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}

      <section className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-black uppercase tracking-widest text-[#082A55]">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
              Professional Pest Control Services Across London
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              The Prompt Pest Control helps customers protect their{" "}
              <Link
                to="/residential-pest-control"
                className="font-black text-[#082A55] underline decoration-[#082A55] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#C5A000] hover:decoration-[#C5A000]"
              >
                homes and residential properties
              </Link>{" "}
              from unwanted pests through careful inspections, effective
              treatment plans and prevention guidance.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-600">
              Whether you are dealing with pests inside your home, rental
              property, office or{" "}
              <Link
                to="/commercial-pest-control"
                className="font-black text-[#082A55] underline decoration-[#082A55] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#C5A000] hover:decoration-[#C5A000]"
              >
                commercial premises
              </Link>
              , our team works to identify the problem and provide suitable pest
              control support.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Link
                to="/residential-pest-control"
                aria-label="View residential pest control services"
                className="group rounded-[2rem] bg-[#031B38] p-6 text-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Users className="mb-4 text-[#F4E940]" />

                <h3 className="inline-block text-2xl font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-white group-hover:decoration-white">
                  Residential
                </h3>

                <p className="mt-2 text-white/70">
                  Home pest control
                </p>
              </Link>

              <Link
                to="/commercial-pest-control"
                aria-label="View commercial pest control services"
                className="group rounded-[2rem] bg-[#F4E940] p-6 text-[#031B38] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Building2 className="mb-4" />

                <h3 className="inline-block text-2xl font-black text-[#082A55] underline decoration-[#082A55] decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-[#031B38] group-hover:decoration-[#031B38]">
                  Commercial
                </h3>

                <p className="mt-2 font-semibold">
                  Business pest solutions
                </p>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-[#F4E940]/30 blur-3xl" />

            <img
              src="/images/prompt-who-we-are.webp"
              alt="The Prompt Pest Control technician carrying out a professional property inspection in London"
              className="relative h-[520px] w-full rounded-[3rem] object-contain object-center shadow-[0_35px_100px_rgba(3,27,56,.25)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="bg-[#031B38] py-28 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-black sm:text-5xl">
              Our Pest Control Approach
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
              A simple process designed around inspection, treatment and
              prevention.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  aria-label={`Learn more about ${item.title}`}
                  className="group rounded-[3rem] bg-white/10 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:text-[#031B38]"
                >
                  <Icon
                    size={42}
                    className="mb-6 text-[#F4E940] transition-colors duration-300 group-hover:text-[#082A55]"
                  />

                  <h3 className="inline-block text-2xl font-black text-[#F4E940] underline decoration-[#F4E940] decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-[#082A55] group-hover:decoration-[#082A55]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/75 transition-colors duration-300 group-hover:text-slate-600">
                    {item.text}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="bg-white py-28">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-4xl font-black text-[#031B38] sm:text-5xl">
            Why Choose The Prompt Pest Control?
          </h2>

          <div className="mt-12 grid gap-5 text-left">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl bg-[#F8FAFC] p-6 font-bold text-slate-700 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CheckCircle2 className="shrink-0 text-[#082A55]" />

                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact-us"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#031B38] px-10 py-5 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#082A55]"
          >
            Contact Our Team
            <ArrowRight />
          </Link>
        </div>
      </section>
        <AboutCallbackSection/>
    </main>
  );
}