


import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const blogs = [
  {
    title: "Mice in the House: Causes, Risks & Effective Control Solutions",
    slug: "/blogs/mice-in-house-control-solutions",
    image: "/images/blog-rat-mice.webp",
    category: "Rodent Control",
    date: "june 10, 2026",
    text:
      "Discovering mice inside your London property can be stressful. Learn why rodents enter homes, the risks they create and how professional pest control helps protect your property.",
  },

  {
    title: "Professional Bed Bug Treatment Guide For London Homes",
    slug: "/blogs/bed-bug-treatment-guide",
    image: "/images/blog-bed-bugs.webp",
    category: "Bed Bug Treatment",
    date: "june 08, 2026",
    text:
      "Bed bugs can hide inside mattresses, furniture and small cracks. Understand the warning signs, treatment process and prevention steps for your home.",
  },

  {
    title: "Why Do Cockroaches Invade UK Homes & Businesses?",
    slug: "/blogs/cockroach-control-guide",
    image: "/images/blog-cockroach.webp",
    category: "Cockroach Control",
    date: "june 05, 2026",
    text:
      "Cockroaches are common pests in kitchens and commercial areas. Learn what attracts them and how targeted pest control treatments work.",
  },

  {
    title: "Safe And Effective Ant Control Solutions In London",
    slug: "/blogs/ant-control-solutions",
    image: "/images/blog-ant.webp",
    category: "Ant Control",
    date: "July 01, 2026",
    text:
      "Ant activity around your property can quickly increase. Find out how inspections, treatments and prevention methods help manage infestations.",
  },

  {
    title: "Wasp Nest Control: When Should You Call Professionals?",
    slug: "/blogs/wasp-nest-control",
    image: "/images/blog-wasp.webp",
    category: "Wasp Control",
    date: "July 28, 2026",
    text:
      "A wasp nest close to your property can create safety concerns. Learn about professional wasp nest inspection and treatment options.",
  },

  {
    title: "Carpet Beetle Damage: Signs, Treatment & Prevention",
    slug: "/blogs/carpet-beetle-treatment",
    image: "/images/blog-carpet-beetle.webp",
    category: "Carpet Beetle",
    date: "July 25, 2026",
    text:
      "Carpet beetles can damage carpets, fabrics and soft furnishings. Learn the signs of activity and how treatment helps protect your home.",
  },

  {
    title: "Bird Problems Around Buildings: Risks, Signs & Control Options",
    slug: "/blogs/bird-control-guide",
    image: "/images/blog-bird-control.webp",
    category: "Bird Control",
    date: "July 22, 2026",
    text:
      "Bird activity around roofs, ledges and commercial buildings can create noise, mess and property concerns. Learn the common signs and how professional bird control and proofing solutions can help.",
  },

  {
    title: "Bumble Bees Around Your Property: What Should You Do?",
    slug: "/blogs/bumble-bee-guidance",
    image: "/images/blog-bumble-bee.webp",
    category: "Bumble Bee Guidance",
    date: "July 20, 2026",
    text:
      "Bumble bees are important pollinators and often require careful handling. Learn how to identify activity, avoid disturbing a nest and when professional guidance may be needed.",
  },
];

export default function Blogs() {
  return (
    <main>
      {/* HEADER AREA */}

      <section className="bg-[#002447] py-28 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
              <ShieldCheck size={18} />
              Pest Control Articles
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              Latest Pest Control

              <span className="block text-[#F4E940]">
                Guides & Advice
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Helpful pest control information from The Prompt Pest Control
              for London homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG LISTING */}

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="space-y-10">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-[3rem] bg-[#F8FAFC] shadow-[0_20px_70px_rgba(3,27,56,.08)] transition duration-500 hover:-translate-y-2 hover:bg-[#002447] hover:shadow-[0_35px_100px_rgba(0,36,71,.45)]"
              >
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-[420px_1fr]">
                  {/* IMAGE */}

                  <Link
                    to={blog.slug}
                    aria-label={`Read ${blog.title}`}
                    className="block overflow-hidden lg:h-full"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-110 lg:h-full"
                    />
                  </Link>

                  {/* CONTENT */}

                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="mb-5 flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
                        {blog.category}
                      </span>

                      <span className="flex items-center gap-2 text-sm font-bold text-slate-500 transition group-hover:text-white/70">
                        <CalendarDays size={16} />
                        {blog.date}
                      </span>
                    </div>

                    <h2 className="max-w-3xl text-3xl font-black leading-tight">
                      <Link
                        to={blog.slug}
                        className="text-[#082A55] underline decoration-[#082A55] decoration-[3px] underline-offset-8 transition-colors duration-300 group-hover:text-[#F4E940] group-hover:decoration-[#F4E940]"
                      >
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 transition duration-300 group-hover:text-white/70">
                      {blog.text}
                    </p>

                    <div className="mt-8">
                      <Link
                        to={blog.slug}
                        className="inline-flex items-center gap-3 rounded-full bg-[#031B38] px-7 py-4 font-black text-white transition duration-300 group-hover:bg-[#F4E940] group-hover:text-[#031B38]"
                      >
                        <span className="underline decoration-2 underline-offset-4">
                          Read Full Article
                        </span>

                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}