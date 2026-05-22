export interface ServiceSection {
  heading: string;
  body?: string;
  items?: { title: string; description: string; image?: string }[];
  image?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  heroText: string;
  heroImage: string;
  icon: string;
  intro: string;
  sections: ServiceSection[];
  flags?: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'marine-software-services',
    title: 'Marine Software Services',
    heroText: 'Innovative maritime software engineered to optimize vessel operations and enhance fleet efficiency.',
    heroImage: '/services/ship-1.webp',
    icon: 'Monitor',
    intro: 'Green Ship Technologies delivers cutting-edge marine software solutions — from stability calculation tools to comprehensive vessel management systems — designed to meet the rigorous demands of the modern maritime industry.',
    sections: []
  },
  {
    slug: 'ship-design-engineering',
    title: 'Ship Design & Engineering',
    heroText: 'Innovative ship design and engineering solutions delivered by experienced naval architects and marine engineers.',
    heroImage: '/services/Service2.webp',
    icon: 'Ruler',
    intro: 'Green Ship Technologies specializes in Ship Design & Conversion services, catering to the evolving needs of the maritime industry. Our team of naval architects, marine engineers, and project managers deliver customized solutions using specialized software applications tailored for marine engineering and design tasks.',
    sections: [
      {
        heading: 'Core Design Services',
        items: [
          { title: 'Ship Design', description: 'Leveraging specialized marine engineering software for innovative, dependable design solutions from concept to class approval.' },
          { title: 'Ship Conversion', description: 'Meticulous planning, innovative solutions, and seamless execution to transform vessels for new operational requirements.' },
          { title: 'Ship Modification', description: 'Comprehensive solutions to enhance design, structure, systems, and capabilities of existing vessels.' },
        ]
      },
      {
        heading: 'Vessel Portfolio',
        body: 'We have designed and engineered a diverse range of vessel types:',
        items: [
          { title: 'Well Stimulation / Test Vessel', description: 'Used for oil/gas well intervention to improve hydrocarbon flow and production.', image: '/services/ship1.webp' },
          { title: 'Diesel Electric DP2 Vessel', description: 'Field support vessel with dynamic positioning and logistics capabilities for liquid and deck cargo.', image: '/services/ship2.webp' },
          { title: 'Offshore Construction Vessel', description: 'Advanced vessels with lifting, positioning, pile-driving capabilities, DP systems, cranes, and ROVs.', image: '/services/offshore.webp' },
          { title: 'AHTS / Hybrid Propulsion', description: 'Anchor handling tug supply vessels with hybrid propulsion combining multiple energy sources.', image: '/services/AHTS.webp' },
          { title: 'Crew Boat', description: 'Transports offshore personnel, equipment, and supplies to platforms, drilling rigs, and wind farms.', image: '/services/crew-boat.webp' },
          { title: 'Landing Crafts', description: 'Designed for excellent sea handling and maneuverability in rough sea conditions.', image: '/services/landing-crafts.webp' },
          { title: 'Multipurpose Vessel (MPV)', description: 'Carries diverse cargoes including wood, steel, building materials, paper, and bulk cargo.', image: '/services/ship3.webp' },
          { title: 'Small Passenger Ship', description: 'Carries smaller passenger numbers for coastal cruises, river cruises, and ferry services.', image: '/services/smallP.webp' },
        ]
      },
      {
        heading: 'Retrofit & Conversion Engineering',
        items: [
          { title: 'BWTS Installation Engineering', description: 'Ballast Water Treatment System integration for existing vessels, including 3D laser scanning, detailed design drawings, and installation assistance at shipyards.', image: '/services/ship-drydock-3.webp' },
          { title: 'Scrubber Installation Engineering', description: 'Exhaust gas cleaning systems (EGCS) design and installation support, reducing environmental impact with SOx scrubber manufacturer representation.', image: '/services/ship4.webp' },
        ]
      },
      {
        heading: 'Offshore Engineering',
        items: [
          { title: 'Mooring & Motion Analysis', description: 'Analysis for all vessel types per applicable codes with user-friendly operational reports.' },
          { title: 'Pipe Lay & Cable Lay Analysis', description: 'Static and dynamic analysis per project design requirements with comprehensive operational reports.' },
          { title: 'Structural Stability Analysis', description: 'FEM analysis of installations, operational parameter checks, and stability per design requirements.' },
          { title: 'Towage & Sea Fastening', description: 'Marine transportation analysis, towing plans, sea fastening designs, and warranty survey assistance.' },
        ]
      },
    ]
  },
  {
    slug: 'survey-certification',
    title: 'Survey & Certification',
    heroText: 'Comprehensive marine survey services tailored to meet the diverse needs of the maritime industry.',
    heroImage: '/services/Service3.webp',
    icon: 'ClipboardCheck',
    intro: 'At Green Ship Technologies, we specialize in delivering a comprehensive range of marine survey services. Our experienced surveyors ensure vessels meet all class, statutory, and flag state requirements, providing peace of mind for shipowners, operators, and financiers.',
    sections: [
      {
        heading: 'Marine Surveys',
        items: [
          { title: 'Pre-Purchase Survey', description: 'Thorough inspection of the vessel\'s hull, structure, machinery, equipment, and systems conducted before vessel acquisition.' },
          { title: 'Condition Survey', description: 'Evaluates overall vessel condition, identifying defects or damages affecting safety, performance, or commercial value.' },
          { title: 'On/Off Hire Survey', description: 'Specialized inspections documenting vessel condition at the commencement and completion of charter agreements.' },
          { title: 'Towage Survey', description: 'Assesses vessels intended for towing and related equipment for regulatory compliance and operational readiness.' },
          { title: 'Damage Survey', description: 'Conducted after accidents to assess damage extent, establish cause, and recommend appropriate repairs.' },
          { title: 'Bunker Survey', description: 'Verifies fuel quantity and quality onboard vessels to protect both buyer and seller interests.' },
          { title: 'Draft Survey', description: 'Determines vessel displacement by measuring draft changes before and after cargo operations.' },
          { title: 'Vessel Feasibility Survey', description: 'Comprehensive assessment evaluating a vessel\'s suitability for specific operations or conversions.' },
        ]
      },
      {
        heading: 'Class & Statutory Surveys',
        body: 'Essential inspections ensuring compliance with international maritime regulations including SOLAS, MARPOL, and STCW.',
        items: [
          { title: 'Comprehensive Assessments', description: 'Full structural and machinery surveys covering all aspects of vessel classification requirements.' },
          { title: 'Regular Monitoring', description: 'Ongoing survey programs throughout the vessel lifecycle to maintain class status and compliance.' },
          { title: 'Regulatory Compliance', description: 'Ensuring adherence to all applicable flag state requirements and Port State Control standards.' },
        ]
      },
      {
        heading: 'Flag State Inspection Services',
        body: 'Supporting vessel compliance across multiple flag state jurisdictions:',
        items: [
          { title: 'Regulatory Compliance Verification', description: 'Thorough review of all vessel certificates, safety equipment, and operational records.' },
          { title: 'Documentation Review', description: 'Comprehensive audit of certificates, logbooks, manuals, and compliance records.' },
          { title: 'Risk Assessment', description: 'Identifying potential compliance gaps with corrective recommendations before PSC inspections.' },
          { title: 'Consultation & Guidance', description: 'Expert advice on compliance strategies and best practices for flag state requirements.' },
        ]
      },
    ],
    flags: ['St. Kitts & Nevis', 'Belize', 'Comoros', 'Sierra Leone', 'Cook Island', 'Palau', 'Panama', 'Liberia']
  },
  {
    slug: 'renewable-energy-services',
    title: 'Renewable Energy Services',
    heroText: 'Driving sustainability in the maritime industry through innovative renewable energy solutions.',
    heroImage: '/services/Service4.webp',
    icon: 'Zap',
    intro: 'At Green Ship Technologies, we are dedicated to driving sustainability in the maritime industry. With a focus on integrating renewable energy solutions into ship operations and offshore infrastructure, we empower shipowners and operators to embrace environmentally responsible practices.',
    sections: [
      {
        heading: 'Floating Solar System Design',
        body: 'Photovoltaic systems installed on water bodies, utilizing unused space, reducing evaporation, and minimizing land conflicts. Our designs consider floatation materials, anchoring systems, durability against environmental factors, and panel orientation optimization.',
        items: [
          { title: 'Site Assessment', description: 'Water depth assessment, quality evaluation, and ecosystem impact analysis for optimal system placement.', image: '/services/r1-1.webp' },
          { title: 'System Design', description: 'Custom floating solar system design accounting for waves, wind, corrosion, and marine environmental factors.', image: '/services/r2-1.webp' },
        ]
      },
      {
        heading: 'Offshore Engineering',
        body: 'Design, construction, installation, and maintenance of renewable offshore infrastructure including wind farms and tidal installations. Our solutions address harsh marine conditions, saltwater corrosion, and variable seabed conditions.',
        items: [
          { title: 'Offshore Structure Design', description: 'Robust structural designs for offshore renewable energy installations in challenging marine environments.' },
          { title: 'Installation Engineering', description: 'Safe and efficient installation planning and supervision for offshore renewable energy projects.' },
          { title: 'Operations & Maintenance', description: 'Ongoing support ensuring optimal performance and longevity of offshore energy infrastructure.' },
        ]
      },
      {
        heading: 'Wind Farm Engineering Support',
        body: 'Comprehensive wind farm engineering from site selection through commissioning.',
        items: [
          { title: 'Site Assessment & Selection', description: 'Wind resource evaluation and site suitability analysis for offshore wind farm development.', image: '/services/r3-1.webp' },
          { title: 'Turbine & Layout Optimization', description: 'Turbine selection, layout optimization, and foundation design for maximum energy yield.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=300&auto=format&fit=crop&q=80' },
          { title: 'Electrical System Design', description: 'Inter-array cabling, substation design, and grid connection engineering.', image: '/services/solar.jpeg' },
          { title: 'Monitoring & Maintenance', description: 'Long-term performance monitoring and preventive maintenance planning for wind farms.', image: '/services/Service4.webp' },
        ]
      },
    ]
  },
  {
    slug: 'ship-broking-chartering',
    title: 'Ship Broking & Chartering',
    heroText: 'Facilitating vessel sales, purchases, and chartering arrangements across global maritime markets.',
    heroImage: '/services/ship-broking.png',
    icon: 'Handshake',
    intro: 'At Green Ship Technologies, we specialize in facilitating the sale and purchase of a diverse range of vessels worldwide. Our team of experts leverages extensive global networks and tailored brokerage expertise to deliver the best outcomes for our clients.',
    sections: [
      {
        heading: 'Our Brokerage Services',
        items: [
          { title: 'Vessel Sales', description: 'Whether you are looking to sell a single vessel or an entire fleet, we work tirelessly to find the right buyer and negotiate the best possible terms on your behalf.', image: '/services/V-sales.webp' },
          { title: 'Vessel Purchases', description: 'Leveraging our industry connections to match clients with vessels meeting their specific requirements, technical standards, and budget.', image: '/services/Vessel-purchase.webp' },
          { title: 'Market Analysis & Valuation', description: 'Comprehensive market analysis and valuation services to help you make informed decisions and maximize the value of your maritime assets.', image: '/services/Market.webp' },
        ]
      },
      {
        heading: 'Chartering Services',
        items: [
          { title: 'Voyage Chartering', description: 'Single voyage charter arrangements for cargo transportation on specific trade routes.' },
          { title: 'Time Chartering', description: 'Fixed-period charter agreements giving charterers full operational control of the vessel.' },
          { title: 'Bareboat Chartering', description: 'Long-term charter arrangements where the charterer assumes full responsibility for the vessel.' },
          { title: 'Post-Fixture Management', description: 'Ongoing support and dispute resolution throughout the charter period.' },
        ]
      },
    ]
  },
  {
    slug: 'flag-registration-services',
    title: 'Flag Registration Services',
    heroText: 'Streamlining vessel registration under leading open registries worldwide.',
    heroImage: '/services/Service6.webp',
    icon: 'Flag',
    intro: 'Green Ship Technologies provides comprehensive flag registration services to help shipowners and operators register vessels under their chosen flag, streamlining the process while ensuring full compliance with flag state requirements.',
    sections: [
      {
        heading: 'Our Registration Services',
        items: [
          { title: 'Flag Selection Assistance', description: 'Expert guidance on selecting suitable flags based on regulatory requirements, operational preferences, and commercial considerations.' },
          { title: 'Regulatory Guidance', description: 'Expert advice on regulatory requirements, procedures, and best practices related to flag registration.' },
          { title: 'Registration Process Management', description: 'End-to-end management of the registration process, handling all paperwork, documentation, and communications with flag state authorities.' },
          { title: 'Document Preparation', description: 'Preparation of application forms, declarations, affidavits, and all supporting documents with meticulous attention to detail.' },
          { title: 'Compliance Verification', description: 'Comprehensive review of vessel documentation, certificates, and records to verify compliance with flag state requirements.' },
          { title: 'Communication & Coordination', description: 'Acting as liaison between clients and flag authorities, addressing queries and providing status updates throughout the registration process.' },
        ]
      },
    ],
    flags: ['Panama', 'Liberia', 'Palau', 'St. Kitts & Nevis', 'Comoros', 'Cook Islands', 'Belize', 'Sierra Leone', 'Tanzania', 'St. Vincent & the Grenadines']
  },
  {
    slug: 'non-destructive-testing-services',
    title: 'NDT & Manpower Services',
    heroText: 'Trusted NDT solutions and skilled maritime manpower for structural integrity and operational excellence.',
    heroImage: '/services/Service7.webp',
    icon: 'Users',
    intro: 'Green Ship Technologies is your trusted partner in Non-Destructive Testing (NDT) solutions and manpower services for the maritime industry. We ensure the structural integrity, safety, and efficiency of marine assets through comprehensive NDT methods and highly skilled personnel.',
    sections: [
      {
        heading: 'NDT Methods',
        items: [
          { title: 'Ultrasonic Testing (UT)', description: 'Utilizes high-frequency sound waves to detect internal flaws, measure thickness, and characterize materials.', image: '/services/Ultrasonic-Testing-UT.webp' },
          { title: 'Magnetic Particle Testing (MT)', description: 'Detects surface and near-surface flaws in ferromagnetic materials by applying magnetic fields and observing particle patterns.', image: '/services/Magnetic-Particle-Testing.webp' },
          { title: 'Eddy Current Testing (ET)', description: 'Uses electromagnetic induction to detect surface and subsurface defects and measure material conductivity.', image: '/services/Eddy.webp' },
          { title: 'Liquid Penetrant Testing (PT)', description: 'Identifies surface-breaking defects in non-porous materials through penetrant fluids and developer chemicals.', image: '/services/Liquid-Penetrant-Testing.webp' },
          { title: 'Visual Inspection', description: 'Direct visual examination of components and structures for surface defects, corrosion, and abnormalities.', image: '/services/Visual1.webp' },
        ]
      },
      {
        heading: 'Rope Access Services',
        body: 'Our highly skilled Rope Access Technicians meet the unique challenges of working at height in maritime environments.',
        items: [
          { title: 'Inspections & Surveys', description: 'Thorough inspections of maritime structures including ship hulls, rigging, and offshore platforms using advanced techniques.', image: '/services/rope1.webp' },
          { title: 'Maintenance & Repair', description: 'Routine maintenance to emergency repairs in challenging maritime environments — painting, welding, structural repairs.', image: '/services/maintainance.webp' },
          { title: 'Rescue & Emergency Response', description: 'Trained in rescue and emergency response techniques to ensure the safety of all personnel working at height.', image: '/services/Rescue.webp' },
          { title: 'Installation & Rigging', description: 'Safe installation and rigging of equipment at height, ensuring secure and properly aligned mounting for optimal performance.', image: '/services/installation.webp' },
        ]
      },
      {
        heading: 'Manpower Services',
        body: 'Comprehensive maritime manpower solutions with a deep understanding of maritime operations worldwide.',
        items: [
          { title: 'Skilled Personnel Provisioning', description: 'Providing deckhands, engineers, navigators, marine technicians, and more — meticulously selected to meet the highest competency standards.', image: '/services/MP1.webp' },
          { title: 'Specialized Expertise', description: 'Sourcing personnel with specialized expertise to support vessel repairs, maintenance, or new construction projects globally.', image: '/services/MP2.webp' },
          { title: 'Temporary Crewing Solutions', description: 'Flexible temporary crew members ready to join at short notice, ensuring continuity of operations without disruptions.', image: '/services/smallP.webp' },
          { title: 'Global Reach, Local Support', description: 'Deploying personnel onshore or offshore wherever and whenever needed, with local expertise in key maritime hubs.', image: '/vessel-top-view.jpg' },
        ]
      },
    ]
  },
];
