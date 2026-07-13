// import React from "react";
// import {
//   ShieldCheck,
//   Search,
//   SprayCan,
//   LockKeyhole,
//   CheckCircle2,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const points = [
//   {
//     icon: Search,
//     title: "Detailed Inspection",
//     text: "We carefully check your property to identify pest activity and possible entry points.",
//   },
//   {
//     icon: SprayCan,
//     title: "Targeted Treatment",
//     text: "Our team provides suitable pest control treatments based on your property needs.",
//   },
//   {
//     icon: LockKeyhole,
//     title: "Long Term Prevention",
//     text: "We help reduce future pest problems with professional prevention guidance.",
//   },
// ];

// export default function WhoWeAreSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-28">

//       <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#F4E940]/20 blur-3xl" />


//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">


//         {/* CONTENT */}

//         <div className="lg:col-span-6">

//           <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
//             <ShieldCheck size={18}/>
//             Who We Are
//           </div>


//           <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
//             Protecting London Properties
//             <span className="block text-[#082A55]">
//               With Smart Pest Solutions
//             </span>
//           </h2>


//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             The Prompt Pest Control is dedicated to helping homeowners,
//             landlords and businesses manage pest problems with professional
//             inspections, effective treatments and prevention focused solutions.
//           </p>


//           <div className="mt-8 space-y-5">

//             {points.map((item)=>{

//               const Icon=item.icon;

//               return(

//                 <div
//                 key={item.title}
//                 className="
//                 group flex gap-5
//                 rounded-[2rem]
//                 border border-slate-100
//                 bg-[#F8FAFC]
//                 p-5
//                 transition duration-300
//                 hover:-translate-y-1
//                 hover:shadow-xl
//                 "
//                 >

//                   <div className="
//                   flex h-14 w-14 shrink-0
//                   items-center justify-center
//                   rounded-2xl
//                   bg-[#031B38]
//                   text-[#F4E940]
//                   transition
//                   group-hover:bg-[#F4E940]
//                   group-hover:text-[#031B38]
//                   ">
//                     <Icon size={25}/>
//                   </div>


//                   <div>

//                     <h3 className="text-xl font-black text-[#031B38]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-2 leading-7 text-slate-600">
//                       {item.text}
//                     </p>

//                   </div>


//                 </div>

//               )

//             })}

//           </div>


//           <Link
//           to="/about-us"
//           className="
//           mt-9 inline-flex
//           items-center gap-3
//           rounded-full
//           bg-[#031B38]
//           px-8 py-4
//           font-black
//           text-white
//           transition
//           hover:-translate-y-1
//           "
//           >
//             Learn More About Us
//             <CheckCircle2 size={18}/>
//           </Link>

//         </div>




//         {/* IMAGE DESIGN */}

//         <div className="relative lg:col-span-6">


//           <div className="
//           absolute -left-8 top-10
//           h-[500px] w-[420px]
//           rounded-[45%_55%_50%_50%]
//           bg-[#031B38]
//           " />


//           <div className="
//           relative
//           overflow-hidden
//           rounded-[45%_55%_50%_50%]
//           border-[12px]
//           border-white
//           shadow-[0_35px_100px_rgba(3,27,56,0.25)]
//           ">

//             <img
//             src="/images/prompt-who-we-are.webp"
//             alt="The Prompt Pest Control professional team London"
//             className="
//             h-[560px]
//             w-full
//             object-cover
//             "
//             />

//           </div>



//           <div className="
//           absolute bottom-10
//           -left-5
//           rounded-[2rem]
//           bg-white
//           p-5
//           shadow-2xl
//           ">

//             <div className="flex items-center gap-4">

//               <div className="
//               flex h-14 w-14
//               items-center justify-center
//               rounded-2xl
//               bg-[#F4E940]
//               text-[#031B38]
//               ">
//                 <ShieldCheck/>
//               </div>


//               <div>

//                 <h4 className="text-3xl font-black text-[#031B38]">
//                   London
//                 </h4>

//                 <p className="font-bold text-slate-500">
//                   Pest Specialists
//                 </p>

//               </div>

//             </div>


//           </div>


//         </div>


//       </div>


//     </section>
//   );
// }














import React from "react";
import {
  ShieldCheck,
  Search,
  SprayCan,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  {
    icon: Search,
    title: "Detailed Inspection",
    text: "We carefully check your property to identify pest activity and possible entry points.",
  },
  {
    icon: SprayCan,
    title: "Targeted Treatment",
    text: "Our team provides suitable pest control treatments based on your property needs.",
  },
  {
    icon: LockKeyhole,
    title: "Long Term Prevention",
    text: "We help reduce future pest problems with professional prevention guidance.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#F4E940]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
        {/* CONTENT */}

        <div className="lg:col-span-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
            <ShieldCheck size={18} />
            Who We Are
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#031B38] sm:text-5xl">
            Protecting London Properties
            <span className="block text-[#082A55]">
              With Smart Pest Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The Prompt Pest Control is dedicated to helping homeowners,
            landlords and businesses manage pest problems with professional
            inspections, effective treatments and prevention focused solutions.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-5 rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#031B38] text-[#F4E940] transition group-hover:bg-[#F4E940] group-hover:text-[#031B38]">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#031B38]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/about-us"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#031B38] px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#082A55]"
          >
            Learn More About Us
            <CheckCircle2 size={18} />
          </Link>
        </div>

        {/* IMAGE DESIGN */}

        <div className="relative lg:col-span-6">
          <div className="absolute -left-8 top-10 h-[500px] w-[420px] rounded-[45%_55%_50%_50%] bg-[#031B38]" />

          <div className="relative overflow-hidden rounded-[45%_55%_50%_50%] border-[12px] border-white shadow-[0_35px_100px_rgba(3,27,56,0.25)]">
            <img
              src="/images/prompt-who-we-are.webp"
              alt="The Prompt Pest Control professional team London"
              className="h-[560px] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-10 -left-5 rounded-[2rem] bg-white p-5 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">
                <ShieldCheck />
              </div>

              <div>
                <h4 className="text-3xl font-black text-[#031B38]">
                  London
                </h4>

                <p className="font-bold text-slate-500">
                  Pest Specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}