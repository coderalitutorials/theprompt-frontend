

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

                info@promptpestcontrol.co.uk

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