




import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Phone,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import AboutCallbackSection from "../components/AboutCallbackSection";

const blogs = [
  {
    title: "Mice in the House: Causes, Risks & Effective Control Solutions",
    slug: "mice-in-house-control-solutions",
    image: "/images/blog-rat-mice.webp",
    category: "Rodent Control",
    date: "August 10, 2026",
    intro:
      "Discovering mice inside your London property can be stressful. These rodents can contaminate food areas, damage materials and quickly spread through hidden spaces.",
    content: [
      {
        heading: "About Mice in London Properties",
        text: [
          "Mice are common rodents found in London homes and businesses. They can squeeze through very small gaps around doors, pipes, vents and wall openings.",
          "Once inside, mice search for food, warmth and shelter. If the issue is not handled quickly, they can spread through hidden spaces such as kitchens, lofts, wall voids and storage areas.",
        ],
      },
      {
        heading: "Signs of Mice Activity",
        points: [
          "Small dark droppings near cupboards, kitchens or skirting boards.",
          "Scratching or scurrying sounds at night.",
          "Chewed food packaging, wires, insulation or stored items.",
          "Nesting materials such as shredded paper or fabric.",
          "Unpleasant smell in hidden or enclosed spaces.",
        ],
      },
      {
        heading: "Mice Threats",
        text: [
          "Mice can contaminate surfaces and food areas with urine and droppings. They may also damage property by gnawing through packaging, insulation and electrical wires.",
          "Professional rodent control helps identify the source of the problem, possible entry points and suitable prevention steps.",
        ],
      },
      {
        heading: "How To Get Rid of Mice",
        points: [
          "Identify entry points around the property.",
          "Keep food sealed and remove easy food sources.",
          "Seal gaps around pipework, doors and walls.",
          "Keep bins and storage areas clean.",
          "Contact The Prompt Pest Control for professional rodent support.",
        ],
      },
    ],
    assistance:
      "Do not hesitate to contact The Prompt Pest Control for professional mice inspection, treatment and proofing support across London.",
    faqs: [
      {
        question: "Does The Prompt provide mice control services in London?",
        answer:
          "Yes. The Prompt Pest Control provides residential and commercial mice control support, including inspection, treatment and prevention guidance.",
      },
      {
        question: "How do mice enter a property?",
        answer:
          "Mice can enter through small gaps around doors, pipes, vents, brickwork, roof spaces and service openings.",
      },
      {
        question: "Are mice dangerous inside a home?",
        answer:
          "Mice can contaminate food areas, leave droppings and damage insulation, packaging and electrical wiring.",
      },
      {
        question: "Can sealing holes stop mice?",
        answer:
          "Proofing can help reduce entry, but active mice should first be identified and controlled before all access points are sealed.",
      },
      {
        question: "How quickly should I act after seeing a mouse?",
        answer:
          "It is best to act quickly because mice can move through hidden spaces and the activity may increase if food and shelter remain available.",
      },
    ],
  },

  {
    title: "Professional Bed Bug Treatment Guide For London Homes",
    slug: "bed-bug-treatment-guide",
    image: "/images/blog-bed-bugs.webp",
    category: "Bed Bug Treatment",
    date: "August 08, 2026",
    intro:
      "Bed bugs hide inside mattresses, bed frames, furniture and cracks. Early inspection and targeted treatment can help prevent the problem from spreading.",
    content: [
      {
        heading: "About Bed Bugs",
        text: [
          "Bed bugs are small insects that usually hide close to sleeping areas. They are often found in mattress seams, bed frames, headboards, sofas and furniture joints.",
          "They can spread through luggage, clothing, second-hand furniture and shared buildings. Because they hide in very small cracks, professional inspection is important.",
        ],
      },
      {
        heading: "Signs of Bed Bugs",
        points: [
          "Blood spots on bedding or pillowcases.",
          "Dark marks around mattress seams or bed frames.",
          "Itchy bites after sleeping.",
          "Shed skins or live bed bugs in hidden areas.",
          "Small eggs in cracks or furniture joints.",
        ],
      },
      {
        heading: "Bed Bug Threats",
        text: [
          "Bed bugs can cause stress, discomfort and sleep disturbance. DIY sprays often fail because eggs and hidden insects can be missed.",
          "A professional treatment approach focuses on the affected rooms, furniture, cracks and common hiding locations.",
        ],
      },
      {
        heading: "Bed Bug Treatment Advice",
        points: [
          "Avoid moving infested furniture between rooms.",
          "Wash affected fabrics where suitable.",
          "Reduce clutter around beds and furniture.",
          "Do not rely only on shop-bought sprays.",
          "Book professional bed bug treatment for proper inspection and control.",
        ],
      },
    ],
    assistance:
      "For persistent bed bug activity, contact The Prompt Pest Control for professional inspection and targeted treatment across London.",
    faqs: [
      {
        question: "Does The Prompt treat bed bugs in London homes?",
        answer:
          "Yes. The Prompt Pest Control provides bed bug inspection and treatment support for bedrooms, furniture and affected living areas.",
      },
      {
        question: "Where do bed bugs usually hide?",
        answer:
          "They commonly hide inside mattress seams, bed frames, headboards, furniture joints, skirting boards and small cracks.",
      },
      {
        question: "Can bed bugs spread between rooms?",
        answer:
          "Yes. They may spread through furniture, clothing, luggage and movement between connected rooms.",
      },
      {
        question: "Will washing bedding remove all bed bugs?",
        answer:
          "Washing suitable fabrics may help, but it normally does not reach bed bugs hidden inside furniture, cracks and bed frames.",
      },
      {
        question: "Should I throw away my mattress?",
        answer:
          "Not always. A professional inspection can help determine whether the mattress can be treated or whether replacement is necessary.",
      },
    ],
  },

  {
    title: "Why Do Cockroaches Invade UK Homes & Businesses?",
    slug: "cockroach-control-guide",
    image: "/images/blog-cockroach.webp",
    category: "Cockroach Control",
    date: "August 05, 2026",
    intro:
      "Cockroaches are a hygiene concern in kitchens, bathrooms and commercial food areas. They hide in warm dark spaces and can multiply quickly.",
    content: [
      {
        heading: "About Cockroaches",
        text: [
          "Cockroaches are common pests in kitchens, bathrooms, restaurants, food areas and commercial premises. They prefer warm, dark and moist spaces.",
          "They can hide behind appliances, under cupboards, near pipework, drains and service voids. Fast action is important because cockroach activity can increase quickly.",
        ],
      },
      {
        heading: "Signs of Cockroaches",
        points: [
          "Cockroach sightings at night.",
          "Small black droppings near appliances or cupboards.",
          "Musty odour in affected areas.",
          "Egg cases in cracks and hidden spaces.",
          "Activity near food, water or warm equipment.",
        ],
      },
      {
        heading: "Cockroach Threats",
        text: [
          "Cockroaches can contaminate surfaces and food preparation areas. For commercial premises, they can create serious hygiene and reputation concerns.",
          "Professional cockroach control targets harbourage areas, movement routes and conditions attracting activity.",
        ],
      },
      {
        heading: "How To Reduce Cockroach Activity",
        points: [
          "Keep food areas clean and dry.",
          "Remove grease and crumbs from appliances.",
          "Fix water leaks and reduce moisture.",
          "Seal cracks around cupboards and pipework.",
          "Use professional cockroach control for active infestations.",
        ],
      },
    ],
    assistance:
      "Contact The Prompt Pest Control for professional cockroach inspection and treatment for London homes and commercial premises.",
    faqs: [
      {
        question: "Does The Prompt provide cockroach control services?",
        answer:
          "Yes. The Prompt Pest Control provides cockroach inspection and treatment support for residential and commercial properties.",
      },
      {
        question: "Why do cockroaches appear at night?",
        answer:
          "Cockroaches are commonly active at night when rooms are quieter and they can search for food and water.",
      },
      {
        question: "Where do cockroaches hide?",
        answer:
          "They often hide behind appliances, inside cupboards, near pipework, drains, service voids and warm equipment.",
      },
      {
        question: "Can one cockroach mean there are more?",
        answer:
          "A single sighting may indicate hidden activity, especially if droppings, egg cases or repeated night-time sightings are also present.",
      },
      {
        question: "Are shop-bought sprays enough?",
        answer:
          "Surface sprays may only reach visible insects and can miss hidden harbourage areas and egg cases.",
      },
    ],
  },

  {
    title: "Safe And Effective Ant Control Solutions In London",
    slug: "ant-control-solutions",
    image: "/images/blog-ant.webp",
    category: "Ant Control",
    date: "August 01, 2026",
    intro:
      "Ant activity around kitchens, walls, gardens and food storage areas can quickly become frustrating when trails keep returning.",
    content: [
      {
        heading: "About Ant Problems",
        text: [
          "Ants are common pests in London homes and businesses. They usually enter properties through small gaps around floors, walls, doors, windows and pipework while searching for food and moisture.",
          "Once ants discover a food source, they create trails that allow more ants to follow.",
        ],
      },
      {
        heading: "Signs of Ant Activity",
        points: [
          "Visible ant trails around floors, walls or kitchen units.",
          "Ants gathering near sugary foods, crumbs or bins.",
          "Activity around doors, windows, patios or wall gaps.",
          "Outdoor nests close to paving, soil or garden areas.",
          "Repeated ant return in the same location after cleaning.",
        ],
      },
      {
        heading: "Ant Problems and Risks",
        text: [
          "Ants can contaminate food preparation areas and become a nuisance inside kitchens, cafes, storage areas and family homes.",
          "If the nest or entry route is not identified, the activity can continue and spread.",
        ],
      },
      {
        heading: "How To Control Ants",
        points: [
          "Keep food sealed and clean up spills quickly.",
          "Remove crumbs from kitchens and cupboards.",
          "Identify where ants are entering.",
          "Seal gaps around doors, floors and walls.",
          "Contact The Prompt Pest Control for ant control support.",
        ],
      },
    ],
    assistance:
      "For recurring ant trails or hidden nests, contact The Prompt Pest Control for professional ant control support in London.",
    faqs: [
      {
        question: "Does The Prompt provide ant control?",
        answer:
          "Yes. The Prompt Pest Control provides ant inspection and treatment support for homes and commercial premises.",
      },
      {
        question: "Why do ants keep returning?",
        answer:
          "Ants may return because a nearby nest and scent trail remain active even after visible ants have been removed.",
      },
      {
        question: "What attracts ants indoors?",
        answer:
          "Food crumbs, sugary spills, open packaging, moisture and easy entry gaps can attract ants.",
      },
      {
        question: "Should I seal ant entry points?",
        answer:
          "Sealing gaps can help, but the nest and active trail may also need to be addressed.",
      },
      {
        question: "Can ants affect commercial kitchens?",
        answer:
          "Yes. Ant activity can become a hygiene concern in kitchens, cafes, food storage areas and other commercial environments.",
      },
    ],
  },

  {
    title: "Wasp Nest Control: When Should You Call Professionals?",
    slug: "wasp-nest-control",
    image: "/images/blog-wasp.webp",
    category: "Wasp Control",
    date: "July 28, 2026",
    intro:
      "A wasp nest close to your property can create safety concerns, especially around gardens, lofts, roofs and wall gaps.",
    content: [
      {
        heading: "About Wasp Nest Problems",
        text: [
          "Wasps may build nests in lofts, sheds, wall cavities, roof edges, garages and garden structures.",
          "Wasps can become defensive if the nest is disturbed, making DIY removal risky.",
        ],
      },
      {
        heading: "Signs of a Wasp Nest",
        points: [
          "Heavy wasp activity around one area.",
          "Wasps repeatedly entering roof gaps or wall holes.",
          "A visible nest inside a loft, shed or tree.",
          "Increased activity near doors or outdoor seating.",
          "Buzzing sounds from a hidden cavity.",
        ],
      },
      {
        heading: "Wasp Nest Risks",
        text: [
          "Wasps may sting if they feel threatened, and stings can be dangerous for people with allergies.",
          "Nests near entrances, gardens or work areas can make spaces difficult to use safely.",
        ],
      },
      {
        heading: "Professional Wasp Nest Treatment",
        points: [
          "Do not block the nest entrance.",
          "Avoid spraying or hitting the nest.",
          "Keep children and pets away.",
          "Identify the main flight path.",
          "Call The Prompt Pest Control for professional help.",
        ],
      },
    ],
    assistance:
      "Do not disturb an active wasp nest. Contact The Prompt Pest Control for professional wasp nest assessment and treatment.",
    faqs: [
      {
        question: "Does The Prompt provide wasp nest treatment?",
        answer:
          "Yes. The Prompt Pest Control provides professional wasp nest inspection and treatment support across London.",
      },
      {
        question: "Should I block a wasp nest entrance?",
        answer:
          "No. Blocking an active entrance can cause wasps to search for another route, including into the property.",
      },
      {
        question: "Can I remove a nest myself?",
        answer:
          "DIY removal can be risky because wasps may become defensive when the nest is disturbed.",
      },
      {
        question: "Where are wasp nests commonly found?",
        answer:
          "Common locations include lofts, roof edges, wall cavities, sheds, garages, trees and garden structures.",
      },
      {
        question: "When should I call a professional?",
        answer:
          "Professional support is recommended when the nest is active, difficult to reach or close to people, pets or entrances.",
      },
    ],
  },

  {
    title: "Carpet Beetle Damage: Signs, Treatment & Prevention",
    slug: "carpet-beetle-treatment",
    image: "/images/blog-carpet-beetle.webp",
    category: "Carpet Beetle",
    date: "July 25, 2026",
    intro:
      "Carpet beetles can damage carpets, clothing, curtains and soft furnishings. Their larvae often hide in quiet fabric areas.",
    content: [
      {
        heading: "About Carpet Beetles",
        text: [
          "Carpet beetle larvae feed on natural fibres, carpets, clothes, curtains, upholstery and stored fabrics.",
          "They are often found under furniture, along skirting boards, inside wardrobes and near windows.",
        ],
      },
      {
        heading: "Signs of Carpet Beetle Activity",
        points: [
          "Damage to carpets or clothing.",
          "Larvae around carpet edges.",
          "Adult beetles near windows.",
          "Shed larval skins.",
          "Thin patches or holes in fabrics.",
        ],
      },
      {
        heading: "Carpet Beetle Risks",
        text: [
          "Carpet beetle larvae can cause visible damage to fabrics and soft furnishings.",
          "Because they hide in quiet areas, activity may continue unnoticed.",
        ],
      },
      {
        heading: "Treatment and Prevention Advice",
        points: [
          "Vacuum carpet edges regularly.",
          "Check wardrobes and stored fabrics.",
          "Clean affected items where suitable.",
          "Remove lint, hair and dust.",
          "Book professional treatment if activity continues.",
        ],
      },
    ],
    assistance:
      "Contact The Prompt Pest Control for professional carpet beetle inspection and treatment if damage or larvae continue to appear.",
    faqs: [
      {
        question: "Does The Prompt treat carpet beetles?",
        answer:
          "Yes. The Prompt Pest Control provides carpet beetle inspection and treatment support for affected properties.",
      },
      {
        question: "What do carpet beetle larvae eat?",
        answer:
          "Larvae may feed on natural fibres, wool, hair, feathers, carpets, clothing and soft furnishings.",
      },
      {
        question: "Where do carpet beetles hide?",
        answer:
          "They may hide under furniture, along carpet edges, inside wardrobes, behind skirting boards and in stored fabrics.",
      },
      {
        question: "Do adult carpet beetles damage carpets?",
        answer:
          "Most fabric damage is caused by the larvae rather than the adult beetles.",
      },
      {
        question: "How can I reduce future activity?",
        answer:
          "Regular vacuuming, checking stored fabrics and removing lint and hair from hidden spaces can help reduce suitable conditions.",
      },
    ],
  },

  {
    title: "Bird Problems Around Buildings: Risks, Signs & Control Options",
    slug: "bird-control-guide",
    image: "/images/blog-bird-control.webp",
    category: "Bird Control",
    date: "July 22, 2026",
    intro:
      "Bird activity around roofs, ledges, balconies and commercial buildings can create noise, mess and property concerns.",
    content: [
      {
        heading: "About Bird Problems Around Properties",
        text: [
          "Birds such as pigeons and gulls often gather around roofs, ledges, balconies, warehouses and shop fronts.",
          "Regular activity may lead to nesting material, droppings and blocked drainage areas.",
        ],
      },
      {
        heading: "Signs of Bird Activity",
        points: [
          "Birds gathering on roofs or balconies.",
          "Droppings around entrances.",
          "Nesting material in gutters.",
          "Noise inside roof areas.",
          "Blocked vents or drainage points.",
        ],
      },
      {
        heading: "Bird Problems and Property Risks",
        text: [
          "Bird droppings can create an unpleasant appearance and make areas difficult to keep clean.",
          "Nesting materials can block gutters and drainage systems.",
        ],
      },
      {
        heading: "Bird Control and Prevention Options",
        points: [
          "Identify roosting and nesting areas.",
          "Avoid leaving food waste accessible.",
          "Keep gutters clear where safe.",
          "Use suitable proofing or deterrent systems.",
          "Contact The Prompt Pest Control for guidance.",
        ],
      },
    ],
    assistance:
      "For persistent bird activity, nesting or fouling, contact The Prompt Pest Control for professional bird control and proofing support.",
    faqs: [
      {
        question: "Does The Prompt provide bird control services?",
        answer:
          "Yes. The Prompt Pest Control provides bird control, deterrent and proofing support for residential and commercial properties.",
      },
      {
        question: "What bird problems commonly affect buildings?",
        answer:
          "Common concerns include droppings, nesting, noise, blocked gutters and repeated roosting on roofs and ledges.",
      },
      {
        question: "Can bird nests be removed at any time?",
        answer:
          "Bird and nest activity must be handled responsibly and in line with applicable wildlife requirements. An assessment should be carried out before work begins.",
      },
      {
        question: "What bird deterrents can be used?",
        answer:
          "The suitable option depends on the building and may include proofing, netting, spikes or other deterrent systems.",
      },
      {
        question: "Can bird activity damage a property?",
        answer:
          "Repeated nesting and droppings may affect gutters, drainage, ledges, roofs and the overall condition of affected areas.",
      },
    ],
  },

  {
    title: "Bumble Bees Around Your Property: What Should You Do?",
    slug: "bumble-bee-guidance",
    image: "/images/blog-bumble-bee.webp",
    category: "Bumble Bee Guidance",
    date: "July 20, 2026",
    intro:
      "Bumble bees are valuable pollinators and often require a careful, responsible approach. Understanding their activity can help protect both people and bees.",
    content: [
      {
        heading: "About Bumble Bees",
        text: [
          "Bumble bees are large, fuzzy bees commonly seen around gardens, flowers, parks and residential properties.",
          "They may create temporary nests in old rodent holes, sheds, roof spaces, wall cavities or beneath decking.",
        ],
      },
      {
        heading: "Signs of Bumble Bee Activity",
        points: [
          "Fuzzy bees entering the same opening.",
          "Bee activity around sheds or decking.",
          "A steady flight path to a hidden nest.",
          "Buzzing from a wall or roof space.",
          "Several bees gathering near flowers.",
        ],
      },
      {
        heading: "Bumble Bee Safety and Concerns",
        text: [
          "Bumble bees are generally not aggressive unless disturbed or threatened.",
          "Extra care may be needed when a nest is close to entrances, children, pets or people with sting allergies.",
        ],
      },
      {
        heading: "What To Do Around a Bumble Bee Nest",
        points: [
          "Avoid blocking the entrance.",
          "Keep children and pets away.",
          "Do not spray chemicals.",
          "Leave the colony undisturbed where practical.",
          "Contact The Prompt Pest Control for professional guidance.",
        ],
      },
    ],
    assistance:
      "The Prompt Pest Control provides responsible bumble bee identification, assessment and suitable support across London. Contact our team before disturbing an active bee nesting area.",
    faqs: [
      {
        question:
          "Does The Prompt provide bumble bee services in London?",
        answer:
          "Yes. The Prompt Pest Control provides professional bumble bee identification, assessment and suitable guidance or support for London properties.",
      },
      {
        question:
          "What should I do if bumble bees are nesting on my property?",
        answer:
          "Avoid disturbing or blocking the entrance. Keep people and pets away from the main flight path and contact The Prompt Pest Control for an assessment.",
      },
      {
        question: "Are bumble bees aggressive?",
        answer:
          "Bumble bees are generally calm but may sting if handled, trapped or if their nest is disturbed.",
      },
      {
        question: "Why are bumble bees important?",
        answer:
          "Bumble bees are important pollinators that help flowers, crops and other plants reproduce.",
      },
      {
        question: "How can I reduce future nesting opportunities?",
        answer:
          "Once the activity has ended and it is appropriate to do so, gaps around sheds, decking, roof spaces and walls can be inspected and responsibly proofed.",
      },
    ],
  },
];

