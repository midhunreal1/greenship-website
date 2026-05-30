export interface ServiceSection {
  heading: string;
  body?: string;
  items?: { title: string; description: string; image?: string }[];
  image?: string;
  layout?: 'image-right';
}

export interface ServiceDetail {
  slug: string;
  parentSlug?: string;
  title: string;
  heroText: string;
  heroImage: string;
  icon: string;
  intro: string;
  sections: ServiceSection[];
  flags?: string[];
}

export const subItemDetails: ServiceDetail[] = [
  {
    slug: 'ship-design',
    title: 'Ship Design',
    heroText: 'New vessel design, conversions, and modifications delivered by experienced naval architects and marine engineers.',
    heroImage: '/services/shipdesign.jpeg',
    icon: 'Ruler',
    intro: 'At Green Ship Technologies we specialize in Ship Design & Conversion services, catering to the evolving needs of the maritime industry. With a team of experienced naval architects, marine engineers, and project managers, we offer innovative solutions tailored to meet the unique requirements of our clients worldwide. We utilize a range of specialized software applications tailored for marine engineering and design tasks, delivering innovative and reliable design solutions for every vessel type.',
    sections: [
      {
        heading: 'Core Design Services',
        layout: 'image-right',
        items: [
          {
            title: 'Ship Design',
            description: 'Leveraging specialized marine engineering software for innovative, dependable design solutions from concept to class approval — tailored to the unique requirements of each vessel type.',
            image: '/services/ship-design-construction.jpg',
          },
          {
            title: 'Ship Conversion',
            description: 'Specializing in design conversion services, offering a comprehensive suite of solutions that enable our clients to transform their visions into reality — meticulous planning, innovative solutions, and seamless execution.',
            image: '/services/ship-conversion-drydock.jpg',
          },
          {
            title: 'Ship Modification',
            description: 'Comprehensive solutions to enhance the design, structure, systems, and capabilities of vessels — improving performance, efficiency, safety, and functionality with expert guidance.',
            image: '/services/ship-modification-repair.jpg',
          },
        ],
      },
      {
        heading: 'Vessel Portfolio',
        body: 'We have designed a diverse range of vessels, each serving different purposes and types, as demonstrated in our portfolio.',
        items: [
          { title: 'Well Stimulation / Test Vessel', description: 'Used for oil/gas well intervention to increase production by improving hydrocarbon flow from the reservoir into the wellbore, utilizing well stimulator structures or offshore drilling vessels.', image: '/services/ship1.webp' },
          { title: 'Diesel Electric DP2 Vessel', description: 'Field support vessel designed for logistics capability comprising under-deck liquid cargoes and deck cargo, with dynamic positioning for precise station-keeping.', image: '/services/ship2.webp' },
          { title: 'Maintenance Work Vessel', description: 'Vessels designed as a platform for loading and unloading of cargo or as a temporary workspace for the handling of equipment and materials in offshore environments.', image: '/services/offshore.webp' },
          { title: 'Offshore Construction Vessel', description: 'Large technologically advanced vessels for deep sea and subsea constructions, equipped with lifting, positioning, pile-driving capabilities, DP systems, cranes, and ROVs for harsh weather operations.', image: '/services/AHTS.webp' },
          { title: 'AHTS / Hybrid Propulsion', description: 'Anchor Handling Tug Supply vessels built to handle anchors for oil rigs, tow them to location, and secure rigs in place — with hybrid propulsion combining two or more sources of propulsion.', image: '/services/ship-drydock-3.webp' },
          { title: 'Crew Boat', description: 'Vessel designed to transport offshore personnel, equipment, and supplies to and from offshore facilities like oil platforms, drilling rigs, and wind farms.', image: '/services/Service2.webp' },
          { title: 'Multipurpose Vessel (MPV)', description: 'Seagoing ships built for carriage of a wide range of cargoes — wood, steel, building materials, paper rolls, and bulk cargo — capable of handling different types of loading on the same voyage.', image: '/services/ship1.webp' },
          { title: 'Small Passenger Ship', description: 'Vessels designed to carry a smaller number of passengers for coastal cruises, river cruises, or ferry services, offering a personalized and intimate travel experience.', image: '/services/ship2.webp' },
        ],
      },
    ],
  },
  {
    slug: 'retrofit-conversion',
    title: 'Retrofit & Conversion',
    heroText: 'Engineering solutions for BWTS and scrubber installation on existing vessels — compliant, efficient, class-approved.',
    heroImage: '/services/ship-drydock-3.webp',
    icon: 'Wrench',
    intro: 'At Green Ship Technologies, we are a leading provider of specialized marine retrofit and conversion services. Our expertise lies in transforming existing vessels to adapt to new purposes, comply with regulatory requirements, and enhance performance and efficiency.',
    sections: [
      {
        heading: 'BWTS Installation Engineering',
        body: 'BWTS Installation Engineering refers to the integration of a BWTS into the vessel\'s existing ballast water management infrastructure. At Green Ship Technologies we perform the installation of BWTS on ships that were not originally equipped with the system — essential for compliance with the BWM Convention D-2 standard, monitoring that the species in the discharged water are within the admissible limits. Our team comprises skilled Naval Architects, Marine Engineers, 3D Scanning Experts, Design Software Specialists, Piping, and Electrical Engineers.',
        items: [
          { title: 'Vessel Inspections for Feasibility of Installations', description: 'Before proceeding with the installation of a BWTS, it\'s crucial to inspect the vessel to determine its suitability and feasibility for the installation. This involves assessing the existing ballast water management infrastructure and identifying any necessary modifications or adjustments.', image: '/services/retrofit/Vessel-Inspections-for-Feasibility-of-Installations.webp' },
          { title: '3D Laser Scanning', description: 'Utilizing advanced technology such as 3D laser scanning helps in capturing detailed and accurate measurements of the vessel\'s spaces where the BWTS will be installed. This data is essential for the design and engineering phases.', image: '/services/retrofit/3D-Laser-Scanning.webp' },
          { title: 'Detailed Design and Engineering Drawings for Class Approval and Client Approval', description: 'Based on the information gathered from vessel inspections and 3D laser scanning, Green Ship Technologies creates detailed design and engineering drawings. These drawings are crucial for obtaining approval from classification societies (Class Approval) and ensuring client satisfaction (Client Approval).', image: '/services/retrofit/Detailed-Design-and-Engineering-Drawings-for-Class-Approval-and-Client-Approval.webp' },
          { title: 'Installation Assistance at Shipyard or in Ports', description: 'Green Ship Technologies provides support and assistance during the installation phase, either at the shipyard during construction or in ports for retrofitting existing vessels. This involves coordinating with shipyard workers, overseeing the installation process, and ensuring compliance with relevant regulations and standards.', image: '/services/retrofit/installation-Assistance-at-Shipyard-OR-in-Ports.webp' },
        ],
      },
      {
        heading: 'Scrubber Installation Engineering',
        body: 'A ship scrubber, also known as an Exhaust Gas Cleaning System (EGCS), is an emissions control device that removes pollutants from the exhaust gas and reduces the amount emitted by ships, making them a more environmentally-friendly mode of transportation. We also represent renowned manufacturers of SOx scrubbers, providing high-quality solutions to meet emissions regulations and enhance environmental sustainability in maritime operations.',
        items: [
          { title: 'Vessel Feasibility Inspections', description: 'Conducting vessel inspections to assess the feasibility of installations.', image: '/services/retrofit/scrubber-installation-engineering.webp' },
          { title: '3D Laser Scanning', description: 'Utilizing 3D laser scanning experts for precise data collection.', image: '/services/retrofit/3D-Laser-Scanning.webp' },
          { title: 'Design & Engineering Drawings', description: 'Creating detailed design and engineering drawings to obtain approvals from classification societies and clients.', image: '/services/retrofit/Detailed-Design-and-Engineering-Drawings-for-Class-Approval-and-Client-Approval.webp' },
          { title: 'Installation Assistance', description: 'Providing installation assistance either at shipyards or in ports to ensure successful implementation of scrubber systems.', image: '/services/retrofit/scrubber-installation-engineering2.png' },
        ],
      },
    ],
  },
  {
    slug: 'offshore-engineering',
    parentSlug: 'ship-design-engineering',
    title: 'Offshore Engineering',
    heroText: 'Comprehensive offshore engineering solutions for oil & gas platforms, marine infrastructure, and renewable energy installations.',
    heroImage: '/services/offshore-engineering/Self-Elevating-Mobile-Offshore-Drilling-Units-Services.webp',
    icon: 'Anchor',
    intro: 'At Green Ship Technologies, we specialize in offshore engineering solutions tailored to meet the diverse needs of projects located in offshore environments. Offshore engineering encompasses a wide range of services aimed at designing, constructing, and maintaining structures and facilities in challenging marine environments, including oil and gas platforms, wind farms, and marine infrastructure.',
    sections: [
      {
        heading: 'Offshore Engineering Services',
        layout: 'image-right',
        items: [
          { title: 'MODU & Self-Elevating Platform Services', description: 'Comprehensive services for Mobile Offshore Drilling Units: stability analysis, inclining experiments and reports, dead weight surveys, marine operational manuals, structural installation and FEM analysis, helideck analysis, and piping & electrical modifications.', image: '/services/offshore-engineering/Self-Elevating-Mobile-Offshore-Drilling-Units-Services.webp' },
          { title: 'Mooring & Motion Analysis', description: 'Analysis for all types of vessels with all kinds of design parameters, carried out per applicable codes with user-friendly reports for operational requirements.', image: '/services/offshore-engineering/Mooring-and-Motion-Analysis.webp' },
          { title: 'Pipe Lay Analysis', description: 'Pipe lay analysis per project design requirements — static and dynamic analysis — with user-friendly reports for operational requirements.', image: '/services/offshore-engineering/Pipe-Lay-Analysis.webp' },
          { title: 'Cable Lay Analysis', description: 'Analysis for all types of vessels with all design parameters; static and dynamic analysis with user-friendly reports for operational requirements.', image: '/services/offshore-engineering/Cable-Lay-Analysis.webp' },
          { title: 'Installation & Modification Studies', description: 'Turnkey studies supported by structural, mechanical, and electrical engineering capabilities — basic design through detailed engineering drawings, optimized for commercial and operational feasibility.', image: '/services/offshore-engineering/Installation-and-Modification-Studies.webp' },
          { title: 'Structural Stability Analysis', description: 'Structural analysis of various installations and equipment through FEM analysis, structural checks for various operational parameters, and stability analysis per design requirements.', image: '/services/offshore-engineering/Structural-Stability-Analysis.webp' },
          { title: 'Towage & Sea Fastening', description: 'Detailed analysis for all kinds of marine transportation per codes and practices of marine warranty requirements — towing plans, sea fastening designs, and assistance for warranty surveys.', image: '/services/offshore-engineering/Towage-transport.webp' },
        ],
      },
    ],
  },
  // ── Marine Software sub-items ──
  {
    slug: 'marine-custom-software-development',
    title: 'Marine Custom Software Development',
    heroText: 'Bespoke maritime software solutions tailored to the unique operational and compliance needs of shipowners and operators.',
    heroImage: '/services/software.jpeg',
    icon: 'Monitor',
    intro: 'Beyond Ecoloadmaster, Green Ship Technologies develops bespoke maritime software tailored to the unique operational, compliance, and management needs of shipowners, operators, and maritime service providers. Our software engineers work alongside naval architects and marine engineers to build solutions that truly fit the industry.',
    sections: [
      {
        heading: 'Custom Software Solutions',
        items: [
          { title: 'Fleet Management Systems', description: 'End-to-end digital platforms for monitoring fleet operations, maintenance scheduling, crew management, and compliance tracking across your entire fleet.', image: '/services/Planned-Maintenance-System.webp' },
          { title: 'Voyage Planning & Optimization', description: 'Custom tools that integrate weather routing, fuel consumption models, and port scheduling to maximize operational efficiency on every voyage.', image: '/services/Ship-Loading-Optimization.webp' },
          { title: 'Planned Maintenance Systems (PMS)', description: 'Digital PMS solutions aligned with class survey requirements, enabling scheduled maintenance tracking, spares management, and defect reporting.', image: '/services/Survey-Certification-Management.webp' },
          { title: 'Document Management & Compliance', description: 'Paperless document management platforms for certificates, permits, safety management system (SMS) documentation, and ISM Code compliance.', image: '/services/Documentation-Review.webp' },
          { title: 'Port & Cargo Operations Software', description: 'Custom portals and dashboards for managing cargo manifests, berth scheduling, port disbursements, and agency coordination.', image: '/services/Purchase-Management.webp' },
          { title: 'API & System Integration', description: 'Seamless integration with third-party maritime platforms, vessel AIS data feeds, ERP systems, and classification society portals.', image: '/services/Cloud-Sharing.webp' },
        ],
      },
    ],
  },

  // ── Renewable Energy sub-items ──
  {
    slug: 'floating-solar-system-design',
    title: 'Floating Solar System Design',
    heroText: 'Custom floating photovoltaic system design for water bodies — maximizing energy output while minimizing environmental impact.',
    heroImage: '/services/r1-1.webp',
    icon: 'Zap',
    intro: 'Floating solar photovoltaic (PV) systems involve installing solar panels on bodies of water, such as lakes, reservoirs, or offshore areas. These systems offer several advantages, including utilizing otherwise unused space, reducing water evaporation, and minimizing land-use conflicts. Design considerations include the choice of floatation materials, anchoring systems, durability against environmental factors (such as waves, wind, and corrosion), and optimization of panel orientation for maximum energy production. Additionally, factors like water depth, water quality, and ecosystem impacts are carefully assessed during the design phase to ensure environmental compatibility and project feasibility.',
    sections: [
      {
        heading: 'Floating Solar Design Services',
        items: [
          { title: 'Site Assessment', description: 'Water depth assessment, quality evaluation, and ecosystem impact analysis to ensure environmental compatibility and optimal system placement for maximum energy production.', image: '/services/r1-1.webp' },
          { title: 'System Design', description: 'Custom floating solar system design accounting for waves, wind, corrosion, and marine environmental factors — with optimized panel orientation and floatation material selection for maximum energy production.', image: '/services/r2-1.webp' },
          { title: 'Anchoring & Mooring Design', description: 'Engineering of anchoring and mooring systems that securely hold floating solar arrays in position while accommodating water level fluctuations and environmental loads.', image: '/services/mooring-motion-analysis.jpg' },
          { title: 'Environmental Impact Assessment', description: 'Comprehensive evaluation of ecosystem impacts, water quality effects, and biodiversity considerations to ensure the floating solar system is environmentally compatible and meets regulatory requirements.', image: '/services/r3-1.webp' },
        ],
      },
    ],
  },
  {
    slug: 'offshore-engineering',
    parentSlug: 'renewable-energy-oil-gas',
    title: 'Offshore Engineering',
    heroText: 'Design, construction, and maintenance engineering for renewable offshore energy infrastructure in challenging marine environments.',
    heroImage: '/services/offshore.webp',
    icon: 'Zap',
    intro: 'Offshore engineering involves the design, construction, installation, and maintenance of renewable energy infrastructure in offshore environments, such as wind farms, wave energy converters, and tidal energy installations. Challenges in offshore engineering include dealing with harsh marine conditions, such as strong winds, high waves, corrosive saltwater, and variable seabed conditions. Our engineering solutions focus on designing robust structures that can withstand these conditions while ensuring safe and efficient operation and minimizing environmental impacts.',
    sections: [
      {
        heading: 'Offshore Engineering Services',
        layout: 'image-right',
        items: [
          { title: 'Offshore Structure Design', description: 'Robust structural designs for offshore renewable energy installations in challenging marine environments — engineered to withstand harsh conditions including high waves, wind loads, and corrosive saltwater.', image: '/services/offshore.webp' },
          { title: 'Installation Engineering', description: 'Safe and efficient installation planning and supervision for offshore renewable energy projects, including coordination of marine vessels, lifting operations, and seabed preparation.', image: '/services/installation.webp' },
          { title: 'Operations & Maintenance', description: 'Ongoing support ensuring optimal performance and longevity of offshore energy infrastructure through planned maintenance programs and responsive technical assistance.', image: '/services/maintainance.webp' },
        ],
      },
    ],
  },
  {
    slug: 'wind-farm-engineering-support',
    title: 'Wind Farm Engineering Support',
    heroText: 'Comprehensive wind farm engineering from site assessment and turbine layout through foundation design and commissioning.',
    heroImage: '/services/r3-1.webp',
    icon: 'Zap',
    intro: 'Wind farm engineering support encompasses various activities aimed at optimizing the performance, reliability, and safety of offshore and onshore wind energy projects. This includes site assessment and selection, wind resource evaluation, turbine selection, layout optimization, foundation design, and electrical system design. Engineering support also involves ongoing monitoring, maintenance, and troubleshooting to ensure the long-term viability and profitability of wind farm operations.',
    sections: [
      {
        heading: 'Wind Farm Engineering Services',
        items: [
          { title: 'Site Assessment & Selection', description: 'Wind resource evaluation and site suitability analysis for offshore and onshore wind farm development, identifying optimal locations for maximum energy yield and minimal environmental impact.', image: '/services/r3-1.webp' },
          { title: 'Turbine & Layout Optimization', description: 'Turbine selection, layout optimization, and foundation design to maximize energy production while minimizing wake losses, structural loads, and visual and noise impacts.', image: '/services/Service4.webp' },
          { title: 'Electrical System Design', description: 'Inter-array cabling, substation design, and grid connection engineering for reliable and efficient power transmission from offshore wind installations to shore.', image: '/services/solar.jpeg' },
          { title: 'Monitoring & Maintenance Planning', description: 'Long-term performance monitoring strategies, troubleshooting frameworks, and preventive maintenance planning to ensure the ongoing viability and profitability of wind farm operations.', image: '/services/r2-1.webp' },
        ],
      },
    ],
  },

  // ── Survey & Certification sub-items ──
  {
    slug: 'ihm-surveys',
    title: 'IHM Surveys',
    heroText: 'IRS approved and ABS approved Inventory of Hazardous Materials surveys for Hong Kong Convention compliance.',
    heroImage: '/services/class-survey.webp',
    icon: 'ClipboardCheck',
    intro: 'At Green Ship Technologies, we specialize in Inventory of Hazardous Materials (IHM) surveys for compliance with the Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships. Our IHM surveys are IRS approved and ABS approved, ensuring the highest standards of accuracy, documentation, and certification.',
    sections: [
      {
        heading: 'IHM Survey Services',
        items: [
          { title: 'Onboard Inventory Compilation', description: 'Comprehensive identification and documentation of all hazardous materials present on the vessel, including asbestos, PCBs, heavy metals, and other regulated substances, compiled into a structured inventory.', image: '/services/class-survey.webp' },
          { title: 'Documentation Review', description: 'Thorough review of vessel documentation, material safety data sheets, purchase records, and construction drawings to verify the presence or absence of hazardous materials in accordance with Hong Kong Convention requirements.', image: '/services/Documentation-Review.webp' },
          { title: 'Risk Assessment', description: 'Identification of hazardous materials posing risks to crew, contractors, and the environment during recycling operations, with detailed risk assessments and recommended control measures.', image: '/services/Risk-Assessment.webp' },
          { title: 'IHM Certification', description: 'Full certification support, including preparation of the IHM document for class approval, statement of compliance, and guidance on maintaining the IHM throughout the vessel\'s operational life.', image: '/services/regulatory-compliance-verification.webp' },
        ],
      },
    ],
  },
  {
    slug: 'class-statutory-surveys',
    title: 'Class & Statutory Surveys',
    heroText: 'Ensuring continuous compliance with classification society rules and international maritime conventions.',
    heroImage: '/services/statutory-surveys.webp',
    icon: 'ClipboardCheck',
    intro: 'Class and statutory surveys are essential inspections conducted on ships to ensure compliance with international maritime regulations, classification society rules, and statutory requirements imposed by flag administrations. At Green Ship Technologies, our qualified and authorized surveyors — appointed by flag administrations, classification societies, and recognized organizations — undergo rigorous training and certification to conduct surveys in accordance with relevant international conventions, regulations, and standards.',
    sections: [
      {
        heading: 'Class Survey Services',
        body: 'Class surveys are conducted by classification societies — independent organizations responsible for establishing and maintaining standards for the design, construction, and maintenance of ships. The main purpose is to assess the structural integrity, stability, and maintenance of vessels in accordance with classification rules, conducted at regular intervals throughout the vessel\'s life cycle.',
        layout: 'image-right',
        items: [
          { title: 'Comprehensive Assessments', description: 'Our experienced surveyors conduct thorough inspections of your vessels, covering all aspects of design, construction, and maintenance in accordance with classification society rules.', image: '/services/comprehensive-assessments.webp' },
          { title: 'Regular Monitoring', description: 'Class surveys are conducted at regular intervals throughout the vessel\'s life cycle to verify continuous compliance with classification rules, standards, and statutory requirements.', image: '/services/regular-monitoring.webp' },
          { title: 'Structural Integrity', description: 'We assess the structural integrity, stability, and seaworthiness of your vessels, providing confidence in their ability to withstand the rigors of maritime operations.', image: '/services/structural-integrity.webp' },
        ],
      },
      {
        heading: 'Statutory Survey Services',
        body: 'Statutory surveys are conducted to ensure compliance with international conventions, regulations, and standards governing maritime operations. These surveys are mandated by flag administrations and regulatory authorities and conducted at specified intervals to verify the vessel\'s compliance with statutory requirements.',
        layout: 'image-right',
        items: [
          { title: 'Regulatory Compliance', description: 'Our statutory surveys are designed to verify compliance with a wide range of regulatory requirements, including SOLAS, MARPOL, STCW, and more — mandated by flag administrations and regulatory authorities.', image: '/services/regulatory-compliance.webp' },
          { title: 'Flag State Requirements', description: 'We work closely with flag administrations to ensure that your vessels meet all flag state regulations, obligations, and certification standards.', image: '/services/flag-state-requirements.webp' },
          { title: 'Port State Control Readiness', description: 'Our surveys help prepare your vessels for port state control inspections, minimizing the risk of delays, detentions, or penalties.', image: '/services/port-state-control.webp' },
        ],
      },
    ],
  },
  {
    slug: 'marine-surveys',
    title: 'Marine Surveys',
    heroText: 'Professional marine surveys tailored to meet the diverse operational and commercial needs of shipowners and operators.',
    heroImage: '/services/prepurchase-survey.webp',
    icon: 'ClipboardCheck',
    intro: 'At Green Ship Technologies, we specialize in delivering a comprehensive range of marine survey services, tailored to meet the diverse needs of our clients in the maritime industry. Our commitment to excellence, combined with the expertise of our highly skilled surveyors, ensures that every aspect of your vessel is thoroughly inspected and evaluated to the highest standards.',
    sections: [
      {
        heading: 'Our Survey Services',
        items: [
          { title: 'Pre-Purchase Survey', description: 'Conducted before the purchase of a vessel to provide the buyer with an assessment of the vessel\'s condition, seaworthiness, and value. Includes a thorough inspection of the hull, structure, machinery, equipment, and systems.', image: '/services/prepurchase-survey.webp' },
          { title: 'Condition Survey', description: 'Evaluates the overall condition of a vessel, identifying any defects, damages, or deficiencies that may affect its safety, performance, or value. Often conducted for insurance purposes, financing, or routine maintenance planning.', image: '/services/condotionsurvey.webp' },
          { title: 'On/Off Hire Survey', description: 'Specialized survey conducted to assess the condition of a vessel or marine equipment at the beginning (on-hire) and end (off-hire) of a charter or lease agreement — documenting condition and determining any changes or damages during the charter period.', image: '/services/on-offsurvey.webp' },
          { title: 'Towage Survey', description: 'Specialized inspection to assess the condition of a vessel or structure intended to be towed, as well as towing arrangements and equipment, ensuring safe and efficient towing operations and compliance with regulatory requirements.', image: '/services/towagesurvey.webp' },
          { title: 'Damage Survey', description: 'In the event of an accident, collision, or other incident resulting in damage to a vessel, a damage survey assesses the extent of the damage, determines the cause, and recommends necessary repairs or corrective actions.', image: '/services/damagesurvey.webp' },
          { title: 'Bunker Survey', description: 'Specialized inspection conducted to verify the quantity and quality of fuel (bunker) onboard a vessel — ensuring compliance with contractual agreements, preventing discrepancies, and mitigating risks associated with fuel procurement and consumption.', image: '/services/bunkersurvey.webp' },
          { title: 'Draft Survey', description: 'Critical assessment to determine the displacement of a vessel by measuring the change in draft before and after cargo loading or unloading — essential for accurately calculating cargo quantities, verifying weight compliance, and ensuring safe navigation.', image: '/services/draftsurvey.webp' },
          { title: 'Vessel Feasibility Survey', description: 'Comprehensive assessment to evaluate the suitability and viability of a vessel for a specific purpose or operation, identifying potential challenges, risks, or limitations for transportation, offshore operations, or specialized projects.', image: '/services/vesselfeasibilitysurvey.webp' },
        ],
      },
    ],
  },
  {
    slug: 'pre-purchase-surveys',
    title: 'Marine Survey Services',
    heroText: 'Professional marine surveys tailored to meet the diverse operational and commercial needs of shipowners and operators.',
    heroImage: '/services/prepurchase-survey.webp',
    icon: 'ClipboardCheck',
    intro: 'At Green Ship Technologies, we specialize in delivering a comprehensive range of marine survey services, tailored to meet the diverse needs of our clients in the maritime industry. Our commitment to excellence, combined with the expertise of our highly skilled surveyors, ensures that every aspect of your vessel is thoroughly inspected and evaluated to the highest standards.',
    sections: [
      {
        heading: 'Our Survey Services',
        items: [
          { title: 'Pre-Purchase Survey', description: 'Conducted before the purchase of a vessel to provide the buyer with an assessment of the vessel\'s condition, seaworthiness, and value. Includes a thorough inspection of the hull, structure, machinery, equipment, and systems.', image: '/services/prepurchase-survey.webp' },
          { title: 'Condition Survey', description: 'Evaluates the overall condition of a vessel, identifying any defects, damages, or deficiencies that may affect its safety, performance, or value. Often conducted for insurance purposes, financing, or routine maintenance planning.', image: '/services/condotionsurvey.webp' },
          { title: 'On/Off Hire Survey', description: 'Specialized survey conducted to assess the condition of a vessel or marine equipment at the beginning (on-hire) and end (off-hire) of a charter or lease agreement — documenting condition and determining any changes or damages during the charter period.', image: '/services/on-offsurvey.webp' },
          { title: 'Towage Survey', description: 'Specialized inspection to assess the condition of a vessel or structure intended to be towed, as well as towing arrangements and equipment, ensuring safe and efficient towing operations and compliance with regulatory requirements.', image: '/services/towagesurvey.webp' },
          { title: 'Damage Survey', description: 'In the event of an accident, collision, or other incident resulting in damage to a vessel, a damage survey assesses the extent of the damage, determines the cause, and recommends necessary repairs or corrective actions.', image: '/services/damagesurvey.webp' },
          { title: 'Bunker Survey', description: 'Specialized inspection conducted to verify the quantity and quality of fuel (bunker) onboard a vessel — ensuring compliance with contractual agreements, preventing discrepancies, and mitigating risks associated with fuel procurement and consumption.', image: '/services/bunkersurvey.webp' },
          { title: 'Draft Survey', description: 'Critical assessment to determine the displacement of a vessel by measuring the change in draft before and after cargo loading or unloading — essential for accurately calculating cargo quantities, verifying weight compliance, and ensuring safe navigation.', image: '/services/draftsurvey.webp' },
          { title: 'Vessel Feasibility Survey', description: 'Comprehensive assessment to evaluate the suitability and viability of a vessel for a specific purpose or operation, identifying potential challenges, risks, or limitations for transportation, offshore operations, or specialized projects.', image: '/services/vesselfeasibilitysurvey.webp' },
        ],
      },
    ],
  },
  {
    slug: 'flag-state-inspections',
    title: 'Flag State Inspections',
    heroText: 'Comprehensive flag state inspection services ensuring vessels comply with all regulatory and safety requirements.',
    heroImage: '/services/regulatory-compliance-verification.webp',
    icon: 'ClipboardCheck',
    intro: 'At Green Ship Technologies, we offer comprehensive flag state inspection services to ensure that vessels comply with the regulations and requirements of their respective flag administrations. Our flag state inspection services are designed to verify the seaworthiness, safety, and regulatory compliance of vessels, helping shipowners and operators navigate the complex regulatory landscape of the maritime industry.',
    sections: [
      {
        heading: 'Key Features of Our Flag State Inspection Services',
        items: [
          { title: 'Regulatory Compliance Verification', description: 'Our experienced surveyors conduct thorough inspections to verify compliance with the regulations and requirements of the flag state administration. This includes assessing adherence to safety standards, operational procedures, crew qualifications, and documentation.', image: '/services/regulatory-compliance-verification.webp' },
          { title: 'Safety & Environmental Compliance', description: 'We assess vessels for compliance with safety and environmental regulations, including those related to pollution prevention, emergency response preparedness, and environmental management practices. Our inspections help ensure that vessels meet the highest standards of safety and environmental stewardship.', image: '/services/Safety-and-Environmental-Compliance.webp' },
          { title: 'Documentation Review', description: 'We meticulously review vessel documentation, certificates, records, and logs to ensure accuracy, completeness, and compliance with regulatory requirements. This includes verifying the validity of certificates, licenses, and permits required for vessel operation.', image: '/services/Documentation-Review.webp' },
          { title: 'Risk Assessment', description: 'We identify potential risks, hazards, and deficiencies during inspections and provide recommendations for corrective actions to mitigate risks and ensure compliance. Our goal is to help shipowners and operators maintain the highest levels of safety, operational efficiency, and regulatory compliance.', image: '/services/Risk-Assessment.webp' },
          { title: 'Consultation & Guidance', description: 'Our team of experts provides consultation and guidance to shipowners and operators on regulatory requirements, compliance strategies, and best practices. We work closely with clients to address any compliance issues, develop action plans, and implement solutions to achieve regulatory compliance.', image: '/services/Consultation-and-Guidance.webp' },
        ],
      },
    ],
  },

  // ── Ship Broking & Chartering sub-items ──
  {
    slug: 'sale-purchase-brokering',
    title: 'Sale & Purchase Brokering',
    heroText: 'Expert vessel brokerage facilitating sale and purchase transactions with optimal terms across global markets.',
    heroImage: '/services/V-sales.webp',
    icon: 'Handshake',
    intro: 'At Green Ship Technologies, we specialize in facilitating the sale and purchase of a diverse range of vessels worldwide. With our extensive network of global associates and industry expertise, we offer top-tier brokerage services tailored to meet the unique needs of our clients. Whether you\'re looking to sell a vessel or acquire a new one, we provide comprehensive brokerage services — from market analysis and valuation to negotiation and documentation — handling every aspect of the transaction with precision and professionalism.',
    sections: [
      {
        heading: 'Our Sale & Purchase Services',
        layout: 'image-right',
        items: [
          {
            title: 'Vessel Sales',
            description: 'Whether you are looking to sell a single vessel or an entire fleet, we will work tirelessly to find the right buyer and negotiate the best possible terms on your behalf. Our extensive global network ensures maximum market exposure for your vessel.',
            image: '/services/V-sales.webp',
          },
          {
            title: 'Vessel Purchases',
            description: 'If you are in the market to purchase a vessel, our team will leverage our extensive network and industry connections to help you find the perfect vessel that meets your requirements and budget — covering all vessel types and specifications.',
            image: '/services/Vessel-purchase.webp',
          },
          {
            title: 'Market Analysis & Valuation',
            description: 'We provide comprehensive market analysis and valuation services to help you make informed decisions and maximize the value of your vessel. Our expert assessments draw on live market data and decades of transactional experience.',
            image: '/services/Market.webp',
          },
        ],
      },
      {
        heading: 'Transaction Support',
        items: [
          {
            title: 'Negotiation & Deal Structuring',
            description: 'Our brokers negotiate on your behalf to secure the best commercial terms, including price, payment structure, delivery conditions, and contract warranties — protecting your interests throughout the transaction.',
          },
          {
            title: 'Due Diligence Coordination',
            description: 'We coordinate pre-purchase surveys, technical inspections, and legal due diligence to ensure that all aspects of the vessel\'s condition, documentation, and title are thoroughly verified before completion.',
          },
          {
            title: 'Documentation & Closing',
            description: 'We assist with the preparation and review of Memorandum of Agreement (MoA), bill of sale, and all ancillary closing documents — ensuring a smooth, compliant, and timely transfer of ownership.',
          },
          {
            title: 'Post-Sale Support',
            description: 'Our support does not end at signing. We assist with flag registration, class transfer, crew handover coordination, and any post-delivery matters to ensure a seamless transition for both buyer and seller.',
          },
        ],
      },
    ],
  },
  {
    slug: 'chartering-brokers',
    title: 'Chartering Brokers',
    heroText: 'Comprehensive voyage, time, and bareboat charter arrangements with full post-fixture management support.',
    heroImage: '/services/charter.jpg',
    icon: 'Handshake',
    intro: 'At Green Ship Technologies, our chartering brokerage team provides expert assistance in structuring and executing charter agreements across all vessel types and trade routes. We act as trusted intermediaries between shipowners and charterers, negotiating charter terms that align with commercial objectives while minimizing operational risk. Our post-fixture management services ensure smooth execution from the moment a fixture is agreed through to final settlement.',
    sections: [
      {
        heading: 'Charter Types We Cover',
        layout: 'image-right',
        items: [
          {
            title: 'Voyage Chartering',
            description: 'Single voyage charter arrangements for cargo transportation on specific trade routes. We negotiate freight rates, laytime, demurrage, and all voyage-specific terms to optimize commercial outcomes for both owners and charterers.',
            image: '/services/charter.jpg',
          },
          {
            title: 'Time Chartering',
            description: 'Fixed-period charter agreements giving charterers full operational control of the vessel for a defined duration. We structure time charter parties that balance flexibility with security for both parties across short and long-term engagements.',
            image: '/services/ship1.webp',
          },
          {
            title: 'Bareboat Chartering',
            description: 'Long-term charter arrangements where the charterer assumes full responsibility for the vessel — crewing, maintenance, insurance, and operations. We facilitate bareboat agreements with robust legal frameworks to protect both owner and charterer interests.',
            image: '/services/ship2.webp',
          },
        ],
      },
      {
        heading: 'Post-Fixture & Advisory Services',
        items: [
          {
            title: 'Post-Fixture Management',
            description: 'Ongoing support and dispute resolution throughout the charter period — monitoring charter party compliance, managing communications between owners and charterers, and handling laytime calculations, demurrage claims, and off-hire disputes.',
          },
          {
            title: 'Freight Market Intelligence',
            description: 'Real-time freight market analysis, rate benchmarking, and trade route assessments to inform chartering decisions. Our market intelligence helps clients time their fixture activity to maximize commercial advantage.',
          },
          {
            title: 'Charter Party Review & Drafting',
            description: 'Expert review and drafting of charter party clauses, riders, and addenda to ensure all commercial and operational terms are clearly defined and enforceable — reducing the risk of disputes during performance.',
          },
          {
            title: 'Claims & Dispute Support',
            description: 'Assistance with cargo claims, off-hire disputes, redelivery condition disagreements, and other charter-related commercial disputes — providing expert analysis and representation to achieve fair and timely resolution.',
          },
        ],
      },
    ],
  },
];

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
    intro: 'At Green Ship Technologies we specialize in Ship Design & Conversion services, catering to the evolving needs of the maritime industry. With a team of experienced naval architects, marine engineers, and project managers, we offer innovative solutions tailored to meet the unique requirements of our clients worldwide. We take pride in our ability to utilize a range of specialized software applications tailored for marine engineering and design tasks, delivering innovative and reliable design solutions for every vessel type.',
    sections: [
      {
        heading: 'Core Design Services',
        layout: 'image-right',
        items: [
          {
            title: 'Ship Design',
            description: 'Leveraging specialized marine engineering software for innovative, dependable design solutions from concept to class approval — tailored to the unique requirements of each vessel type.',
            image: '/services/ship-design-construction.jpg',
          },
          {
            title: 'Ship Conversion',
            description: 'Specializing in design conversion services, offering a comprehensive suite of solutions that enable our clients to transform their visions into reality. With a keen focus on meticulous planning, innovative solutions, and seamless execution, we deliver exceptional results that exceed expectations.',
            image: '/services/ship-conversion-drydock.jpg',
          },
          {
            title: 'Ship Modification',
            description: 'Offering a comprehensive range of solutions designed to enhance the design, structure, systems, and capabilities of vessels — improving performance, efficiency, safety, and functionality with expert guidance and seamless execution.',
            image: '/services/ship-modification-repair.jpg',
          },
        ],
      },
      {
        heading: 'Vessel Portfolio',
        body: 'We have designed a diverse range of vessels, each serving different purposes and types, as demonstrated in our portfolio.',
        items: [
          {
            title: 'Well Stimulation / Test Vessel',
            description: 'Used for oil/gas well intervention to increase production by improving hydrocarbon flow from the reservoir into the wellbore, utilizing well stimulator structures or offshore drilling vessels.',
            image: '/services/ship1.webp',
          },
          {
            title: 'Diesel Electric DP2 Vessel',
            description: 'Field support vessel designed for logistics capability comprising under-deck liquid cargoes and deck cargo, with dynamic positioning for precise station-keeping.',
            image: '/services/ship2.webp',
          },
          {
            title: 'Maintenance Work Vessel',
            description: 'Vessels designed as a platform for loading and unloading of cargo or as a temporary workspace for the handling of equipment and materials in offshore environments.',
            image: '/services/offshore.webp',
          },
          {
            title: 'Offshore Construction Vessel',
            description: 'Large technologically advanced vessels for deep sea and subsea constructions, equipped with lifting, positioning, pile-driving capabilities, DP systems, cranes, and ROVs for harsh weather operations.',
            image: '/services/AHTS.webp',
          },
          {
            title: 'AHTS / Hybrid Propulsion',
            description: 'Anchor Handling Tug Supply vessels built to handle anchors for oil rigs, tow them to location, and secure rigs in place — with hybrid propulsion combining two or more sources of propulsion.',
            image: '/services/ship-drydock-3.webp',
          },
          {
            title: 'Crew Boat',
            description: 'Vessel designed to transport offshore personnel, equipment, and supplies to and from offshore facilities like oil platforms, drilling rigs, and wind farms, varying in size based on operational requirements.',
            image: '/services/Service2.webp',
          },
          {
            title: 'Multipurpose Vessel (MPV)',
            description: 'Seagoing ships built for carriage of a wide range of cargoes — wood, steel, building materials, paper rolls, and bulk cargo — capable of handling different types of loading on the same voyage.',
            image: '/services/ship1.webp',
          },
          {
            title: 'Small Passenger Ship',
            description: 'Vessels designed to carry a relatively small number of passengers for coastal cruises, river cruises, or ferry services, offering a more personalized and intimate travel experience.',
            image: '/services/ship2.webp',
          },
        ],
      },
      {
        heading: 'BWTS Installation Engineering',
        body: 'BWTS Installation Engineering refers to the integration of a BWTS into the vessel\'s existing ballast water management infrastructure. At Green Ship Technologies we perform the installation of BWTS on ships that were not originally equipped with the system — essential for compliance with the BWM Convention D-2 standard, monitoring that the species in the discharged water are within the admissible limits. Our team comprises skilled Naval Architects, Marine Engineers, 3D Scanning Experts, Design Software Specialists, Piping, and Electrical Engineers.',
        items: [
          {
            title: 'Vessel Inspections for Feasibility of Installations',
            description: 'Before proceeding with the installation of a BWTS, it\'s crucial to inspect the vessel to determine its suitability and feasibility for the installation. This involves assessing the existing ballast water management infrastructure and identifying any necessary modifications or adjustments.',
            image: '/services/retrofit/Vessel-Inspections-for-Feasibility-of-Installations.webp',
          },
          {
            title: '3D Laser Scanning',
            description: 'Utilizing advanced technology such as 3D laser scanning helps in capturing detailed and accurate measurements of the vessel\'s spaces where the BWTS will be installed. This data is essential for the design and engineering phases.',
            image: '/services/retrofit/3D-Laser-Scanning.webp',
          },
          {
            title: 'Detailed Design and Engineering Drawings for Class Approval and Client Approval',
            description: 'Based on the information gathered from vessel inspections and 3D laser scanning, Green Ship Technologies creates detailed design and engineering drawings. These drawings are crucial for obtaining approval from classification societies (Class Approval) and ensuring client satisfaction (Client Approval).',
            image: '/services/retrofit/Detailed-Design-and-Engineering-Drawings-for-Class-Approval-and-Client-Approval.webp',
          },
          {
            title: 'Installation Assistance at Shipyard or in Ports',
            description: 'Green Ship Technologies provides support and assistance during the installation phase, either at the shipyard during construction or in ports for retrofitting existing vessels. This involves coordinating with shipyard workers, overseeing the installation process, and ensuring compliance with relevant regulations and standards.',
            image: '/services/retrofit/installation-Assistance-at-Shipyard-OR-in-Ports.webp',
          },
        ],
      },
      {
        heading: 'Scrubber Installation Engineering',
        body: 'A ship scrubber, also known as an Exhaust Gas Cleaning System (EGCS), is an emissions control device that removes pollutants from the exhaust gas and reduces the amount emitted by ships, making them a more environmentally-friendly mode of transportation. We also represent renowned manufacturers of SOx scrubbers, providing high-quality solutions to meet emissions regulations and enhance environmental sustainability in maritime operations.',
        items: [
          {
            title: 'Vessel Feasibility Inspections',
            description: 'Conducting vessel inspections to assess the feasibility of installations.',
            image: '/services/retrofit/scrubber-installation-engineering.webp',
          },
          {
            title: '3D Laser Scanning',
            description: 'Utilizing 3D laser scanning experts for precise data collection.',
            image: '/services/retrofit/3D-Laser-Scanning.webp',
          },
          {
            title: 'Design & Engineering Drawings',
            description: 'Creating detailed design and engineering drawings to obtain approvals from classification societies and clients.',
            image: '/services/retrofit/Detailed-Design-and-Engineering-Drawings-for-Class-Approval-and-Client-Approval.webp',
          },
          {
            title: 'Installation Assistance',
            description: 'Providing installation assistance either at shipyards or in ports to ensure successful implementation of scrubber systems.',
            image: '/services/retrofit/scrubber-installation-engineering2.png',
          },
        ],
      },
      {
        heading: 'Offshore Engineering',
        layout: 'image-right',
        body: 'At Green Ship Technologies, we specialize in offshore engineering solutions tailored to meet the diverse needs of projects in challenging marine environments, including oil and gas platforms, wind farms, and marine infrastructure.',
        items: [
          {
            title: 'MODU & Self-Elevating Platform Services',
            description: 'Comprehensive services for Mobile Offshore Drilling Units: stability analysis, inclining experiments, dead weight surveys, marine operational manuals, structural installation, FEM analysis, helideck analysis, and piping & electrical modifications.',
            image: '/services/offshore-engineering/Self-Elevating-Mobile-Offshore-Drilling-Units-Services.webp',
          },
          {
            title: 'Mooring & Motion Analysis',
            description: 'Analysis for all types of vessels with all kinds of design parameters, carried out per applicable codes with user-friendly reports for operational requirements.',
            image: '/services/offshore-engineering/Mooring-and-Motion-Analysis.webp',
          },
          {
            title: 'Pipe Lay Analysis',
            description: 'Pipe lay analysis per project design requirements — static and dynamic analysis — with user-friendly reports for operational requirements.',
            image: '/services/offshore-engineering/Pipe-Lay-Analysis.webp',
          },
          {
            title: 'Cable Lay Analysis',
            description: 'Analysis for all types of vessels with all design parameters; static and dynamic analysis with user-friendly reports for operational requirements.',
            image: '/services/offshore-engineering/Cable-Lay-Analysis.webp',
          },
          {
            title: 'Installation & Modification Studies',
            description: 'Turnkey studies supported by structural, mechanical, and electrical engineering capabilities — basic design through detailed engineering drawings, optimized for commercial and operational feasibility.',
            image: '/services/offshore-engineering/Installation-and-Modification-Studies.webp',
          },
          {
            title: 'Structural Stability Analysis',
            description: 'Structural analysis of various installations and equipment through FEM analysis, structural checks for various operational parameters, and stability analysis per design requirements.',
            image: '/services/offshore-engineering/Structural-Stability-Analysis.webp',
          },
          {
            title: 'Towage & Sea Fastening',
            description: 'Detailed analysis for all kinds of marine transportation per codes and practices of marine warranty requirements — towing plans, sea fastening designs, and assistance for warranty surveys.',
            image: '/services/offshore-engineering/Towage-transport.webp',
          },
        ],
      },
    ],
  },
  {
    slug: 'survey-certification',
    title: 'Survey & Certification',
    heroText: 'Comprehensive marine survey services tailored to meet the diverse needs of the maritime industry.',
    heroImage: '/services/Service3.webp',
    icon: 'ClipboardCheck',
    intro: 'At Green Ship Technologies, we specialize in delivering a comprehensive range of marine survey services, tailored to meet the diverse needs of our clients in the maritime industry. Our commitment to excellence, combined with the expertise of our highly skilled surveyors, ensures that every aspect of your vessel is thoroughly inspected and evaluated to the highest standards.',
    sections: [
      {
        heading: 'Marine Surveys',
        items: [
          {
            title: 'IHM Survey',
            description: 'Inventory of Hazardous Materials (IHM) survey for Hong Kong Convention compliance. IRS approved and ABS approved, with detailed onboard inventory, documentation review, and full certification support.',
            image: '/services/class-survey.webp',
          },
          {
            title: 'Pre-Purchase Survey',
            description: 'Conducted before the purchase of a vessel to provide the buyer with an assessment of the vessel\'s condition, seaworthiness, and value. Includes a thorough inspection of the hull, structure, machinery, equipment, and systems.',
            image: '/services/prepurchase-survey.webp',
          },
          {
            title: 'Condition Survey',
            description: 'Evaluates the overall condition of a vessel, identifying any defects, damages, or deficiencies that may affect its safety, performance, or value. Often conducted for insurance purposes, financing, or routine maintenance planning.',
            image: '/services/condotionsurvey.webp',
          },
          {
            title: 'On/Off Hire Survey',
            description: 'Specialized survey conducted to assess the condition of a vessel or marine equipment at the beginning (on-hire) and end (off-hire) of a charter or lease agreement — documenting condition and determining any changes or damages during the charter period.',
            image: '/services/on-offsurvey.webp',
          },
          {
            title: 'Towage Survey',
            description: 'Specialized inspection to assess the condition of a vessel or structure intended to be towed, as well as towing arrangements and equipment, ensuring safe and efficient towing operations and compliance with regulatory requirements.',
            image: '/services/towagesurvey.webp',
          },
          {
            title: 'Damage Survey',
            description: 'In the event of an accident, collision, or other incident resulting in damage to a vessel, a damage survey assesses the extent of the damage, determines the cause, and recommends necessary repairs or corrective actions.',
            image: '/services/damagesurvey.webp',
          },
          {
            title: 'Bunker Survey',
            description: 'Specialized inspection conducted to verify the quantity and quality of fuel (bunker) onboard a vessel — ensuring compliance with contractual agreements, preventing discrepancies, and mitigating risks associated with fuel procurement and consumption.',
            image: '/services/bunkersurvey.webp',
          },
          {
            title: 'Draft Survey',
            description: 'Critical assessment to determine the displacement of a vessel by measuring the change in draft before and after cargo loading or unloading — essential for accurately calculating cargo quantities, verifying weight compliance, and ensuring safe navigation.',
            image: '/services/draftsurvey.webp',
          },
          {
            title: 'Vessel Feasibility Survey',
            description: 'Comprehensive assessment to evaluate the suitability and viability of a vessel for a specific purpose or operation, identifying potential challenges, risks, or limitations for transportation, offshore operations, or specialized projects.',
            image: '/services/vesselfeasibilitysurvey.webp',
          },
        ],
      },
      {
        heading: 'Class & Statutory Surveys',
        layout: 'image-right',
        body: 'Class and statutory surveys are essential inspections conducted on ships to ensure compliance with international maritime regulations, classification society rules, and statutory requirements imposed by flag administrations. At Green Ship Technologies, our qualified and authorized surveyors — appointed by flag administrations, classification societies, and recognized organizations — undergo rigorous training and certification to conduct surveys in accordance with relevant international conventions, regulations, and standards.',
        items: [
          {
            title: 'Comprehensive Assessments',
            description: 'Our experienced surveyors conduct thorough inspections of your vessels, covering all aspects of design, construction, and maintenance in accordance with classification society rules.',
            image: '/services/comprehensive-assessments.webp',
          },
          {
            title: 'Regular Monitoring',
            description: 'Class surveys are conducted at regular intervals throughout the vessel\'s life cycle to verify continuous compliance with classification rules, standards, and statutory requirements.',
            image: '/services/regular-monitoring.webp',
          },
          {
            title: 'Structural Integrity',
            description: 'We assess the structural integrity, stability, and seaworthiness of your vessels, providing confidence in their ability to withstand the rigors of maritime operations.',
            image: '/services/structural-integrity.webp',
          },
          {
            title: 'Regulatory Compliance',
            description: 'Our statutory surveys are designed to verify compliance with a wide range of regulatory requirements, including SOLAS, MARPOL, STCW, and more — mandated by flag administrations and regulatory authorities.',
            image: '/services/regulatory-compliance.webp',
          },
          {
            title: 'Flag State Requirements',
            description: 'We work closely with flag administrations to ensure that your vessels meet all flag state regulations, obligations, and certification standards.',
            image: '/services/flag-state-requirements.webp',
          },
          {
            title: 'Port State Control Readiness',
            description: 'Our surveys help prepare your vessels for port state control inspections, minimizing the risk of delays, detentions, or penalties.',
            image: '/services/port-state-control.webp',
          },
        ],
      },
      {
        heading: 'Flag State Inspection Services',
        body: 'At Green Ship Technologies, we offer comprehensive flag state inspection services to ensure that vessels comply with the regulations and requirements of their respective flag administrations. Our flag state inspection services are designed to verify the seaworthiness, safety, and regulatory compliance of vessels, helping shipowners and operators navigate the complex regulatory landscape of the maritime industry.',
        items: [
          {
            title: 'Regulatory Compliance Verification',
            description: 'Our experienced surveyors conduct thorough inspections to verify compliance with the regulations and requirements of the flag state administration. This includes assessing adherence to safety standards, operational procedures, crew qualifications, and documentation.',
            image: '/services/regulatory-compliance-verification.webp',
          },
          {
            title: 'Safety & Environmental Compliance',
            description: 'We assess vessels for compliance with safety and environmental regulations, including those related to pollution prevention, emergency response preparedness, and environmental management practices. Our inspections help ensure that vessels meet the highest standards of safety and environmental stewardship.',
            image: '/services/Safety-and-Environmental-Compliance.webp',
          },
          {
            title: 'Documentation Review',
            description: 'We meticulously review vessel documentation, certificates, records, and logs to ensure accuracy, completeness, and compliance with regulatory requirements. This includes verifying the validity of certificates, licenses, and permits required for vessel operation.',
            image: '/services/Documentation-Review.webp',
          },
          {
            title: 'Risk Assessment',
            description: 'We identify potential risks, hazards, and deficiencies during inspections and provide recommendations for corrective actions to mitigate risks and ensure compliance. Our goal is to help shipowners and operators maintain the highest levels of safety, operational efficiency, and regulatory compliance.',
            image: '/services/Risk-Assessment.webp',
          },
          {
            title: 'Consultation & Guidance',
            description: 'Our team of experts provides consultation and guidance to shipowners and operators on regulatory requirements, compliance strategies, and best practices. We work closely with clients to address any compliance issues, develop action plans, and implement solutions to achieve regulatory compliance.',
            image: '/services/Consultation-and-Guidance.webp',
          },
        ],
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
    intro: "At Green Ship Technologies, we're dedicated to driving sustainability in the maritime industry. With a focus on integrating renewable energy solutions into ship operations, we empower shipowners and operators to embrace environmentally responsible practices. Our collaborative approach, combined with our unwavering commitment to environmental responsibility, ensures that we deliver innovative solutions that meet the unique needs of our clients.",
    sections: [
      {
        heading: 'Floating Solar System Design',
        body: 'Floating solar photovoltaic (PV) systems involve installing solar panels on bodies of water, such as lakes, reservoirs, or offshore areas. These systems offer several advantages, including utilizing otherwise unused space, reducing water evaporation, and minimizing land-use conflicts. Design considerations include the choice of floatation materials, anchoring systems, durability against environmental factors (such as waves, wind, and corrosion), and optimization of panel orientation for maximum energy production. Factors like water depth, water quality, and ecosystem impacts are carefully assessed during the design phase to ensure environmental compatibility and project feasibility.',
        items: [
          { title: 'Site Assessment', description: 'Water depth assessment, quality evaluation, and ecosystem impact analysis to ensure environmental compatibility and optimal system placement.', image: '/services/r1-1.webp' },
          { title: 'System Design', description: 'Custom floating solar system design accounting for waves, wind, corrosion, and marine environmental factors — with optimized panel orientation for maximum energy production.', image: '/services/r2-1.webp' },
        ],
      },
      {
        heading: 'Offshore Engineering',
        layout: 'image-right',
        body: 'Offshore engineering involves the design, construction, installation, and maintenance of renewable energy infrastructure in offshore environments, such as wind farms, wave energy converters, and tidal energy installations. Challenges include dealing with harsh marine conditions — strong winds, high waves, corrosive saltwater, and variable seabed conditions. Our engineering solutions focus on designing robust structures, such as offshore wind turbine foundations or floating platforms, that can withstand these conditions while ensuring safe and efficient operation and minimizing environmental impacts.',
        items: [
          { title: 'Offshore Structure Design', description: 'Robust structural designs for offshore renewable energy installations in challenging marine environments — engineered to withstand harsh conditions including high waves, wind loads, and corrosive saltwater.', image: '/services/offshore.webp' },
          { title: 'Installation Engineering', description: 'Safe and efficient installation planning and supervision for offshore renewable energy projects, including coordination of marine vessels, lifting operations, and seabed preparation.', image: '/services/installation.webp' },
          { title: 'Operations & Maintenance', description: 'Ongoing support ensuring optimal performance and longevity of offshore energy infrastructure through planned maintenance programs and responsive technical assistance.', image: '/services/maintainance.webp' },
        ],
      },
      {
        heading: 'Wind Farm Engineering Support',
        body: 'Wind farm engineering support encompasses various activities aimed at optimizing the performance, reliability, and safety of offshore and onshore wind energy projects. This includes site assessment and selection, wind resource evaluation, turbine selection, layout optimization, foundation design, and electrical system design. Engineering support also involves ongoing monitoring, maintenance, and troubleshooting to ensure the long-term viability and profitability of wind farm operations.',
        items: [
          { title: 'Site Assessment & Selection', description: 'Wind resource evaluation and site suitability analysis for offshore and onshore wind farm development, identifying optimal locations for maximum energy yield.', image: '/services/r3-1.webp' },
          { title: 'Turbine & Layout Optimization', description: 'Turbine selection, layout optimization, and foundation design to maximize energy production while minimizing wake losses and structural loads.', image: '/services/Service4.webp' },
          { title: 'Electrical System Design', description: 'Inter-array cabling, substation design, and grid connection engineering for reliable power transmission from offshore wind installations to shore.', image: '/services/solar.jpeg' },
          { title: 'Monitoring & Maintenance', description: 'Long-term performance monitoring, troubleshooting, and preventive maintenance planning to ensure the ongoing viability and profitability of wind farm operations.', image: '/services/r2-1.webp' },
        ],
      },
    ],
  },
  {
    slug: 'ship-broking-chartering',
    title: 'Ship Broking & Chartering',
    heroText: 'Facilitating vessel sales, purchases, and chartering arrangements across global maritime markets.',
    heroImage: '/services/ship-broking.png',
    icon: 'Handshake',
    intro: 'At Green Ship Technologies, we specialize in facilitating the sale and purchase of a diverse range of vessels worldwide. With our extensive network of global associates and industry expertise, we offer top-tier brokerage services tailored to meet the unique needs of our clients. Whether you\'re looking to sell a vessel or acquire a new one, we provide comprehensive brokerage services tailored to your specific needs — from market analysis and valuation to negotiation and documentation, handling every aspect of the transaction with precision and professionalism.',
    sections: [
      {
        heading: 'Our Brokerage Services',
        items: [
          {
            title: 'Vessel Sales',
            description: 'Whether you are looking to sell a single vessel or an entire fleet, we will work tirelessly to find the right buyer and negotiate the best possible terms on your behalf.',
            image: '/services/V-sales.webp',
          },
          {
            title: 'Vessel Purchases',
            description: 'If you are in the market to purchase a vessel, our team will leverage our extensive network and industry connections to help you find the perfect vessel that meets your requirements and budget.',
            image: '/services/Vessel-purchase.webp',
          },
          {
            title: 'Market Analysis & Valuation',
            description: 'We provide comprehensive market analysis and valuation services to help you make informed decisions and maximize the value of your vessel.',
            image: '/services/Market.webp',
          },
        ],
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
    intro: 'At Green Ship Technologies, we provide comprehensive flag registration services to assist shipowners and operators in registering their vessels under the flag of their choice. Our flag registration services are designed to streamline the registration process, ensure compliance with flag state requirements, and facilitate smooth operations for our clients. We are committed to simplifying the ship registration process and empowering our clients to navigate the complexities of maritime regulations with confidence.',
    sections: [
      {
        heading: 'Our Registration Services',
        items: [
          {
            title: 'Flag Selection Assistance',
            description: 'We provide expert guidance to help clients select the most suitable flag for their vessels based on factors such as regulatory requirements, operational preferences, and commercial considerations. Our team conducts thorough research and analysis to ensure that clients make informed decisions regarding flag selection.',
            image: '/services/flag.jpg',
          },
          {
            title: 'Regulatory Guidance',
            description: 'Our team provides expert guidance on regulatory requirements, procedures, and best practices related to flag registration. We keep clients informed about any changes or updates to flag state regulations that may impact their vessels and operations, ensuring ongoing compliance and adherence to regulatory standards.',
            image: '/services/statutory-surveys.webp',
          },
          {
            title: 'Registration Process Management',
            description: 'We manage the entire flag registration process on behalf of our clients, handling all paperwork, documentation, and communications with flag state authorities. Our experienced team ensures that all required forms are completed accurately and submitted in a timely manner to expedite the registration process.',
            image: '/services/vessel1.webp',
          },
          {
            title: 'Document Preparation',
            description: 'We assist clients in preparing all necessary documentation for flag registration, including application forms, declarations, affidavits, and supporting documents. Our meticulous attention to detail helps minimize errors and delays in the registration process, ensuring smooth and efficient processing by flag state authorities.',
            image: '/services/Documentation-Review.webp',
          },
          {
            title: 'Compliance Verification',
            description: 'We conduct comprehensive reviews of vessel documentation, certificates, and records to verify compliance with flag state requirements. This includes ensuring that vessels meet eligibility criteria — safety standards, equipment requirements, and crew qualifications — as specified by the chosen flag administration.',
            image: '/services/regulatory-compliance.webp',
          },
          {
            title: 'Communication & Coordination',
            description: 'We serve as a liaison between clients and flag state authorities, facilitating communication and coordination throughout the registration process. Our team promptly addresses any queries or concerns raised by flag state authorities and provides timely updates to clients on the status of their registration applications.',
            image: '/services/Consultation-and-Guidance.webp',
          },
        ],
      },
    ],
    flags: ['Panama', 'Liberia', 'Palau', 'St. Kitts & Nevis', 'Comoros', 'Cook Islands', 'Belize', 'Sierra Leone', 'Tanzania', 'St. Vincent & the Grenadines'],
  }
];
