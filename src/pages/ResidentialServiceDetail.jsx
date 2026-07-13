import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Search,
  Home,
  SprayCan,
  LockKeyhole,
} from "lucide-react";

const servicesData = {
  "rat-mice-control": {
    title: "Professional Rat & Mice Control Services in London",
    badge: "Rat & Mice Control",
    image: "/images/service-rat-mice-cutout.webp",
    intro:
      "Rats and mice are common pests in London homes and businesses. They can squeeze through tiny gaps, contaminate food areas and cause property damage if the problem is not handled quickly.",
    aboutTitle: "About Rat & Mice",
    about: [
      "Rats and mice are agile rodents that often enter properties through gaps around pipework, damaged vents, drains, wall openings, loft spaces and external holes.",
      "The Prompt Pest Control provides professional rat and mice control in London with inspection, targeted control and prevention advice.",
    ],
    signs: [
      { title: "Droppings", text: "Small dark droppings around kitchens, cupboards, lofts or skirting boards." },
      { title: "Gnaw Marks", text: "Chewed packaging, furniture, insulation or electrical wires." },
      { title: "Noises", text: "Scratching or scurrying sounds at night from walls, ceilings or roof spaces." },
      { title: "Nesting Materials", text: "Shredded paper, fabrics or insulation in hidden corners." },
      { title: "Foul Odour", text: "A strong unpleasant smell in hidden areas may suggest rodent activity." },
    ],
    threats: [
      { title: "Contamination", text: "Rodents can contaminate food areas and surfaces with droppings and urine." },
      { title: "Structural Damage", text: "Their gnawing can damage insulation, furniture and electrical wiring." },
      { title: "Health Risks", text: "Rodents may carry bacteria, parasites and pathogens." },
    ],
    treatment: [
      { title: "Inspection", text: "We locate activity, nesting areas, food sources and possible entry points." },
      { title: "Exclusion Advice", text: "We identify gaps, cracks, vents and openings that may need proofing." },
      { title: "Targeted Control", text: "A suitable control plan is applied based on the property and activity level." },
      { title: "Prevention", text: "We advise on cleaning, storage, waste control and proofing." },
    ],
    getRid: [
      "Identify rodent entry points around the property.",
      "Remove food sources and keep kitchen areas clean.",
      "Seal gaps around pipes, doors, walls and external openings.",
      "Use professional rodent control for persistent activity.",
      "Maintain cleaning, storage and waste management routines.",
    ],
  },

  "bed-bug-control": {
    title: "Professional Bed Bug Control Services in London",
    badge: "Bed Bug Treatment",
    image: "/images/service-bedbug-cutout.webp",
    intro:
      "Bed bugs can spread quickly through bedrooms, mattresses, bed frames and furniture. Professional treatment is important because bed bugs hide in very small cracks and can return if affected areas are missed.",
    aboutTitle: "About Bed Bugs",
    about: [
      "Bed bugs are small insects that feed on blood and usually hide close to sleeping areas. They are commonly found in mattress seams, bed frames, headboards, sofas, furniture joints and wall cracks.",
      "The Prompt Pest Control provides professional bed bug control in London with careful inspection, targeted treatment and practical preparation advice for residential properties.",
    ],
    signs: [
      { title: "Bite Marks", text: "Itchy bites often appear after sleeping, commonly on exposed skin." },
      { title: "Blood Spots", text: "Small blood marks may appear on sheets, pillowcases or mattresses." },
      { title: "Dark Stains", text: "Black or brown marks can appear around mattress seams and bed frames." },
      { title: "Shed Skins", text: "Bed bugs may leave shed skins in cracks, joints and hidden corners." },
      { title: "Live Insects", text: "Small brown insects may be seen around beds, furniture or soft furnishings." },
    ],
    threats: [
      { title: "Sleep Disruption", text: "Bed bug activity can cause stress, discomfort and poor sleep." },
      { title: "Fast Spread", text: "They can move between rooms through furniture, luggage and clothing." },
      { title: "Hard To Remove", text: "DIY sprays often miss hidden eggs and harbourage areas." },
    ],
    treatment: [
      { title: "Room Inspection", text: "We inspect mattresses, bed frames, furniture, cracks and surrounding areas." },
      { title: "Preparation Advice", text: "We guide you on what should be prepared before treatment." },
      { title: "Targeted Treatment", text: "Treatment focuses on harbourage areas where bed bugs hide." },
      { title: "Aftercare Guidance", text: "We explain steps to reduce the chance of activity returning." },
    ],
    getRid: [
      "Avoid moving infested furniture between rooms.",
      "Wash and dry affected fabrics where suitable.",
      "Reduce clutter around beds and sleeping areas.",
      "Do not rely only on shop-bought sprays for heavy activity.",
      "Book professional bed bug treatment for a structured approach.",
    ],
  },

  "cockroach-control": {
    title: "Professional Cockroach Control Services in London",
    badge: "Cockroach Control",
    image: "/images/service-cockroach-cutout.webp",
    intro:
      "Cockroaches are a serious hygiene concern for homes, kitchens, food businesses and commercial premises. They hide in warm, dark areas and can multiply quickly if the source is not treated.",
    aboutTitle: "About Cockroaches",
    about: [
      "Cockroaches are commonly found around kitchens, bathrooms, drains, appliances, food preparation areas and service voids. They are mostly active at night and can be difficult to control without professional inspection.",
      "The Prompt Pest Control provides cockroach control services in London with targeted treatment for harbourage areas, hygiene advice and prevention support.",
    ],
    signs: [
      { title: "Night Sightings", text: "Seeing cockroaches at night around kitchens, floors or bathrooms." },
      { title: "Droppings", text: "Small black droppings near cupboards, appliances, pipes or food areas." },
      { title: "Egg Cases", text: "Brown egg cases may be found in hidden cracks or warm areas." },
      { title: "Odour", text: "A strong musty smell can appear where cockroach activity is heavy." },
      { title: "Shed Skins", text: "Cockroaches shed skins as they grow, often near harbourage points." },
    ],
    threats: [
      { title: "Food Contamination", text: "Cockroaches can contaminate surfaces, food and preparation areas." },
      { title: "Business Risk", text: "For food businesses, cockroach activity can damage reputation and hygiene standards." },
      { title: "Rapid Breeding", text: "Cockroach populations can grow quickly if hidden areas are not treated." },
    ],
    treatment: [
      { title: "Harbourage Inspection", text: "We inspect cracks, appliances, drains, cupboards and warm hidden areas." },
      { title: "Activity Mapping", text: "We identify where cockroaches are feeding, hiding and travelling." },
      { title: "Targeted Treatment", text: "Treatment is applied to key areas based on the activity pattern." },
      { title: "Hygiene Advice", text: "We advise on cleaning, food storage and reducing water access." },
    ],
    getRid: [
      "Keep food sealed and surfaces clean.",
      "Remove grease and crumbs from kitchens and appliances.",
      "Fix leaks and reduce access to water.",
      "Seal cracks around pipes, units and service voids.",
      "Use professional cockroach treatment for persistent infestations.",
    ],
  },

  "ant-control": {
    title: "Professional Ant Control Services in London",
    badge: "Ant Control",
    image: "/images/service-ant-cutout.webp",
    intro:
      "Ants can enter homes and businesses through small gaps around doors, walls, floors and windows. Once they find food, they can create visible trails and return repeatedly.",
    aboutTitle: "About Ants",
    about: [
      "Ants are common pests in London properties, especially around kitchens, food storage areas, gardens, patios and wall gaps. They usually travel in trails and may enter buildings while searching for food.",
      "The Prompt Pest Control provides ant control services in London by identifying activity routes, treating affected areas and advising on prevention steps.",
    ],
    signs: [
      { title: "Ant Trails", text: "Lines of ants moving around floors, kitchens, doors or windows." },
      { title: "Food Activity", text: "Ants gathering near sugar, crumbs, bins or food storage areas." },
      { title: "Entry Points", text: "Activity around cracks, floor edges, wall gaps or external openings." },
      { title: "Outdoor Nests", text: "Ant nests may be visible near paving, soil, patios or garden areas." },
      { title: "Repeated Return", text: "Ants returning to the same place even after cleaning." },
    ],
    threats: [
      { title: "Food Contamination", text: "Ants can contaminate food preparation and storage areas." },
      { title: "Ongoing Trails", text: "Once a route is established, ants may keep returning." },
      { title: "Difficult Nest Access", text: "Nests may be hidden under floors, walls or external surfaces." },
    ],
    treatment: [
      { title: "Trail Inspection", text: "We identify where ants are travelling and entering the property." },
      { title: "Nest Location", text: "We check likely nesting areas indoors and outdoors." },
      { title: "Targeted Treatment", text: "Treatment is focused around trails, entry points and activity zones." },
      { title: "Prevention Advice", text: "We advise on food storage, cleaning and sealing access points." },
    ],
    getRid: [
      "Clean food spills and crumbs quickly.",
      "Store sugary foods in sealed containers.",
      "Seal small gaps around doors, floors and windows.",
      "Avoid disturbing trails before inspection where possible.",
      "Use professional ant treatment if activity continues.",
    ],
  },

  "flea-control": {
    title: "Professional Flea Control Services in London",
    badge: "Flea Treatment",
    image: "/images/service-flea-cutout.webp",
    intro:
      "Fleas can affect carpets, rugs, pet resting areas, sofas and bedrooms. They can be difficult to remove because eggs and larvae may remain hidden in fabrics and floor areas.",
    aboutTitle: "About Fleas",
    about: [
      "Fleas are small jumping insects commonly linked with pets, carpets, bedding and soft furnishings. They can bite humans and pets and may spread through rooms if not treated properly.",
      "The Prompt Pest Control provides flea control services in London with inspection, treatment of affected areas and aftercare advice to support better results.",
    ],
    signs: [
      { title: "Bites", text: "Small itchy bites often appear around ankles and lower legs." },
      { title: "Jumping Insects", text: "Tiny insects may be seen jumping on carpets, rugs or furniture." },
      { title: "Pet Scratching", text: "Pets may scratch more than usual if fleas are present." },
      { title: "Activity In Fabrics", text: "Fleas can hide in carpets, sofas, bedding and pet resting areas." },
      { title: "Repeated Bites", text: "Bites may continue if eggs and larvae remain untreated." },
    ],
    threats: [
      { title: "Discomfort", text: "Flea bites can cause irritation and itching." },
      { title: "Fast Spread", text: "Fleas can spread across carpets, furniture and multiple rooms." },
      { title: "Hidden Life Cycle", text: "Eggs and larvae can remain hidden and cause activity to return." },
    ],
    treatment: [
      { title: "Affected Area Check", text: "We check carpets, rugs, sofas, pet areas and bedrooms." },
      { title: "Preparation Guidance", text: "We explain cleaning and vacuuming steps before and after treatment." },
      { title: "Targeted Treatment", text: "Treatment is focused on floor areas, fabrics and hiding places." },
      { title: "Aftercare Advice", text: "We advise on ongoing vacuuming and pet-related prevention." },
    ],
    getRid: [
      "Vacuum carpets, rugs and furniture thoroughly.",
      "Wash pet bedding and affected fabrics where suitable.",
      "Treat pets through a vet-approved flea control routine.",
      "Avoid skipping hidden areas under furniture.",
      "Book professional flea treatment for persistent activity.",
    ],
  },

  "wasp-nest-control": {
    title: "Professional Wasp Nest Control Services in London",
    badge: "Wasp Nest Control",
    image: "/images/service-wasp-cutout.webp",
    intro:
      "Wasps can become aggressive when their nest is disturbed. Nests are often found around lofts, roof edges, wall cavities, sheds, gardens and external building gaps.",
    aboutTitle: "About Wasps",
    about: [
      "Wasps are common during warmer months and may build nests in sheltered areas around homes and commercial properties. Activity usually increases around one entry point where wasps are travelling in and out.",
      "The Prompt Pest Control provides wasp nest control services in London with careful assessment and suitable treatment for the nest location.",
    ],
    signs: [
      { title: "Heavy Activity", text: "Many wasps repeatedly flying around the same area." },
      { title: "Entry Point", text: "Wasps entering roof gaps, wall holes, vents, sheds or loft spaces." },
      { title: "Visible Nest", text: "A nest may be seen in a loft, shed, tree, roofline or garden area." },
      { title: "Indoor Wasps", text: "Wasps appearing inside rooms may suggest a nearby nest." },
      { title: "Aggressive Behaviour", text: "Wasps may become defensive when people go near the nest." },
    ],
    threats: [
      { title: "Sting Risk", text: "Wasps can sting, especially if the nest is disturbed." },
      { title: "Nest Growth", text: "Nests can grow larger during active months." },
      { title: "Property Access Issues", text: "Activity near doors, gardens or work areas can make spaces difficult to use." },
    ],
    treatment: [
      { title: "Nest Location", text: "We identify the nest or main entry point." },
      { title: "Risk Assessment", text: "We assess access, height, activity level and surrounding areas." },
      { title: "Targeted Treatment", text: "A suitable treatment is applied based on the nest location." },
      { title: "Safety Advice", text: "We advise customers not to disturb the nest during active periods." },
    ],
    getRid: [
      "Do not block the nest entrance while wasps are active.",
      "Avoid spraying or hitting the nest yourself.",
      "Keep children and pets away from active areas.",
      "Identify where wasps are entering and leaving.",
      "Call a professional wasp control service for safe treatment.",
    ],
  },

  "moth-control": {
    title: "Professional Moth Control Services in London",
    badge: "Moth Treatment",
    image: "/images/service-moth-cutout.webp",
    intro:
      "Moths can damage carpets, clothes, curtains, stored fabrics and soft furnishings. The larvae usually cause the damage and may hide in quiet, dark areas.",
    aboutTitle: "About Moths",
    about: [
      "Fabric moths are often found in wardrobes, carpets, under furniture, storage areas and rooms with natural fibres. They can damage wool, silk, carpets and clothing if activity continues.",
      "The Prompt Pest Control provides moth control services in London with inspection, treatment and advice on cleaning and storage improvements.",
    ],
    signs: [
      { title: "Fabric Damage", text: "Holes or thinning patches in clothes, carpets or fabrics." },
      { title: "Flying Moths", text: "Small moths may be seen around rooms, wardrobes or carpets." },
      { title: "Larvae", text: "Small larvae may be found near damaged fabrics or carpet edges." },
      { title: "Webbing", text: "Silky webbing may appear in hidden fabric areas." },
      { title: "Activity Under Furniture", text: "Damage often appears in quiet areas under furniture or along edges." },
    ],
    threats: [
      { title: "Fabric Damage", text: "Moth larvae can damage clothes, carpets and soft furnishings." },
      { title: "Hidden Spread", text: "Activity can remain hidden in wardrobes and under furniture." },
      { title: "Recurring Problem", text: "If larvae are missed, moth activity may return." },
    ],
    treatment: [
      { title: "Fabric Inspection", text: "We inspect carpets, wardrobes, fabrics and hidden edges." },
      { title: "Activity Areas", text: "We identify where larvae and damage are present." },
      { title: "Targeted Treatment", text: "Treatment is focused on affected carpets, furniture and storage areas." },
      { title: "Storage Advice", text: "We advise on cleaning, vacuuming and fabric storage." },
    ],
    getRid: [
      "Vacuum carpet edges, under furniture and wardrobes.",
      "Wash or dry clean affected clothes where suitable.",
      "Store natural fabrics in sealed bags or containers.",
      "Reduce clutter in dark storage areas.",
      "Book professional moth treatment if damage continues.",
    ],
  },

  "carpet-beetle-control": {
    title: "Professional Carpet Beetle Treatment Services in London",
    badge: "Carpet Beetle Treatment",
    image: "/images/service-carpet-beetle-cutout.webp",
    intro:
      "Carpet beetles can damage carpets, clothing, curtains, furniture and natural fabrics. Their larvae often hide in quiet areas and feed on fibres.",
    aboutTitle: "About Carpet Beetles",
    about: [
      "Carpet beetles are small insects whose larvae can damage carpets, fabrics, upholstery and stored clothing. They are often found near skirting boards, under furniture, wardrobes and window areas.",
      "The Prompt Pest Control provides carpet beetle treatment in London with inspection, targeted treatment and advice to reduce future activity.",
    ],
    signs: [
      { title: "Fabric Damage", text: "Damage to carpets, clothes, curtains or soft furnishings." },
      { title: "Larvae", text: "Small hairy larvae may be found around carpet edges or hidden areas." },
      { title: "Adult Beetles", text: "Small beetles may appear near windows or light sources." },
      { title: "Shed Skins", text: "Larval skins may be found near affected fabrics." },
      { title: "Hidden Activity", text: "Activity often appears under furniture, along edges or in wardrobes." },
    ],
    threats: [
      { title: "Carpet Damage", text: "Larvae can feed on carpets and natural fibres." },
      { title: "Clothing Damage", text: "Stored fabrics and clothing may be damaged if activity continues." },
      { title: "Hard To Spot", text: "Larvae can remain hidden until damage becomes visible." },
    ],
    treatment: [
      { title: "Damage Inspection", text: "We inspect carpets, fabrics, furniture edges and wardrobes." },
      { title: "Larvae Areas", text: "We identify where larvae are active or likely hiding." },
      { title: "Targeted Treatment", text: "Treatment is focused around affected fabric and carpet areas." },
      { title: "Prevention Advice", text: "We advise on cleaning, storage and vacuuming routines." },
    ],
    getRid: [
      "Vacuum carpet edges and under furniture regularly.",
      "Check wardrobes and stored fabrics for larvae.",
      "Wash or clean affected items where suitable.",
      "Remove old lint, hair and debris from hidden areas.",
      "Use professional carpet beetle treatment for ongoing activity.",
    ],
  },

  "squirrel-control": {
    title: "Professional Squirrel Control Services in London",
    badge: "Squirrel Control",
    image: "/images/service-squirrel-cutout.webp",
    intro:
      "Squirrels can enter lofts and roof spaces, causing noise, damage and disruption. They may gnaw materials and create nesting areas inside properties.",
    aboutTitle: "About Squirrels",
    about: [
      "Squirrels often enter properties through roof gaps, damaged soffits, vents, loose tiles and access points around lofts. Once inside, they may damage insulation, timber and stored items.",
      "The Prompt Pest Control provides squirrel control support in London with property inspection, access point identification and prevention advice.",
    ],
    signs: [
      { title: "Loft Noises", text: "Running, scratching or movement sounds from roof spaces or ceilings." },
      { title: "Damaged Insulation", text: "Insulation may be disturbed, shredded or moved for nesting." },
      { title: "Gnaw Marks", text: "Chewed timber, cables, vents or stored items may indicate squirrel activity." },
      { title: "Roof Entry Points", text: "Gaps around soffits, tiles or vents may allow access." },
      { title: "Nesting Materials", text: "Leaves, insulation or debris may be found in loft spaces." },
    ],
    threats: [
      { title: "Property Damage", text: "Squirrels can damage insulation, timber and roof spaces." },
      { title: "Noise Disturbance", text: "Movement in lofts and ceilings can be disruptive." },
      { title: "Return Risk", text: "If entry points are not dealt with, squirrels may return." },
    ],
    treatment: [
      { title: "Loft Inspection", text: "We inspect loft and roof areas for activity and access points." },
      { title: "Entry Point Check", text: "We identify gaps, vents and roofline weaknesses." },
      { title: "Control Advice", text: "We recommend a suitable approach based on activity and access." },
      { title: "Proofing Guidance", text: "We advise on sealing points to reduce future access." },
    ],
    getRid: [
      "Do not seal entry points without checking activity first.",
      "Inspect lofts and roof spaces for nesting signs.",
      "Identify damaged vents, soffits or roof gaps.",
      "Remove access to food sources around the property.",
      "Use professional squirrel control support for safe handling.",
    ],
  },

  "bird-control": {
    title: "Professional Bird Control Services in London",
    badge: "Bird Control",
    image: "/images/service-bird-cutout.webp",
    intro:
      "Birds can cause mess, blocked gutters, noise and building damage around roofs, ledges, signs and commercial properties. Proper bird proofing helps protect affected areas.",
    aboutTitle: "About Bird Problems",
    about: [
      "Bird activity is common around roofs, ledges, balconies, shop signs, warehouses and commercial premises. Droppings, nesting materials and repeated roosting can affect hygiene and building appearance.",
      "The Prompt Pest Control provides bird control and proofing support in London with inspection and practical deterrent advice for residential and commercial properties.",
    ],
    signs: [
      { title: "Droppings", text: "Bird droppings around entrances, ledges, signs, roofs or walkways." },
      { title: "Nesting", text: "Nesting materials around gutters, roof spaces, ledges or solar panels." },
      { title: "Blocked Gutters", text: "Gutters and drainage areas may become blocked by nesting debris." },
      { title: "Repeated Roosting", text: "Birds returning to the same building area regularly." },
      { title: "Noise", text: "Bird noise around rooflines, courtyards or commercial buildings." },
    ],
    threats: [
      { title: "Hygiene Concerns", text: "Droppings can create hygiene issues around entrances and public areas." },
      { title: "Building Damage", text: "Nesting and droppings may damage gutters, ledges and surfaces." },
      { title: "Commercial Impact", text: "Bird activity can affect customer areas, shopfronts and business premises." },
    ],
    treatment: [
      { title: "Site Inspection", text: "We inspect the building to identify roosting and nesting areas." },
      { title: "Pressure Assessment", text: "We assess how birds are using the property." },
      { title: "Proofing Advice", text: "We advise on suitable deterrent or proofing options." },
      { title: "Prevention Plan", text: "We help reduce repeated activity around affected areas." },
    ],
    getRid: [
      "Identify where birds are roosting or nesting.",
      "Remove attractants and manage waste areas.",
      "Keep gutters and drainage areas clear.",
      "Use suitable proofing or deterrent options.",
      "Contact professional bird control support for building protection.",
    ],
  },






"bumble-bee-control": {
  title: "Professional Bumble Bee Guidance Services in London",
  badge: "Bumble Bee Guidance",
  image: "/images/service-bee-cutout.webp",
  intro:
    "Bumble bees are important pollinators and are protected in many situations. If activity is found around your property, professional guidance helps assess the situation safely and responsibly.",
  aboutTitle: "About Bumble Bee Activity",
  about: [
    "Bumble bees are commonly found in gardens, sheds, wall cavities, roof spaces and around flowering plants during the warmer months. Most colonies are seasonal and generally avoid people unless disturbed.",
    "The Prompt Pest Control provides professional bumble bee guidance in London, helping identify activity, assess potential risks and recommend the most appropriate course of action for residential and commercial properties.",
  ],
  signs: [
    {
      title: "Regular Bee Activity",
      text: "Frequent bumble bee movement around the same entrance or area.",
    },
    {
      title: "Nesting Sites",
      text: "Bee activity around sheds, lofts, wall cavities, compost areas or garden spaces.",
    },
    {
      title: "Buzzing Sounds",
      text: "A noticeable buzzing sound near walls, roofs or enclosed spaces.",
    },
    {
      title: "Worker Bees",
      text: "Large numbers of bees entering and leaving one location repeatedly.",
    },
    {
      title: "Garden Activity",
      text: "Increased bee presence around flowers, shrubs and landscaped areas.",
    },
  ],
  threats: [
    {
      title: "Sting Risk",
      text: "Although generally calm, bumble bees may sting if they feel threatened or their nest is disturbed.",
    },
    {
      title: "Nest Location",
      text: "Nests close to entrances, walkways or work areas may create safety concerns.",
    },
    {
      title: "Sensitive Individuals",
      text: "People with bee sting allergies should avoid disturbing active nesting areas.",
    },
  ],
  treatment: [
    {
      title: "Site Inspection",
      text: "We inspect the property to identify bee activity and locate the nesting area.",
    },
    {
      title: "Species Assessment",
      text: "We confirm whether the insects are bumble bees and assess the situation.",
    },
    {
      title: "Professional Guidance",
      text: "We provide advice on the safest and most suitable approach based on the location.",
    },
    {
      title: "Prevention Advice",
      text: "We recommend practical measures to reduce future nesting opportunities where appropriate.",
    },
  ],
  getRid: [
    "Avoid disturbing active bumble bee nests.",
    "Keep children and pets away from nesting areas.",
    "Do not block or seal nest entrances while bees are active.",
    "Seek professional guidance before taking any action.",
    "Arrange an inspection if bee activity is causing safety concerns around your property.",
  ],
},





};

