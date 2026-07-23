export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  detail: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "marine-electrical",
    name: "Marine Electrical Installation & Repair",
    shortDescription:
      "Full electrical systems work aboard private and commercial vessels, from new installs to fault diagnosis.",
    detail:
      "New circuit installation, rewiring, panel upgrades and fault repair across AC and DC marine electrical systems. Work is carried out to marine wiring standards, with attention to corrosion-resistant terminations and load management appropriate to vessel type and duty cycle.",
    points: [
      "New build and refit wiring",
      "Distribution panel upgrades",
      "Shore power and inverter/charger systems",
      "Corrosion-resistant terminations",
    ],
  },
  {
    id: "fly-by-wire",
    name: "Fly-by-Wire System Installation",
    shortDescription:
      "Electronic throttle and steering control installation for vessels moving away from mechanical linkage.",
    detail:
      "Installation and commissioning of fly-by-wire propulsion control systems, replacing mechanical cable linkage with electronic actuation. Includes helm station wiring, engine interface configuration, and full system calibration ahead of sea trials — work suited to vessels being prepared for long-distance passage.",
    points: [
      "Helm and engine interface wiring",
      "System calibration and sea-trial support",
      "Compatible with major propulsion control platforms",
      "Suited to long-passage vessel preparation",
    ],
  },
  {
    id: "dc-fault-finding",
    name: "DC Electrical Systems Fault-Finding",
    shortDescription:
      "Diagnostic work on battery banks, charging systems and solar arrays, including intermittent faults.",
    detail:
      "Systematic fault-finding across DC systems including battery banks, charge controllers, alternators and solar arrays. Particular focus on intermittent faults that surface underway, using proper load-testing and circuit tracing rather than component swapping.",
    points: [
      "Battery bank and charging system diagnosis",
      "Solar array fault-finding and commissioning",
      "Intermittent and underway-only fault tracing",
      "Load testing and circuit verification",
    ],
  },
  {
    id: "cctv",
    name: "CCTV System Installation",
    shortDescription:
      "Onboard camera systems for security, mooring visibility and machinery-space monitoring.",
    detail:
      "Design and installation of CCTV systems aboard vessels, covering security monitoring, blind-spot coverage for mooring and manoeuvring, and engine room observation. Cabling routed and protected for the marine environment, with remote viewing configured where required.",
    points: [
      "Security and perimeter camera coverage",
      "Engine room and machinery space monitoring",
      "Marine-rated cabling and housings",
      "Remote viewing configuration",
    ],
  },
  {
    id: "engine-room-inspection",
    name: "Engine Room & Machinery Health Inspections",
    shortDescription:
      "Pre-purchase and routine inspections of engine rooms and machinery spaces to catch problems early.",
    detail:
      "Thorough inspection of engine rooms and machinery spaces covering electrical installation, mechanical condition, corrosion, and general seaworthiness of systems. Used for pre-purchase surveys, insurance requirements, and routine health checks ahead of a season or passage.",
    points: [
      "Pre-purchase and pre-passage inspection",
      "Electrical and mechanical condition reporting",
      "Corrosion and installation-standard checks",
      "Written findings with recommended actions",
    ],
  },
  {
    id: "anchor-capstan",
    name: "Anchor & Capstan Systems",
    shortDescription:
      "Fault-finding and repair of windlass, anchor and capstan systems on private and commercial vessels.",
    detail:
      "Diagnosis and repair of anchor windlass and capstan systems, from electrical control faults to motor and gearing issues. Work carried out on both private yachts and working commercial vessels, where reliable ground tackle is not optional.",
    points: [
      "Windlass motor and control fault-finding",
      "Capstan mechanical repair",
      "Control station and solenoid diagnostics",
      "Commercial vessel duty-cycle repairs",
    ],
  },
  {
    id: "mechanical-electrical",
    name: "General Marine Mechanical & Electrical Engineering",
    shortDescription:
      "The broader scope of engineering work that doesn't fit a single category — the day-to-day of keeping vessels running.",
    detail:
      "General marine engineering covering the work that falls outside a single defined service — mechanical repair, system integration, equipment fitting and the practical problem-solving that comes with keeping vessels, private and commercial, in reliable operation.",
    points: [
      "System integration across trades",
      "Equipment fitting and commissioning",
      "Ongoing maintenance contracts",
      "Callout diagnostics",
    ],
  },
];

