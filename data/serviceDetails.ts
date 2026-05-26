export interface ServiceSection {
  heading: string;
  body?: string;
  items?: { title: string; description: string; image?: string }[];
  image?: string;
  layout?: 'image-right';
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
    sections: [
      {
        heading: 'Marine Custom Software Development',
        body: 'Beyond Ecoloadmaster, Green Ship Technologies develops bespoke maritime software tailored to the unique operational, compliance, and management needs of shipowners, operators, and maritime service providers.',
        items: [
          {
            title: 'Fleet Management Systems',
            description: 'End-to-end digital platforms for monitoring fleet operations, maintenance scheduling, crew management, and compliance tracking across your entire fleet.',
          },
          {
            title: 'Voyage Planning & Optimization',
            description: 'Custom tools that integrate weather routing, fuel consumption models, and port scheduling to maximize operational efficiency on every voyage.',
          },
          {
            title: 'Planned Maintenance Systems (PMS)',
            description: 'Digital PMS solutions aligned with class survey requirements, enabling scheduled maintenance tracking, spares management, and defect reporting.',
          },
          {
            title: 'Document Management & Compliance',
            description: 'Paperless document management platforms for certificates, permits, safety management system (SMS) documentation, and ISM Code compliance.',
          },
          {
            title: 'Port & Cargo Operations Software',
            description: 'Custom portals and dashboards for managing cargo manifests, berth scheduling, port disbursements, and agency coordination.',
          },
          {
            title: 'API & System Integration',
            description: 'Seamless integration with third-party maritime platforms, vessel AIS data feeds, ERP systems, and classification society portals.',
          },
        ],
      },
    ]
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
        layout: 'image-right',
        items: [
          { title: 'Ship Design', description: 'Leveraging specialized marine engineering software for innovative, dependable design solutions from concept to class approval.', image: '/services/ship-design-construction.jpg' },
          { title: 'Ship Conversion', description: 'Meticulous planning, innovative solutions, and seamless execution to transform vessels for new operational requirements.', image: '/services/ship-conversion-drydock.jpg' },
          { title: 'Ship Modification', description: 'Comprehensive solutions to enhance design, structure, systems, and capabilities of existing vessels.', image: '/services/ship-modification-repair.jpg' },
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
        layout: 'image-right',
        items: [
          { title: 'Mooring & Motion Analysis', description: 'Analysis for all vessel types per applicable codes with user-friendly operational reports.', image: '/services/mooring-motion-analysis.jpg' },
          { title: 'Pipe Lay & Cable Lay Analysis', description: 'Static and dynamic analysis per project design requirements with comprehensive operational reports.', image: '/services/pipelay-cable-analysis.jpg' },
          { title: 'Structural Stability Analysis', description: 'FEM analysis of installations, operational parameter checks, and stability per design requirements.', image: '/services/structural-stability-analysis.jpg' },
          { title: 'Towage & Sea Fastening', description: 'Marine transportation analysis, towing plans, sea fastening designs, and warranty survey assistance.', image: '/services/towage-sea-fastening.jpg' },
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
          { title: 'IHM Survey', description: 'Inventory of Hazardous Materials (IHM) survey for Hong Kong Convention compliance. ABS approved, with detailed onboard inventory, documentation review, and certification support.', image: '/services/class-survey.webp' },
          { title: 'Pre-Purchase Survey', description: 'Thorough inspection of the vessel\'s hull, structure, machinery, equipment, and systems conducted before vessel acquisition.', image: '/services/prepurchase-survey.webp' },
          { title: 'Condition Survey', description: 'Evaluates overall vessel condition, identifying defects or damages affecting safety, performance, or commercial value.', image: '/services/condotionsurvey.webp' },
          { title: 'On/Off Hire Survey', description: 'Specialized inspections documenting vessel condition at the commencement and completion of charter agreements.', image: '/services/on-offsurvey.webp' },
          { title: 'Towage Survey', description: 'Assesses vessels intended for towing and related equipment for regulatory compliance and operational readiness.', image: '/services/towagesurvey.webp' },
          { title: 'Damage Survey', description: 'Conducted after accidents to assess damage extent, establish cause, and recommend appropriate repairs.', image: '/services/damagesurvey.webp' },
          { title: 'Bunker Survey', description: 'Verifies fuel quantity and quality onboard vessels to protect both buyer and seller interests.', image: '/services/bunkersurvey.webp' },
          { title: 'Draft Survey', description: 'Determines vessel displacement by measuring draft changes before and after cargo operations.', image: '/services/draftsurvey.webp' },
          { title: 'Vessel Feasibility Survey', description: 'Comprehensive assessment evaluating a vessel\'s suitability for specific operations or conversions.', image: '/services/vesselfeasibilitysurvey.webp' },
        ]
      },
      {
        heading: 'Class & Statutory Surveys',
        layout: 'image-right',
        body: 'Class and statutory surveys are essential inspections conducted on ships to ensure compliance with international maritime regulations, classification society rules, and statutory requirements imposed by flag administrations. These surveys are crucial for verifying seaworthiness, safety, and environmental compliance, while maintaining classification status and operational integrity.',
        items: [
          { title: 'Comprehensive Assessments', description: 'Our experienced surveyors conduct thorough inspections of vessel structure, machinery, systems, and safety equipment in accordance with classification society rules.', image: '/services/comprehensive-assessments.webp' },
          { title: 'Regular Monitoring', description: 'Class surveys are carried out at scheduled intervals across the vessel lifecycle, verifying continuous compliance with classification and statutory standards.', image: '/services/regular-monitoring.webp' },
          { title: 'Structural Integrity', description: 'We assess hull strength, stability, and seaworthiness to ensure vessels are fit for operation and capable of withstanding demanding maritime conditions.', image: '/services/structural-integrity.webp' },
          { title: 'Regulatory Compliance', description: 'Our statutory surveys verify adherence to SOLAS, MARPOL, STCW, and other international conventions mandated by flag states.', image: '/services/regulatory-compliance.webp' },
          { title: 'Flag State Requirements', description: 'We work closely with flag administrations to make sure your vessels meet all required flag state obligations and certification standards.', image: '/services/flag-state-requirements.webp' },
          { title: 'Port State Control Readiness', description: 'Our survey services prepare your vessels for PSC inspections, helping minimize detention risk and operational delays.', image: '/services/port-state-control.webp' },
        ]
      },
      {
        heading: 'Flag State Inspection Services',
        body: 'At Green Ship Technologies, we offer comprehensive flag state inspection services to ensure that vessels comply with the regulations and requirements of their respective flag administrations. Our flag state inspections verify seaworthiness, safety, and regulatory compliance, helping shipowners and operators navigate the complex maritime regulatory landscape.',
        items: [
          { title: 'Regulatory Compliance Verification', description: 'Our experienced surveyors conduct thorough inspections to verify compliance with flag state regulations, safety standards, operational procedures, crew qualifications, and vessel documentation.', image: '/services/regulatory-compliance-verification.webp' },
          { title: 'Safety & Environmental Compliance', description: 'We assess vessels for compliance with safety and environmental regulations, including pollution prevention, emergency response preparedness, and environmental management practices.', image: '/services/Safety-and-Environmental-Compliance.webp' },
          { title: 'Documentation Review', description: 'We meticulously review vessel documentation, certificates, records, and logs to ensure accuracy, completeness, and compliance with flag administration requirements.', image: '/services/Documentation-Review.webp' },
          { title: 'Risk Assessment', description: 'We identify potential risks, hazards, and deficiencies during inspections and provide corrective recommendations to mitigate risks and ensure compliance.', image: '/services/Risk-Assessment.webp' },
          { title: 'Consultation & Guidance', description: 'Our team provides expert consultation and guidance on regulatory requirements, compliance strategies, and best practices to resolve issues and implement effective solutions.', image: '/services/Consultation-and-Guidance.webp' },
        ]
      },
    ],
    flags: ['St. Kitts & Nevis', 'Belize', 'Comoros', 'Sierra Leone', 'Cook Island', 'Palau', 'Panama', 'Liberia']
  },
  {
    slug: 'renewable-energy-oil-gas',
    title: 'Renewable Energy & Oil Gas',
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
        layout: 'image-right',
        body: 'Design, construction, installation, and maintenance of renewable offshore infrastructure including wind farms and tidal installations. Our solutions address harsh marine conditions, saltwater corrosion, and variable seabed conditions.',
        items: [
          { title: 'Offshore Structure Design', description: 'Robust structural designs for offshore renewable energy installations in challenging marine environments.', image: '/services/offshore.webp' },
          { title: 'Installation Engineering', description: 'Safe and efficient installation planning and supervision for offshore renewable energy projects.', image: '/services/installation.webp' },
          { title: 'Operations & Maintenance', description: 'Ongoing support ensuring optimal performance and longevity of offshore energy infrastructure.', image: '/services/maintainance.webp' },
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
        layout: 'image-right',
        items: [
          { title: 'Voyage Chartering', description: 'Single voyage charter arrangements for cargo transportation on specific trade routes.', image: '/services/charter.jpg' },
          { title: 'Time Chartering', description: 'Fixed-period charter agreements giving charterers full operational control of the vessel.', image: '/services/ship1.webp' },
          { title: 'Bareboat Chartering', description: 'Long-term charter arrangements where the charterer assumes full responsibility for the vessel.', image: '/services/ship2.webp' },
          { title: 'Post-Fixture Management', description: 'Ongoing support and dispute resolution throughout the charter period.', image: '/services/Market.webp' },
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
          { title: 'Flag Selection Assistance', description: 'Expert guidance on selecting suitable flags based on regulatory requirements, operational preferences, and commercial considerations.', image: '/services/flag.jpg' },
          { title: 'Regulatory Guidance', description: 'Expert advice on regulatory requirements, procedures, and best practices related to flag registration.', image: '/services/statutory-surveys.webp' },
          { title: 'Registration Process Management', description: 'End-to-end management of the registration process, handling all paperwork, documentation, and communications with flag state authorities.', image: '/services/vessel1.webp' },
          { title: 'Document Preparation', description: 'Preparation of application forms, declarations, affidavits, and all supporting documents with meticulous attention to detail.', image: '/services/Documentation-Review.webp' },
          { title: 'Compliance Verification', description: 'Comprehensive review of vessel documentation, certificates, and records to verify compliance with flag state requirements.', image: '/services/regulatory-compliance.webp' },
          { title: 'Communication & Coordination', description: 'Acting as liaison between clients and flag authorities, addressing queries and providing status updates throughout the registration process.', image: '/services/Consultation-and-Guidance.webp' },
        ]
      },
    ],
    flags: ['Panama', 'Liberia', 'Palau', 'St. Kitts & Nevis', 'Comoros', 'Cook Islands', 'Belize', 'Sierra Leone', 'Tanzania', 'St. Vincent & the Grenadines']
  }
];