const fallbackService = {
  title: "Professional Pest Control Services in London",
  badge: "Pest Control",
  image: "/images/pest-control-detail.webp",
  intro:
    "The Prompt Pest Control provides professional pest inspection, treatment and prevention support for residential properties across London.",
  aboutTitle: "About This Pest Problem",
  about: [
    "Pest problems can quickly affect comfort, hygiene and property safety when they are not handled correctly.",
    "Our team focuses on inspection, targeted treatment and prevention advice to help protect your London property.",
  ],
  signs: [
    {
      title: "Visible Activity",
      text: "Seeing pests around living areas, kitchens, bedrooms, lofts or hidden spaces.",
    },
    {
      title: "Damage",
      text: "Signs of damage to fabrics, food packaging, timber, furniture or property areas.",
    },
    {
      title: "Droppings or Marks",
      text: "Unusual marks, droppings, stains or signs around hidden spaces.",
    },
  ],
  threats: [
    {
      title: "Hygiene Issues",
      text: "Pests can create hygiene concerns around homes and food areas.",
    },
    {
      title: "Property Damage",
      text: "Some pests may damage fabrics, wiring, insulation or property materials.",
    },
    {
      title: "Ongoing Spread",
      text: "Pest problems can grow if the source is not identified and treated.",
    },
  ],
  treatment: [
    {
      title: "Inspection",
      text: "We check the property and identify where pest activity is coming from.",
    },
    {
      title: "Treatment Plan",
      text: "We recommend a suitable treatment approach for the pest issue.",
    },
    {
      title: "Targeted Treatment",
      text: "Treatment is focused on the affected areas.",
    },
    {
      title: "Prevention",
      text: "We provide guidance to help reduce future pest problems.",
    },
  ],
  getRid: [
    "Identify the affected areas.",
    "Reduce access to food, water and hiding places.",
    "Seal obvious gaps and entry points.",
    "Contact a professional pest control team for persistent problems.",
  ],
};

