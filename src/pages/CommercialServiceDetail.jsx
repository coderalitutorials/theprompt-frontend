import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Search,
  Building2,
  SprayCan,
  LockKeyhole,
  ClipboardCheck,
} from "lucide-react";

const commercialData = {
  "office-pest-control": {
    title: "Professional Office Pest Control Services in London",
    badge: "Office Pest Control",
    image: "/images/commercial-office-pest-control.webp",
    intro:
      "A clean and pest-free office is important for staff comfort, workplace hygiene and business productivity. The Prompt Pest Control provides professional office pest control services across London.",
    aboutTitle: "About Office Pest Control",
    about: [
      "Offices can attract pests through food waste, staff kitchens, storage rooms, delivery areas, gaps around doors and hidden service voids. Rodents, cockroaches, ants, flies and other pests can quickly disrupt the workplace if activity is ignored.",
      "Our office pest control service focuses on inspection, treatment and prevention. We help identify where pests are entering, where they may be hiding and what steps can reduce future pest problems.",
    ],
    safety: [
      {
        title: "Regular Inspections",
        text: "Routine pest inspections help identify early activity, entry points and risk areas before problems spread.",
      },
      {
        title: "Hygiene Maintenance",
        text: "Keeping workstations, kitchens and communal areas clean helps reduce food sources that attract pests.",
      },
      {
        title: "Seal Entry Points",
        text: "Small gaps around doors, windows, pipes and service openings can allow pests to enter the office.",
      },
      {
        title: "Pest-Proof Storage",
        text: "Food items and office supplies should be stored securely to reduce contamination risks.",
      },
      {
        title: "Staff Awareness",
        text: "Employees should know how to report pest signs such as droppings, damage or live activity.",
      },
    ],
    pests: [
      {
        title: "Rodents",
        text: "Rats and mice may enter offices looking for warmth, shelter and food.",
      },
      {
        title: "Cockroaches",
        text: "Cockroaches can hide around kitchens, appliances and service areas.",
      },
      {
        title: "Ants & Flies",
        text: "Food waste, bins and kitchen areas can attract ants and flies.",
      },
      {
        title: "Bed Bugs",
        text: "Bed bugs can occasionally be carried into offices through bags, clothing or furniture.",
      },
    ],
    why: [
      "Experienced team for London office pest control.",
      "Tailored pest management plans for your workplace.",
      "Fast response to reduce disruption to your staff.",
      "Prevention-focused approach with practical advice.",
    ],
  },

  "retail-business-pest-control": {
    title: "Professional Retail Business Pest Control Services in London",
    badge: "Retail Pest Control",
    image: "/images/commercial-retail-pest-control.webp",
    intro:
      "Retail businesses need clean, safe and customer-friendly environments. The Prompt Pest Control provides pest control support for shops, stores and retail premises across London.",
    aboutTitle: "About Retail Pest Control",
    about: [
      "Retail spaces can face pest problems due to deliveries, storage areas, food products, stock rooms, bins and high foot traffic. Even a small pest issue can affect customer trust and business reputation.",
      "Our retail pest control service helps identify pest activity, treat affected areas and advise on prevention steps suitable for busy commercial environments.",
    ],
    safety: [
      { title: "Stock Room Checks", text: "Storage and delivery areas should be checked regularly for pest signs." },
      { title: "Waste Control", text: "Bins and packaging waste should be managed to reduce pest attraction." },
      { title: "Entry Point Sealing", text: "Gaps around loading doors, walls and vents should be inspected." },
      { title: "Clean Display Areas", text: "Food, crumbs and spills should be cleaned quickly in customer areas." },
      { title: "Staff Reporting", text: "Staff should report droppings, gnaw marks, insects or unusual activity." },
    ],
    pests: [
      { title: "Rodents", text: "Rats and mice may enter through delivery areas and gaps." },
      { title: "Flies", text: "Flies can affect customer areas and food-related retail spaces." },
      { title: "Cockroaches", text: "Cockroaches may hide in warm service and storage areas." },
      { title: "Ants", text: "Ants can appear around food, counters and floor gaps." },
    ],
    why: [
      "Retail-focused pest control support.",
      "Discreet service for customer-facing premises.",
      "Prevention guidance for stock and waste areas.",
      "Support for London shops and retail businesses.",
    ],
  },

  "pharmaceutical-pest-control": {
    title: "Pest Control for Pharmaceutical Businesses in London",
    badge: "Pharmaceutical Pest Control",
    image: "/images/commercial-pharmaceutical-pest-control.webp",
    intro:
      "Pharmaceutical environments require strict hygiene, protection and careful pest management. The Prompt Pest Control supports pharmaceutical businesses across London.",
    aboutTitle: "About Pharmaceutical Pest Control",
    about: [
      "Pharmaceutical sites can be sensitive environments where pest activity may affect hygiene, storage, compliance and operational standards.",
      "Our service focuses on careful inspection, risk reduction, targeted treatment and prevention advice suitable for controlled commercial environments.",
    ],
    safety: [
      { title: "Controlled Inspections", text: "Regular inspections help monitor risk areas without disrupting operations." },
      { title: "Storage Protection", text: "Products and materials should be stored in secure pest-resistant areas." },
      { title: "Entry Point Control", text: "Doors, vents, pipework and service gaps should be monitored." },
      { title: "Waste Management", text: "Waste areas should be kept clean and controlled." },
      { title: "Documentation Awareness", text: "Pest sightings should be reported and recorded quickly." },
    ],
    pests: [
      { title: "Rodents", text: "Rodents can damage stock, packaging and sensitive areas." },
      { title: "Stored Product Pests", text: "Certain insects may affect stored materials." },
      { title: "Flies", text: "Flying insects can create hygiene concerns." },
      { title: "Cockroaches", text: "Cockroaches can contaminate surfaces and hidden spaces." },
    ],
    why: [
      "Professional support for sensitive business environments.",
      "Inspection-led pest management approach.",
      "Prevention advice for storage and access points.",
      "London commercial pest control experience.",
    ],
  },

  "marine-port-pest-control": {
    title: "Pest Control for Offshore Marine and Port Industries in London",
    badge: "Marine & Port Pest Control",
    image: "/images/commercial-marine-port-pest-control.webp",
    intro:
      "Marine, offshore and port environments can face pest risks due to cargo, storage, water access and transport movement. The Prompt Pest Control provides commercial pest support for these sectors.",
    aboutTitle: "About Marine and Port Pest Control",
    about: [
      "Ports and marine-related sites can attract rodents, insects and birds due to cargo movement, waste areas, storage containers and external access points.",
      "Our pest control approach focuses on identifying risk zones, treating active issues and advising on prevention suitable for busy operational environments.",
    ],
    safety: [
      { title: "Cargo Area Checks", text: "Storage, containers and loading zones should be inspected regularly." },
      { title: "Waste Control", text: "Waste and food sources should be controlled to reduce pest attraction." },
      { title: "Rodent Monitoring", text: "Rodent activity should be checked around external boundaries and storage areas." },
      { title: "Bird Risk Areas", text: "Roosting and nesting points should be identified." },
      { title: "Entry Point Control", text: "Buildings, stores and staff areas should be proofed where possible." },
    ],
    pests: [
      { title: "Rodents", text: "Rats and mice can move around cargo and storage areas." },
      { title: "Birds", text: "Birds may roost around structures and create mess." },
      { title: "Flies", text: "Waste and food areas can attract flying insects." },
      { title: "Cockroaches", text: "Warm hidden areas may support cockroach activity." },
    ],
    why: [
      "Support for complex commercial environments.",
      "Inspection-led approach for operational sites.",
      "Prevention advice for cargo, waste and access areas.",
      "Professional London pest control service.",
    ],
  },

  "industrial-premises-pest-control": {
    title: "Pest Control for Industrial Premises in London",
    badge: "Industrial Pest Control",
    image: "/images/commercial-industrial-pest-control.webp",
    intro:
      "Industrial premises can face pest issues due to storage, machinery, waste, loading bays and large access points. The Prompt Pest Control provides industrial pest control support in London.",
    aboutTitle: "About Industrial Pest Control",
    about: [
      "Factories, warehouses and industrial units often contain multiple pest risk areas, including loading doors, storage zones, staff kitchens, waste areas and external perimeters.",
      "Our industrial pest control service helps identify activity, manage risk areas and provide practical prevention guidance for large commercial sites.",
    ],
    safety: [
      { title: "Loading Bay Checks", text: "Large doors and delivery points should be inspected for pest access." },
      { title: "Storage Management", text: "Stored goods should be checked for pest activity and damage." },
      { title: "Waste Area Control", text: "External bins and waste areas should be kept clean and controlled." },
      { title: "Building Proofing", text: "Gaps around walls, pipes and roller shutters should be reviewed." },
      { title: "Routine Monitoring", text: "Large sites benefit from regular pest monitoring and inspections." },
    ],
    pests: [
      { title: "Rodents", text: "Rodents can damage stock, wiring and stored materials." },
      { title: "Birds", text: "Birds may affect roofs, loading areas and external structures." },
      { title: "Cockroaches", text: "Cockroaches can hide around warm equipment and service spaces." },
      { title: "Flies", text: "Flies may appear around waste and food areas." },
    ],
    why: [
      "Commercial support for warehouses and industrial units.",
      "Risk-based inspection and treatment approach.",
      "Advice for proofing and prevention.",
      "Service designed around operational environments.",
    ],
  },

  "health-care-pest-control": {
    title: "Health Care Pest Control Services in London",
    badge: "Health Care Pest Control",
    image: "/images/commercial-healthcare-pest-control.webp",
    intro:
      "Healthcare environments require high standards of hygiene and pest prevention. The Prompt Pest Control provides professional pest control support for healthcare-related premises in London.",
    aboutTitle: "About Health Care Pest Control",
    about: [
      "Healthcare settings can be sensitive because pest activity may create hygiene concerns and impact patient, staff and visitor confidence.",
      "Our service focuses on careful inspection, targeted control and prevention advice for healthcare properties and related facilities.",
    ],
    safety: [
      { title: "Regular Monitoring", text: "Sensitive sites should be checked regularly for early pest signs." },
      { title: "Hygiene Control", text: "Food, waste and cleaning routines should be managed carefully." },
      { title: "Entry Point Sealing", text: "Gaps around doors, vents and pipework should be identified." },
      { title: "Waste Areas", text: "External and internal waste areas should be kept controlled." },
      { title: "Staff Reporting", text: "Pest sightings should be reported quickly for action." },
    ],
    pests: [
      { title: "Rodents", text: "Rodents can cause serious hygiene and property concerns." },
      { title: "Flies", text: "Flying insects can affect hygiene standards." },
      { title: "Cockroaches", text: "Cockroaches can hide in warm service areas." },
      { title: "Ants", text: "Ants may appear around food and staff areas." },
    ],
    why: [
      "Careful service for hygiene-sensitive premises.",
      "Inspection and prevention focused approach.",
      "Support for London healthcare-related buildings.",
      "Clear communication and practical advice.",
    ],
  },

  "museums-antiquities-pest-control": {
    title: "Pest Control for Museums and Antiquities in London",
    badge: "Museum Pest Control",
    image: "/images/commercial-museum-pest-control.webp",
    intro:
      "Museums and antiquity spaces require careful pest management to help protect displays, fabrics, stored items and sensitive materials. The Prompt Pest Control supports these specialist environments.",
    aboutTitle: "About Museum and Antiquity Pest Control",
    about: [
      "Museums, galleries and antiquity collections can be affected by fabric pests, stored product pests, rodents and insects that may damage valuable materials.",
      "Our approach focuses on inspection, monitoring, targeted treatment advice and prevention support for sensitive spaces.",
    ],
    safety: [
      { title: "Collection Monitoring", text: "Display and storage areas should be monitored for pest signs." },
      { title: "Fabric Protection", text: "Natural fabrics, carpets and textiles should be checked regularly." },
      { title: "Storage Review", text: "Boxes, archives and hidden areas should be inspected." },
      { title: "Entry Point Control", text: "Doors, vents and building gaps should be reviewed." },
      { title: "Careful Treatment Planning", text: "Any treatment should consider the sensitivity of items and spaces." },
    ],
    pests: [
      { title: "Moths", text: "Moths may damage fabrics, carpets and stored textiles." },
      { title: "Carpet Beetles", text: "Carpet beetle larvae may affect natural fibres and displays." },
      { title: "Rodents", text: "Rodents can damage stored materials and building areas." },
      { title: "Insects", text: "Different insects can affect storage and archive spaces." },
    ],
    why: [
      "Specialist support for sensitive environments.",
      "Prevention-focused pest management.",
      "Careful inspection for fabrics and stored items.",
      "Support for London museums and collections.",
    ],
  },

  "food-business-pest-control": {
    title: "Pest Control for Food Related Businesses in London",
    badge: "Food Business Pest Control",
    image: "/images/commercial-food-business-pest-control.webp",
    intro:
      "Food businesses must protect hygiene standards, customers and stock from pest activity. The Prompt Pest Control provides pest control support for food-related businesses across London.",
    aboutTitle: "About Food Business Pest Control",
    about: [
      "Restaurants, takeaways, cafes, kitchens, bakeries and food storage spaces can attract pests due to food waste, warmth, water, deliveries and hidden service areas.",
      "Our food business pest control service focuses on inspection, targeted treatment and prevention advice to help maintain a cleaner and safer environment.",
    ],
    safety: [
      { title: "Kitchen Inspections", text: "Food preparation areas should be checked for pest signs and risk points." },
      { title: "Waste Management", text: "Bins, grease and food waste should be controlled carefully." },
      { title: "Proofing Gaps", text: "Gaps around pipes, doors, vents and service voids should be sealed where possible." },
      { title: "Storage Control", text: "Food items should be stored in sealed containers and off the floor." },
      { title: "Cleaning Routine", text: "Regular deep cleaning helps reduce food sources and harbourage." },
    ],
    pests: [
      { title: "Rodents", text: "Rats and mice can contaminate food areas and damage packaging." },
      { title: "Cockroaches", text: "Cockroaches are a major hygiene concern in kitchens and warm areas." },
      { title: "Flies", text: "Flies can spread contamination around food and waste areas." },
      { title: "Ants", text: "Ants can appear around sugar, crumbs and food storage." },
    ],
    why: [
      "Food business focused pest support.",
      "Treatment and prevention advice for kitchens.",
      "Fast response for hygiene-sensitive issues.",
      "Commercial pest control across London.",
    ],
  },
};