export default function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  const relatedBlogs = blogs
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!blog) {
    return (
      <main className="py-40 text-center">
        <h1 className="text-4xl font-black text-[#031B38]">
          Blog Not Found
        </h1>

        <Link
          to="/blogs"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#031B38] px-7 py-4 font-black text-white transition hover:-translate-y-1"
        >
          View All Articles
          <ArrowRight size={18} />
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* BLOG HERO IMAGE */}

      <section className="bg-[#002447] p-5 lg:p-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-[520px] w-full rounded-[3rem] object-cover shadow-[0_35px_100px_rgba(0,0,0,.35)]"
          loading="eager"
        />
      </section>

      {/* BLOG CONTENT */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10">
            <div className="mb-5 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
                {blog.category}
              </span>

              <span className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <CalendarDays size={16} />
                {blog.date}
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-[#031B38] sm:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              {blog.intro}
            </p>
          </div>

          <article className="space-y-12">
            {blog.content.map((section) => (
              <div key={section.heading}>
                <h2 className="text-3xl font-black text-[#031B38] sm:text-4xl">
                  {section.heading}
                </h2>

                {section.text && (
                  <div className="mt-5 space-y-5 text-lg leading-9 text-slate-600">
                    {section.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.points && (
                  <div className="mt-6 space-y-4">
                    {section.points.map((point, index) => (
                      <div
                        key={point}
                        className="flex gap-4 rounded-2xl bg-[#F8FAFC] p-5 font-semibold leading-8 text-slate-600"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#002447] text-sm font-black text-[#F4E940]">
                          {index + 1}
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </article>

          {/* ADDITIONAL ASSISTANCE */}

          <div className="mt-16 rounded-[2rem] border border-[#F4E940]/40 bg-[#FFFEE8] p-6 sm:p-8">
            <div className="flex gap-4">
              <CheckCircle2
                size={28}
                className="mt-1 shrink-0 text-[#082A55]"
              />

              <p className="text-lg font-bold leading-8 text-[#031B38]">
                {blog.assistance}
              </p>
            </div>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS */}

          <section className="mt-20">
            <div className="mb-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#082A55]/10 px-5 py-2 text-sm font-black text-[#082A55]">
                <HelpCircle size={18} />
                Frequently Asked Questions
              </div>

              <h2 className="text-4xl font-black text-[#031B38] sm:text-5xl">
                Common Questions About {blog.category}
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Find answers to common questions related to this pest issue,
                professional treatment and property prevention.
              </p>
            </div>

            <div className="space-y-5">
              {blog.faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4E940] font-black text-[#031B38]">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="text-xl font-black leading-8 text-[#031B38] sm:text-2xl">
                        {faq.question}
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT CTA */}

          <div className="mt-20 rounded-[3rem] bg-[#002447] p-8 text-center text-white">
            <h2 className="text-3xl font-black">
              Need Pest Control Help?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
              Contact The Prompt Pest Control for professional residential and
              commercial pest control support across London.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#F4E940] px-8 py-4 font-black text-[#031B38] transition hover:-translate-y-1 hover:bg-white"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:07845873058"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-black text-[#031B38] transition hover:-translate-y-1 hover:bg-[#F4E940]"
              >
                <Phone size={18} />
                07845 873058
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-[#031B38]">
              Related Articles
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {relatedBlogs.map((item) => (
              <Link
                key={item.slug}
                to={`/blogs/${item.slug}`}
                className="group overflow-hidden rounded-[2.5rem] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:bg-[#002447]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-6">
                  <span className="rounded-full bg-[#F4E940] px-4 py-2 text-xs font-black text-[#031B38]">
                    {item.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-black text-[#031B38] transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-slate-600 transition group-hover:text-white/70">
                    {item.intro}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-black text-[#082A55] underline decoration-2 underline-offset-4 transition group-hover:text-[#F4E940]">
                    Read Article
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-3 rounded-full bg-[#031B38] px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#082A55]"
            >
              View All Pest Control Articles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
       <AboutCallbackSection/>
    </main>
  );
}