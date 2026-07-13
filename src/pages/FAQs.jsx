import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ShieldCheck,
  Phone,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import AboutCallbackSection from "../components/AboutCallbackSection";


const faqs = [
  {
    question: "What pest control services does The Prompt Pest Control provide?",
    answer:
      "The Prompt Pest Control provides residential and commercial pest control services including rats, mice, bed bugs, cockroaches, ants, fleas, wasps, moths, carpet beetles, squirrels and bird control services.",
  },

  {
    question: "Do you provide pest control services across London?",
    answer:
      "Yes, The Prompt Pest Control provides professional pest control support for homes, landlords, offices and businesses across London and nearby areas.",
  },

  {
    question: "How does your pest control treatment process work?",
    answer:
      "Our process starts with a detailed inspection to identify pest activity, hiding areas and entry points. After inspection, suitable treatment methods are applied followed by prevention advice.",
  },

  {
    question: "Do you provide residential pest control services?",
    answer:
      "Yes, we provide pest control services for houses, flats, landlords and residential properties dealing with different pest problems.",
  },

  {
    question: "Do you provide commercial pest control services?",
    answer:
      "Yes, our commercial pest control services support offices, restaurants, retail spaces, healthcare facilities, warehouses and other business environments.",
  },

  {
    question: "Can you help with rat and mice problems?",
    answer:
      "Yes, our rodent control service includes inspection, identifying possible entry points, treatment solutions and advice to reduce future rodent activity.",
  },

  {
    question: "Do you offer bed bug pest control treatments?",
    answer:
      "Yes, The Prompt Pest Control provides bed bug inspection and treatment support for bedrooms, mattresses, furniture and common hiding locations.",
  },

  {
    question: "How can I know if I have a pest problem?",
    answer:
      "Common signs include droppings, unusual smells, scratching noises, property damage, visible insects or increased pest activity around your property.",
  },

  {
    question: "Do you inspect the property before treatment?",
    answer:
      "Yes, inspection is an important step. Our team checks affected areas and understands the pest issue before recommending a treatment approach.",
  },

  {
    question: "Can pests return after treatment?",
    answer:
      "Future pest activity depends on factors such as entry points, hygiene conditions and surrounding areas. Prevention advice helps reduce the chance of recurring problems.",
  },

  {
    question: "Do you provide pest prevention advice?",
    answer:
      "Yes, after treatment we provide practical advice including sealing gaps, reducing food sources and improving prevention measures.",
  },

  {
    question: "Can businesses arrange ongoing pest control support?",
    answer:
      "Commercial customers can discuss pest management options suitable for their business type and property requirements.",
  },

  {
    question: "Do you treat wasp nests?",
    answer:
      "Yes, we provide support for wasp nest issues around gardens, loft spaces, roof areas and other property locations.",
  },

  {
    question: "Why choose The Prompt Pest Control?",
    answer:
      "Customers choose The Prompt Pest Control because our approach focuses on inspection, targeted treatment and prevention for residential and commercial properties.",
  },

  {
    question: "How can I contact The Prompt Pest Control?",
    answer:
      "You can contact us by phone or through our online contact form. Our team will discuss your pest issue and property requirements.",
  },
];



export default function FAQs() {

  const [open, setOpen] = useState(0);


  return (

    <main>


      {/* HERO */}


      <section className="relative overflow-hidden bg-[#031B38] py-32 text-center text-white">


        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,233,64,.16),transparent_30%)]"/>


        <div className="relative z-10 mx-auto max-w-5xl px-5">


          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">

            <HelpCircle size={18}/>

            Frequently Asked Questions

          </div>


          <h1 className="text-4xl font-black sm:text-6xl">

            Pest Control Questions

            <span className="block text-[#F4E940]">

              Answered By Our Experts

            </span>

          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">

            Learn more about The Prompt Pest Control services,
            inspections, treatments and prevention solutions.

          </p>


        </div>


      </section>









      {/* FAQ LIST */}



      <section className="bg-white py-28">


        <div className="mx-auto max-w-5xl px-5">


          <div className="mb-14 text-center">


            <ShieldCheck
              size={45}
              className="mx-auto mb-5 text-[#082A55]"
            />


            <h2 className="text-4xl font-black text-[#031B38]">

              Common Pest Control FAQs

            </h2>


            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">

              Find helpful information before booking your pest control service.

            </p>


          </div>





          <div className="space-y-5">


            {faqs.map((item,index)=>(


              <div
                key={item.question}
                className="
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-100
                bg-[#F8FAFC]
                shadow-[0_15px_45px_rgba(3,27,56,.06)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                "
              >


                <button
                  onClick={()=>setOpen(open===index ? null:index)}
                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-5
                  p-6
                  text-left
                  "
                >


                  <span className="text-lg font-black text-[#031B38]">

                    {item.question}

                  </span>


                  <ChevronDown
                    className={`
                    shrink-0
                    text-[#082A55]
                    transition
                    duration-300
                    ${
                      open===index && "rotate-180"
                    }
                    `}
                  />


                </button>



                <div
                  className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    open===index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                  }
                  `}
                >


                  <div className="overflow-hidden">


                    <p className="px-6 pb-6 leading-8 text-slate-600">

                      {item.answer}

                    </p>


                  </div>


                </div>


              </div>


            ))}


          </div>


        </div>


      </section>








      {/* CTA */}



      <section className="bg-[#031B38] px-5 py-24 text-center text-white">


        <h2 className="text-4xl font-black">

          Need Professional Pest Control Help?

        </h2>


        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">

          Contact The Prompt Pest Control team to discuss your pest issue.

        </p>


        <div className="mt-10 flex flex-wrap justify-center gap-4">


          <Link
            to="/contact-us"
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#F4E940]
            px-8
            py-4
            font-black
            text-[#031B38]
            transition
            hover:-translate-y-1
            "
          >

            Contact Us

            <ArrowRight/>

          </Link>


          <a
            href="tel:07845873058"
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/25
            px-8
            py-4
            font-black
            transition
            hover:-translate-y-1
            "
          >

            <Phone/>

            07845 873058

          </a>


        </div>


      </section>

    <AboutCallbackSection/>
    </main>


  );

}