export type Project = {
  id: string;
  vessel: string;
  clientType: "Private" | "Commercial";
  location: string;
  coordinates: string;
  title: string;
  summary: string;
  scope: string[];
  partners: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "flybywire-mayflower",
    vessel: "Private Motor Yacht",
    clientType: "Private",
    location: "Mayflower Marina, Plymouth",
    coordinates: "50.371°N, 4.173°W",
    title: "Fly-by-Wire Installation — Bound for Australia",
    summary:
      "Full fly-by-wire propulsion control installation on a luxury yacht prepared for an international passage to Australia. The client was referred through the Volvo Penta service centre network.",
    scope: [
      "Fly-by-wire helm and engine interface installation",
      "Full system calibration ahead of departure",
      "Coordination with Volvo Penta service network",
      "Pre-passage systems verification",
    ],
    partners: ["Lozynski Carpentry and Marine Services", "Volvo Penta service centre network"],
    image: "/images/flybywire-mayflower.jpg",
  },
  {
    id: "dc-solar-millbrook",
    vessel: "Private Sailing Yacht",
    clientType: "Private",
    location: "Millbrook / Southdown Marina",
    coordinates: "50.361°N, 4.211°W",
    title: "DC System & Solar Fault-Finding",
    summary:
      "Diagnosis and repair of an intermittent DC electrical fault affecting the battery bank and solar charging array, traced through the full circuit rather than replaced piece by piece.",
    scope: [
      "Battery bank load testing and diagnosis",
      "Solar array fault-finding and recommissioning",
      "Charge controller inspection",
      "Circuit tracing and repair",
    ],
    partners: [],
    image: "/images/dc-solar-millbrook.jpg",
  },
  {
    id: "anchor-capstan-looe",
    vessel: "MFV Blanko",
    clientType: "Commercial",
    location: "Looe Harbour",
    coordinates: "50.351°N, 4.454°W",
    title: "Anchor & Capstan Fault-Finding",
    summary:
      "Fault diagnosis and repair on the anchor and capstan system of a working fishing vessel, where reliable ground tackle is essential to daily operation.",
    scope: [
      "Windlass control fault diagnosis",
      "Capstan mechanical repair",
      "Solenoid and control station testing",
      "Return to full working order",
    ],
    partners: [],
    image: "/images/anchor-capstan-looe.jpg",
  },
  {
    id: "cctv-blackrose",
    vessel: '"Black Rose"',
    clientType: "Private",
    location: "Sutton Harbour Marina, Plymouth",
    coordinates: "50.366°N, 4.132°W",
    title: "Full CCTV Installation",
    summary:
      "Complete onboard CCTV installation covering security, mooring visibility and machinery space monitoring, delivered alongside the vessel's carpentry and joinery work.",
    scope: [
      "Full camera system design and install",
      "Marine-rated cabling and housings",
      "Engine room monitoring coverage",
      "Remote viewing configuration",
    ],
    partners: ["Lozynski Carpentry and Marine Services"],
    image: "/images/cctv-blackrose-sutton.jpg",
  },
  {
    id: "restoration-blackdog",
    vessel: "Private Motor Vessel",
    clientType: "Private",
    location: "South West marina network",
    coordinates: "50.36°N, 4.14°W",
    title: "Full Vessel Restoration to Operational Status",
    summary:
      "A complete restoration bringing a vessel back to full operational status, delivered as part of a multi-trade team covering hull, engineering and mechanical work.",
    scope: [
      "Full electrical system rebuild",
      "Mechanical restoration and recommissioning",
      "Coordination across a multi-trade restoration team",
      "Final systems testing before return to service",
    ],
    partners: ["Black Dog Marine", "C Toms & Son", "Watermota"],
    image: "/images/restoration-blackdog.jpg",
  },
  {
    id: "seatrials-swiftsure",
    vessel: '"Swift Sure"',
    clientType: "Commercial",
    location: "Polruan",
    coordinates: "50.327°N, 4.622°W",
    title: "Sea Trials Support",
    summary:
      "Electrical and mechanical support through sea trials, verifying systems performed correctly under way ahead of the vessel's return to service.",
    scope: [
      "Pre-trial systems check",
      "Underway fault monitoring",
      "Post-trial adjustment and sign-off",
      "Coordination with restoration team",
    ],
    partners: ["Black Dog Marine", "C Toms & Son"],
    image: "/images/seatrials-swiftsure-polruan.jpg",
  },
];

export type Partner = {
  name: string;
  description: string;
};

export const partners: Partner[] = [
  {
    name: "Volvo Penta Service Centre Network",
    description:
      "Referral relationship bringing in international and commercial clients through the wider Volvo Penta service network.",
  },
  {
    name: "Lozynski Carpentry and Marine Services",
    description: "Joinery and carpentry partner for combined refit and installation work.",
  },
  {
    name: "Black Dog Marine",
    description: "Restoration and engineering partner for multi-trade vessel projects.",
  },
  {
    name: "C Toms & Son",
    description: "Long-established marine engineering partner for restoration and sea trial work.",
  },
  {
    name: "Watermota",
    description: "Marine engine specialists, partnered on restoration and recommissioning work.",
  },
];

export const serviceArea = [
  "Torpoint",
  "Plymouth",
  "Millbrook",
  "Southdown Marina",
  "Looe",
  "Polruan",
  "Fowey",
  "Brixham",
];

export const contactDetails = {
  phone: "+44 7873 944007",
  phoneDisplay: "07873 944 007",
  email: "info@gdemservices.com",
  domain: "gdemservices.com",
};