export default function ResidentialServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug] || fallbackService;

  return (
    <main>
      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#031B38] px-5 py-28 text-center text-white">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#031B38]/82" />
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
                Service Guide
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
                Signs of Infestation
              </h2>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {service.signs.map((item, index) => (
                  <div
                    key={item.title}
                    className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(3,27,56,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                Pest Threats
              </h2>

              <div className="mt-7 space-y-5">
                {service.threats.map((item) => (
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

            <div className="mt-12">
              <h2 className="text-4xl font-black text-[#031B38]">
                Treatment Process in London
              </h2>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                {service.treatment.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative overflow-hidden rounded-[2.5rem] bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="absolute right-6 top-4 text-7xl font-black text-[#082A55]/5">
                      0{index + 1}
                    </span>

                    <h3 className="text-2xl font-black text-[#031B38]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[3rem] border border-slate-100 bg-white p-7 shadow-[0_20px_70px_rgba(3,27,56,0.08)] sm:p-10">
              <h2 className="text-4xl font-black text-[#031B38]">
                How To Get Rid of This Pest Problem?
              </h2>

              <div className="mt-7 space-y-4">
                {service.getRid.map((item) => (
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
                />

                <div className="p-3">
                  <h3 className="mt-4 text-3xl font-black">
                    Need {service.badge}?
                  </h3>

                  <p className="mt-3 leading-8 text-white/70">
                    Contact The Prompt Pest Control for professional support
                    across London.
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
                {[
                  { icon: Search, text: "Detailed Inspection" },
                  { icon: SprayCan, text: "Targeted Treatment" },
                  { icon: LockKeyhole, text: "Prevention Advice" },
                  { icon: Home, text: "London Properties" },
                ].map((item) => {
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