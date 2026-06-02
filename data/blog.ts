export interface BlogSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'highlight';
  content?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  tags: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-vessel-stability-software-is-critical',
    title: 'Why Vessel Stability Software Is Critical for Modern Ships',
    metaDescription: 'Learn why class-approved loadicator software like Ecoloadmaster is essential for real-time vessel stability, trim optimisation, and SOLAS compliance on modern commercial ships.',
    excerpt: 'Stability miscalculations have contributed to some of the worst maritime disasters in recent decades. Here is how modern loadicator software eliminates those risks — and why class societies now require it on most commercial vessels.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=630&auto=format&fit=crop&q=80',
    category: 'Marine Software',
    readTime: '7 min read',
    publishedDate: 'May 15, 2025',
    author: 'Green Ship Technologies',
    tags: ['Stability Software', 'Ecoloadmaster', 'Vessel Safety', 'Loadicator', 'Maritime Compliance'],
    sections: [
      { type: 'p', content: 'When the MV Derbyshire sank in 1980 with the loss of all 44 crew, structural overloading under extreme sea conditions was a central factor. Decades later, stability failures and improper loading remain among the top causes of cargo vessel casualties recorded by the IMO. The difference between those incidents and what happens on a well-managed ship today often comes down to one thing — how loading decisions are made in real time.' },
      { type: 'p', content: 'At Green Ship Technologies, we developed Ecoloadmaster after working directly with shipowners who were still using printed stability booklets and spreadsheet calculations for vessels carrying 50,000 DWT and more. The risk was obvious; the solution needed to be fast, accurate, and accepted by class. That is exactly what we built.' },
      { type: 'h2', content: 'What a Loadicator Actually Does (Beyond the Textbook Definition)' },
      { type: 'p', content: 'A loading computer does not just crunch numbers — it translates your current cargo plan into a live picture of how the vessel sits in the water, how hard the hull is working, and whether you have enough reserve stability to survive unexpected weather. It pulls the vessel\'s hydrostatic data and pre-approved loading conditions from its stability booklet and calculates GM, GZ curves, shear forces, and bending moments against your actual cargo distribution — in seconds rather than hours.' },
      { type: 'p', content: 'Without that tool, a chief officer planning a complex multi-port loading sequence has to either work from conservative pre-approved conditions (which often means leaving cargo behind) or risk a departure condition that has not been properly verified.' },
      { type: 'h2', content: 'The Hidden Cost of Manual Calculations' },
      { type: 'ul', items: [
        'A single transposition error in a cargo weight can flip a stable GM into a dangerous figure — software catches it instantly',
        'Manual calculations cannot easily model free surface effects across multiple slack tanks simultaneously',
        'Port state control inspectors increasingly check for a functioning, class-approved loadicator — deficiency notices are common where software is absent or outdated',
        'Voyage-optimised trim calculations (reducing hull resistance by 1–2%) are only practical with software — the fuel savings on a Panamax bulk carrier can exceed $100,000 per year',
        'Crew changes mean stability knowledge walks off the gangway — software provides consistent, documented calculations regardless of who is on the bridge'
      ]},
      { type: 'h2', content: 'What Makes Ecoloadmaster Different' },
      { type: 'h3', content: 'Built Around the Vessel\'s Approved Stability Booklet' },
      { type: 'p', content: 'Every Ecoloadmaster installation is configured specifically for your vessel — using the approved hydrostatic tables, KN curves, and loading conditions from the class-approved stability booklet. There are no generic templates. When a class society reviews the installation, they are checking software that reflects the actual vessel, not an approximation.' },
      { type: 'h3', content: 'Intact and Damage Stability in One Interface' },
      { type: 'p', content: 'Officers can switch between intact stability assessment and SOLAS damage stability analysis without changing programs. The damage stability module simulates compartment flooding scenarios and calculates residual GZ curves against the applicable convention — critical for passenger vessels and tankers with subdivision requirements.' },
      { type: 'h3', content: 'Longitudinal Strength Monitoring' },
      { type: 'p', content: 'Excessive bending moment or shear force at a critical section is one of the less-visible loading risks. Ecoloadmaster plots the full shear force and bending moment envelope against the class-approved permissible limits and flags exceedances before departure — not after the hull has been overstressed.' },
      { type: 'h2', content: 'Vessel Types We Have Configured Ecoloadmaster For' },
      { type: 'ul', items: [
        'VLCC and Aframax crude oil tankers',
        'Handymax and Capesize bulk carriers',
        'Multipurpose and heavy-lift vessels',
        'Offshore support and anchor-handling tug supply vessels',
        'Pipelay barges and accommodation vessels',
        'Ro-Ro and pure car and truck carriers'
      ]},
      { type: 'h2', content: 'Requesting a Demo or Class Approval Support' },
      { type: 'p', content: 'Green Ship Technologies handles the full process: vessel data collection, software configuration, class submission and approval, onboard installation, and crew familiarisation training. We have approval track records with IRS, ABS, DNV, and Lloyd\'s Register. Contact our team to discuss your fleet\'s specific requirements.' },
    ],
  },
  {
    id: '2',
    slug: 'complete-guide-to-flag-registration',
    title: 'Complete Guide to Flag Registration: Choosing the Right Maritime Registry',
    metaDescription: 'Compare Panama, Liberia, Palau, and other open registries for vessel registration. Practical guidance from Green Ship Technologies on costs, compliance, and choosing the right flag state.',
    excerpt: 'The flag your vessel flies determines its tax exposure, crew requirements, PSC inspection risk, and commercial flexibility for years. Choosing wrong is an expensive mistake. Here is how to choose right.',
    image: '/services/flag.png',
    category: 'Flag Registration',
    readTime: '9 min read',
    publishedDate: 'May 10, 2025',
    author: 'Green Ship Technologies',
    tags: ['Flag Registration', 'Panama Registry', 'Liberia Registry', 'Open Registry', 'Maritime Law'],
    sections: [
      { type: 'p', content: 'Shipowners registering a vessel for the first time — or re-flagging an existing one — face a choice between more than 30 active ship registries worldwide. The wrong decision can mean unexpected annual fees, crew nationality restrictions that limit your hiring pool, or a flag state with a poor Paris MoU or Tokyo MoU white list performance that triggers additional PSC scrutiny at every port call.' },
      { type: 'p', content: 'Green Ship Technologies has managed flag registrations across ten major registries for clients ranging from single-vessel owners to mid-size fleets. The patterns we see in those decisions — and the mistakes we help clients avoid — form the basis of this guide.' },
      { type: 'h2', content: 'What Flag Registration Actually Controls' },
      { type: 'p', content: 'A vessel\'s flag state is its legal jurisdiction at sea. The flag administration issues the vessel\'s statutory certificates (Safety Management Certificate, MARPOL certificates, Load Line Certificate), sets the minimum crewing standard through its Manning Certificate, and is responsible for enforcing IMO conventions on vessels in its registry. Critically, the flag state\'s PSC performance record directly affects how often your vessel is targeted for inspections in foreign ports.' },
      { type: 'h2', content: 'The Four Factors That Actually Drive Registry Choice' },
      { type: 'h3', content: '1. Total Annual Cost' },
      { type: 'p', content: 'Registration fees vary significantly. Panama charges based on vessel GRT with annual tonnage taxes that are among the lowest globally. Liberia structures fees similarly but with a slight premium for its recognised organisation network and faster survey response times. Smaller registries like Comoros or Belize may quote lower headline fees but factor in the practical costs of accessing their services for surveys and document endorsements outside their home jurisdictions.' },
      { type: 'h3', content: '2. PSC White List Status' },
      { type: 'p', content: 'Both the Paris MoU (covering European and North Atlantic ports) and the Tokyo MoU (Asia-Pacific) publish annual performance lists classifying flag states as white, grey, or black. A vessel flagged under a grey or black list registry faces a significantly higher probability of targeted inspection and detention. Panama, Liberia, and Marshall Islands consistently hold white list positions. Some smaller registries do not — a critical consideration if your vessel trades in Europe or Northeast Asia.' },
      { type: 'h3', content: '3. Crew Nationality Requirements' },
      { type: 'p', content: 'Some flag states require a minimum proportion of nationals among the crew — or impose restrictions on which nationalities may hold officer positions. Open registries like Panama and Liberia impose no such restrictions, giving shipowners full flexibility to crew from the global market. This matters significantly when optimising crew costs or operating specialised vessels requiring rare certificates.' },
      { type: 'h3', content: '4. Survey and Recognised Organisation Access' },
      { type: 'p', content: 'Large registries like Panama and Liberia have authorised a wide network of Classification Societies as Recognised Organisations to conduct surveys and issue certificates on their behalf. This means your vessel can complete its annual safety survey anywhere in the world through its class society without needing to fly a flag state surveyor in. Smaller registries with limited RO agreements can create practical difficulties for vessels on worldwide trading routes.' },
      { type: 'h2', content: 'Registry Profiles: What We Tell Our Clients' },
      { type: 'h3', content: 'Panama — The Established Choice' },
      { type: 'p', content: 'Panama is the largest registry by tonnage precisely because it is the lowest-friction option. Its legal framework is well understood by international banks, P&I clubs, and port authorities. Registration processing is efficient through the Panama Maritime Authority\'s SEGUMAR system, and its consular network provides document services in most major port cities. For most standard commercial vessel types, Panama is the default against which other registries are compared.' },
      { type: 'h3', content: 'Liberia — Preferred by Institutional Owners' },
      { type: 'p', content: 'Major shipping banks and private equity investors in shipping tend to prefer Liberia-flagged vessels because LISCR (the Liberia International Ship and Corporate Registry) has strong enforcement standards and consistent PSC performance. Liberia\'s recognition by all major P&I clubs and its streamlined certificate replacement service make it operationally straightforward for vessels in diverse trading patterns.' },
      { type: 'h3', content: 'Palau — A Practical Choice for Smaller Operators' },
      { type: 'p', content: 'The Palau International Ship Registry offers competitive fees and a simplified registration process that works particularly well for operators who want a white-list registry without the premium associated with Panama or Liberia. Green Ship Technologies manages Palau registrations directly with the registry administration, which typically results in faster turnaround on documentation than going through intermediary agents.' },
      { type: 'h2', content: 'What Green Ship Technologies Manages for You' },
      { type: 'ul', items: [
        'Registry selection advice based on your vessel type, trading area, crew profile, and financing arrangements',
        'Full document preparation — application forms, builder\'s certificates or deletion certificates, declarations, and crew affidavits',
        'Liaison with the registry administration and recognised organisation throughout the process',
        'Statutory certificate coordination with your class society',
        'Post-registration support including annual renewal management and certificate replacement'
      ]},
      { type: 'h2', content: 'Registries We Work With Directly' },
      { type: 'ul', items: ['Panama', 'Liberia', 'Palau', 'St. Kitts & Nevis', 'Comoros', 'Cook Islands', 'Belize', 'Sierra Leone', 'Tanzania', 'St. Vincent & the Grenadines'] },
    ],
  },
  {
    id: '3',
    slug: 'ship-design-engineering-modern-naval-architecture',
    title: 'Ship Design & Engineering: How Modern Naval Architecture Is Evolving',
    metaDescription: 'How BWTS retrofits, hybrid propulsion integration, and 3D laser scanning are reshaping ship design and naval architecture in 2025 — insights from Green Ship Technologies.',
    excerpt: 'The tools, rules, and constraints facing naval architects in 2025 look nothing like those of a decade ago. BWTS mandates, decarbonisation targets, and laser scanning technology have fundamentally changed how vessels are designed, modified, and certified.',
    image: '/services/shipdesign.jpeg',
    category: 'Ship Design',
    readTime: '8 min read',
    publishedDate: 'May 5, 2025',
    author: 'Green Ship Technologies',
    tags: ['Ship Design', 'Naval Architecture', 'BWTS', 'Hybrid Propulsion', 'Vessel Conversion'],
    sections: [
      { type: 'p', content: 'Ask a naval architect working in 2015 what their biggest technical challenges were, and you would have heard about hull form optimisation, structural scantlings, and stability calculations. Ask the same question today and the answers look completely different: integrating BWTS systems into engine rooms that were never designed to accommodate them, 3D laser scanning as-built vessels whose actual geometry differs significantly from their original drawings, and designing hybrid propulsion packages that must interface with dynamic positioning systems to class requirements.' },
      { type: 'p', content: 'Green Ship Technologies has worked through all of these challenges on real projects — including BWTS retrofits on 25-year-old tankers where the original drawings were incomplete, and OSV conversions where the as-built hull differed from the approved design by enough to require new stability calculations. Here is what that experience has taught us about where ship design is heading.' },
      { type: 'h2', content: 'Why Vessel Conversion Has Become a Strategic Priority' },
      { type: 'p', content: 'New vessel construction lead times at major yards are currently running at 2–3 years for most vessel types, and steel prices remain elevated. Against that backdrop, converting an existing vessel to a new purpose has become economically compelling for many operators. An AHTS vessel can be modified into an offshore wind farm service operation vessel (CSOV) for a fraction of a new build cost — but only if the engineering is done correctly.' },
      { type: 'p', content: 'Conversion projects are technically demanding precisely because the vessel was not designed for its new purpose. Deck strengthening for new crane pedestals, bulkhead modifications to create new accommodation spaces, propulsion changes to add DP2 capability — each requires detailed structural analysis, stability recalculation, and class approval before a single cut is made.' },
      { type: 'h2', content: 'BWTS Retrofit: The Engineering Challenge Nobody Warned the Industry About' },
      { type: 'p', content: 'The Ballast Water Management Convention\'s IOPP renewal deadline has created a massive retrofit workload across the global fleet. What operators often do not anticipate is how complex the installation engineering actually is. A UV-based BWTS unit with its associated pumps, filters, and control panels needs to fit into an engine room that was designed decades ago with no spare space for it.' },
      { type: 'p', content: 'Our approach starts with 3D laser scanning — taking a millimetre-accurate point cloud of the relevant spaces before any design work begins. This eliminates the most common and costly retrofit problem: discovering at the shipyard that a pipe run shown in the drawings conflicts with a beam or another system that was added later. With an accurate 3D model, we route pipe work, electrical cable trays, and BWTS components in the virtual space first, then produce the detailed drawings for class submission. The class approval process is faster because the design is buildable.' },
      { type: 'h2', content: 'Scrubber Installation Engineering' },
      { type: 'p', content: 'Exhaust Gas Cleaning Systems (EGCS) present an even more substantial engineering challenge than BWTS. A scrubber tower fitted to a large bulk carrier or tanker sits in the exhaust uptake path — the structural implications for the casing, mast, and funnel structure are significant, and weight and trim calculations must be rechecked after installation. We have completed scrubber installation engineering packages for vessels up to Capesize, including structural reinforcement design and the full stability impact assessment.' },
      { type: 'h2', content: 'Hybrid Propulsion — Where the Work Actually Happens' },
      { type: 'p', content: 'Hybrid diesel-electric propulsion is no longer experimental on offshore support vessels and tugs — it is increasingly standard in newbuild specifications and is being retrofitted to existing tonnage. The integration work requires electrical load analysis, battery system sizing, power management system programming, and DP system interface design. Getting this wrong affects station-keeping safety in offshore operations — the engineering tolerances are tight and the class approval process is rigorous.' },
      { type: 'h2', content: 'Vessels in Our Design Portfolio' },
      { type: 'ul', items: [
        'Well Stimulation and Hydraulic Fracturing Vessels',
        'Diesel Electric DP2 Field Support Vessels',
        'Offshore Construction Vessels with crane and ROV integration',
        'AHTS Vessels with battery hybrid propulsion packages',
        'Multipurpose Heavy Lift Vessels',
        'Small coastal passenger vessels for Indian waterways services'
      ]},
      { type: 'h2', content: 'Working With Green Ship Technologies on Your Design Project' },
      { type: 'p', content: 'Our naval architecture team uses NAPA, MAXSURF, CAESAR II, and AutoCAD as standard tools, with 3D laser scanning capability for retrofit and conversion projects. We manage class submissions directly with IRS, ABS, DNV, Lloyd\'s Register, and Bureau Veritas, and can advise on which class society is best suited to your vessel type and trading area. Contact us at the concept stage — the earlier we are involved, the more value we can add.' },
    ],
  },
  {
    id: '5',
    slug: 'floating-solar-offshore-wind-maritime-renewable-energy',
    title: 'Floating Solar & Offshore Wind: The Marine Engineering Behind the Energy Transition',
    metaDescription: 'What does it actually take to engineer a floating solar installation or offshore wind foundation? Green Ship Technologies explains the marine engineering challenges and how they are solved.',
    excerpt: 'Floating solar panels and offshore wind turbines look simple in promotional images. The engineering that keeps them operating safely in marine environments is anything but. Here is what the work actually involves.',
    image: '/services/solar.jpeg',
    category: 'Renewable Energy',
    readTime: '7 min read',
    publishedDate: 'April 20, 2025',
    author: 'Green Ship Technologies',
    tags: ['Floating Solar', 'Offshore Wind', 'Renewable Energy', 'Marine Engineering', 'Sustainability'],
    sections: [
      { type: 'p', content: 'Floating solar and offshore wind projects share a challenge that onshore renewable energy does not face: the marine environment is hostile to structures, equipment, and people in ways that require fundamentally different engineering approaches. Salt corrosion attacks electrical connections within months if the wrong materials are specified. Wave action creates fatigue loading on floating structures that must be modelled and designed for over a 25-year project life. Mooring systems that work on calm reservoir surfaces fail on coastal waters with tidal variation and storm surges.' },
      { type: 'p', content: 'Green Ship Technologies entered the renewable energy engineering space because these challenges sit squarely within naval architecture and offshore engineering — disciplines we have been applying to ships and offshore structures for years. The physics of a floating solar platform responding to wave loads is not fundamentally different from the analysis we run on a barge or FPSO. The difference is in the specific design codes, the environmental loads at the site, and the interface with the electrical systems.' },
      { type: 'h2', content: 'Floating Solar System Design: What the Engineering Covers' },
      { type: 'h3', content: 'Hydrodynamic and Structural Analysis' },
      { type: 'p', content: 'A floating solar array is a large, relatively flexible structure operating in a dynamic water environment. The design process starts with site metocean data — wave heights, periods, and directions; wind speeds; water depth and tidal range; and current velocities. We use this to define the design load cases, then analyse the floatation system and connecting structure to ensure fatigue life, ultimate strength, and serviceability requirements are met across all conditions.' },
      { type: 'h3', content: 'Mooring and Anchoring Design' },
      { type: 'p', content: 'The mooring system must hold the array on station across its full range of environmental conditions, including storm events, without transmitting loads that would damage the floatation modules or panel connections. For reservoirs and lakes, anchor blocks on the bed are typical. For coastal or estuarine locations, pile anchors or seabed anchors may be required. We design the mooring configuration, size the lines and connectors, and specify the anchoring system based on the seabed conditions at the specific site.' },
      { type: 'h3', content: 'Corrosion and Material Specification' },
      { type: 'p', content: 'Aluminium structures, HDPE floats, and marine-grade stainless steel fasteners are the standard material palette for floating solar in saline environments. The selection of each component must account for galvanic corrosion between dissimilar metals, UV degradation of polymer components, and biofouling on submerged surfaces. Our specifications draw on the same corrosion engineering principles applied to ship hull coatings and offshore structure cathodic protection.' },
      { type: 'h2', content: 'Offshore Wind Engineering: Where Marine Expertise Is Essential' },
      { type: 'p', content: 'Offshore wind turbine foundations represent some of the most demanding fatigue design problems in civil engineering. A monopile foundation for a 15MW turbine in 30m water depth is subjected to wave and current loading millions of times over its design life, combined with the dynamic forces from the rotating turbine above. The structural analysis requires soil-structure interaction modelling, fatigue life assessment per DNV standards, and detailed corrosion allowance calculations.' },
      { type: 'h3', content: 'Our Offshore Wind Scope of Work' },
      { type: 'ul', items: [
        'Site assessment, bathymetric survey review, and metocean data analysis',
        'Turbine array layout optimisation accounting for wake losses and cable routing',
        'Monopile, jacket, tripod, and gravity-base foundation design and analysis',
        'Inter-array and export cable route engineering',
        'Marine operations planning — installation vessel specification and lifting analysis',
        'Sea fastening design for turbine component transportation'
      ]},
      { type: 'h2', content: 'Why Naval Architecture Expertise Matters for Renewable Energy Projects' },
      { type: 'p', content: 'Renewable energy developers often discover late in a project that their civil engineering contractors lack the specific skills to design marine foundation interfaces, analyse transport loads for offshore equipment, or model the dynamic behaviour of floating structures. Bringing in Green Ship Technologies at the concept stage means these gaps are identified and addressed before they become programme-critical problems. We combine offshore engineering, structural analysis, and marine operations planning in one team.' },
    ],
  },
  {
    id: '6',
    slug: 'pre-purchase-vessel-survey-guide',
    title: 'Pre-Purchase Vessel Survey: What Every Shipowner Must Know Before Signing',
    metaDescription: 'What does a professional pre-purchase vessel survey actually cover, and what red flags should buyers watch for? Green Ship Technologies explains the complete inspection process.',
    excerpt: 'Vessels are bought on paper long before a surveyor steps aboard. By the time deficiencies are discovered after delivery, the seller\'s obligations have usually ended. A rigorous pre-purchase survey is the only reliable way to know what you are actually buying.',
    image: '/services/survey.jpeg',
    category: 'Survey & Certification',
    readTime: '8 min read',
    publishedDate: 'April 12, 2025',
    author: 'Green Ship Technologies',
    tags: ['Pre-Purchase Survey', 'Vessel Survey', 'Marine Inspection', 'Ship Purchase', 'Maritime Due Diligence'],
    sections: [
      { type: 'p', content: 'Ship sale and purchase negotiations move quickly. Owners present clean certificate records, satisfactory class status, and maintenance histories that look credible on paper. Brokers are motivated to close. Buyers under commercial pressure to secure tonnage can find themselves signing a Memorandum of Agreement with limited technical information about what they are actually acquiring.' },
      { type: 'p', content: 'The pre-purchase survey exists to fill that information gap — independently, before money changes hands. At Green Ship Technologies, our surveyors approach every pre-purchase inspection as if they were buying the vessel themselves: systematically, sceptically, and with specific attention to the deficiencies that sellers reliably omit from disclosure.' },
      { type: 'h2', content: 'What a Pre-Purchase Survey Covers in Practice' },
      { type: 'h3', content: 'Hull Structure and Steel Condition' },
      { type: 'p', content: 'Ultrasonic thickness gauging at representative locations across the hull plating, frames, and structural members is the core of any hull survey. We compare measured thicknesses against the vessel\'s original scantlings and the class society\'s allowable diminution limits. Areas with significant wastage — particularly internal tank surfaces, void spaces, and horizontal structure prone to water retention — are gauged more extensively. We document findings photographically and produce a thickness report that buyers can use in price negotiations or to plan steel renewal in the first dry-dock.' },
      { type: 'h3', content: 'Main Engine and Auxiliary Machinery' },
      { type: 'p', content: 'Running hours, crankshaft deflection readings, cylinder pressure records, and the last overhaul dates for main engine components tell us more about engine condition than a sea trial alone. We review the engineer\'s log, examine turbocharger condition, check the fuel and lube oil analysis records, and verify that planned maintenance is current. Generators, steering gear, bilge and ballast pumps, and cargo handling equipment are also tested and inspected.' },
      { type: 'h3', content: 'Class Status and Outstanding Conditions' },
      { type: 'p', content: 'A vessel\'s class extract is not the same as its true class status. Recommendations, conditions of class, and memoranda can represent significant deferred expenditure that does not appear in the headline class status. We obtain and review the full class history report, identify any outstanding items, and assess their cost and urgency. A vessel approaching a Special Survey with known structural issues may require dry-docking and substantial steel renewal — expenditure that the buyer needs to price into their offer.' },
      { type: 'h2', content: 'The Deficiencies That Sellers Reliably Do Not Disclose' },
      { type: 'ul', items: [
        'Temporary cosmetic repairs to internal tank coatings covering active corrosion underneath',
        'Main engine or generator running hours reset or under-reported in maintenance logs',
        'Class conditions accepted by the previous flag state that are not visible in a standard class extract',
        'Cargo hold or tank hatch cover seal deterioration causing water ingress — a major issue for bulk carriers',
        'Crew accommodation systems (air conditioning, hot water, sanitation) in disrepair — creating MLC exposure for the new owner',
        'Outstanding PSC deficiency notices that have been "cleared" on paper but not physically rectified'
      ]},
      { type: 'h2', content: 'Dry-Dock Survey: When It Is Worth Insisting On' },
      { type: 'p', content: 'For vessels over 15 years of age, or where the last dry-docking was more than 18 months ago, we recommend insisting on an underwater inspection as part of the pre-purchase process. Propeller blade condition, rudder pintle wear, sea chest and anti-fouling coating condition, and underwater hull plating that cannot be accessed afloat can conceal significant repair costs. Some sellers will resist dry-docking as a condition of inspection — that resistance itself is worth noting.' },
      { type: 'highlight', content: 'Green Ship Technologies conducts pre-purchase surveys independently of brokers, sellers, and classification societies. Our surveyors\' sole obligation is to the buyer — and our reports are written to say clearly what we found, not to smooth the path to a transaction.' },
      { type: 'h2', content: 'Using the Survey Report in Negotiations' },
      { type: 'p', content: 'A thorough survey report is a negotiating document as much as a technical one. Identified deficiencies can support a price reduction request, a requirement for specific repairs before delivery, or a buyer\'s decision to walk away from a vessel that looks acceptable on paper but is not at the price being asked. We are available to advise buyers on how to present survey findings in negotiations and what remediation costs are realistic for deficiencies identified.' },
    ],
  },
];