const sidebarPoints = [
  { icon: Search, text: "Commercial Inspection" },
  { icon: ClipboardCheck, text: "Risk Assessment" },
  { icon: SprayCan, text: "Targeted Treatment" },
  { icon: LockKeyhole, text: "Prevention Advice" },
];

export default function CommercialServiceDetail() {
  const { slug } = useParams();
  const service = commercialData[slug];

  if (!service) {
    return (
      <main className="py-40 text-center">
        <h1 className="text-4xl font-black">Commercial Service Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#031B38] px-5 py-28 text-center text-white">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#031B38]/84" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4E940] px-5 py-2 text-sm font-black text-[#031B38]">
            <ShieldCheck size={18} />
            {service.badge}
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-[70px]">
            {service.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <article className="lg:col-span-8">
            <div className="rounded-[3rem] border border-slate-100 bg-[#F8FAFC] p-7 shadow-[0_20px_70px_rgba(3,27,56,0.08)] sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#082A55]">
                Commercial Service Guide
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#031B38]">
                {service.aboutTitle}
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                {service.about.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-4xl font-black text-[#031B38]">
                Safety Measures for Commercial Pest Control
              </h2>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {service.safety.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(3,27,56,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="text-sm font-black text-[#082A55]/40">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 text-2xl font-black text-[#031B38]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[3rem] bg-[#031B38] p-7 text-white sm:p-10">
              <h2 className="text-4xl font-black text-[#F4E940]">
                Common Pests Found in This Business Environment
              </h2>

              <div className="mt-7 space-y-5">
                {service.pests.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[2rem] bg-white/10 p-5"
                  >
                    <AlertTriangle className="mt-1 shrink-0 text-[#F4E940]" />

                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-8 text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[3rem] border border-slate-100 bg-white p-7 shadow-[0_20px_70px_rgba(3,27,56,0.08)] sm:p-10">
              <h2 className="text-4xl font-black text-[#031B38]">
                Why Choose The Prompt Pest Control?
              </h2>

              <div className="mt-7 space-y-4">
                {service.why.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl bg-[#F8FAFC] p-5"
                  >
                    <CheckCircle2 className="mt-1 shrink-0 text-[#082A55]" />
                    <p className="font-semibold leading-8 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="overflow-hidden rounded-[3rem] bg-[#031B38] p-5 text-white shadow-[0_25px_80px_rgba(3,27,56,0.25)]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full rounded-[2.2rem] object-cover"
                  loading="lazy"
                />

                <div className="p-3">
                  <h3 className="mt-4 text-3xl font-black">
                    Need Commercial Support?
                  </h3>

                  <p className="mt-3 leading-8 text-white/70">
                    Contact The Prompt Pest Control for professional commercial
                    pest control support across London.
                  </p>

                  <Link
                    to="/contact-us"
                    className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#F4E940] px-6 py-4 font-black text-[#031B38] transition hover:-translate-y-1"
                  >
                    Request Service
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="tel:07845873058"
                    className="mt-3 flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-[#031B38] transition hover:-translate-y-1"
                  >
                    <Phone size={18} />
                    07845 873058
                  </a>
                </div>
              </div>

              <div className="rounded-[3rem] border border-slate-100 bg-white p-6 shadow-xl">
                {sidebarPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-b-0"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4E940] text-[#031B38]">
                        <Icon size={22} />
                      </div>

                      <p className="font-black text-[#031B38]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}