import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") setPhoneError("");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);


    toast.promise(
      axios.post(
        "https://theprompt-backend.vercel.app/api/callback",
        formData
      ),
      {
        loading: "Sending your callback request...",
        success: () => {
          setFormData({
            name:"",
            postcode:"",
            phone:"",
          });

          setLoading(false);

          return "Callback request sent! Our team will contact you shortly 📞";
        },

        error:(error)=>{
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Request failed. Please try again."
          );
        }
      }
    );

  };


  return (
    <section className="relative overflow-hidden bg-[#031B38] py-28 text-white">

      <Toaster position="top-center"/>


      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#F4E940]/10 blur-3xl"/>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl"/>



      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 items-center">


          {/* LEFT CONTENT */}

          <div className="lg:col-span-6">


            <div className="
            mb-6 inline-flex items-center gap-2
            rounded-full
            bg-[#F4E940]
            px-5 py-2
            text-sm
            font-black
            text-[#031B38]
            ">
              <ShieldCheck size={18}/>
              Request Callback
            </div>



            <h2 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            ">
              Need Professional
              <span className="block text-[#F4E940]">
                Pest Control Help?
              </span>
            </h2>



            <p className="
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-white/75
            ">
              Tell us about your pest issue and The Prompt Pest Control team
              will contact you to discuss inspection and treatment options
              across London.
            </p>




            <div className="mt-10 space-y-5">

              {[
                {
                  icon:PhoneCall,
                  text:"Fast callback from our team",
                },

                {
                  icon:MapPin,
                  text:"Serving London properties",
                },

                {
                  icon:Clock,
                  text:"Professional pest advice",
                },

              ].map((item)=>{

                const Icon=item.icon;

                return(

                <div
                key={item.text}
                className="
                flex items-center gap-4
                rounded-2xl
                border border-white/10
                bg-white/10
                p-4
                backdrop-blur
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#F4E940]/50
                "
                >

                  <div className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#F4E940]
                  text-[#031B38]
                  ">
                    <Icon size={22}/>
                  </div>


                  <p className="font-bold">
                    {item.text}
                  </p>


                </div>

                )

              })}

            </div>


          </div>





          {/* RIGHT FORM */}

          <div className="lg:col-span-6">


            <div className="
            relative
            rounded-[3rem]
            border border-white/15
            bg-white/10
            p-8
            backdrop-blur-xl
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            ">


              <div className="
              absolute -inset-1
              rounded-[3rem]
              bg-purple-500/20
              blur-2xl
              -z-10
              "/>



              <div className="mb-8">

                <p className="
                text-sm
                font-black
                uppercase
                tracking-[0.25em]
                text-[#F4E940]
                ">
                  Free Consultation
                </p>


                <h3 className="
                mt-3
                text-4xl
                font-black
                ">
                  Request a Callback
                </h3>


                <p className="
                mt-3
                text-white/65
                ">
                  Enter your details below.
                </p>


              </div>




              <form onSubmit={handleSubmit} className="space-y-5">


                {[
                  {
                    name:"name",
                    placeholder:"Full Name *",
                    type:"text"
                  },

                  {
                    name:"postcode",
                    placeholder:"Postcode *",
                    type:"text"
                  },

                  {
                    name:"phone",
                    placeholder:"Phone Number *",
                    type:"tel"
                  },


                ].map((field)=>(

                  <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="
                  w-full
                  rounded-2xl
                  border border-white/15
                  bg-white/10
                  px-5 py-4
                  text-white
                  placeholder:text-white/50
                  outline-none
                  transition
                  focus:border-[#F4E940]
                  focus:ring-4
                  focus:ring-[#F4E940]/20
                  "
                  />

                ))}


                {phoneError && (
                  <p className="text-red-400 font-bold">
                    {phoneError}
                  </p>
                )}



                <button
                disabled={loading}
                className="
                flex w-full
                items-center justify-center
                gap-3
                rounded-2xl
                bg-[#F4E940]
                px-6 py-4
                font-black
                text-[#031B38]
                transition
                duration-300
                hover:-translate-y-1
                "
                >

                  {loading ? "Sending..." : "Send Callback Request"}

                  <ArrowRight size={18}/>

                </button>


              </form>


<Link
  to="/about-us"
  className="
  underline decoration-2 underline-offset-4
  mt-6
  flex items-center
  gap-3
  rounded-2xl
  bg-white
  p-4
  font-black
  text-[#031B38]
  transition
  duration-300
  hover:-translate-y-1
  hover:bg-[#F4E940]
  "
>
  <CheckCircle2 size={22} />

  Trusted London Pest Control
</Link>


            </div>


          </div>


        </div>

      </div>


    </section>
  );
}