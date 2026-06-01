import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Section from '@/components/Section';
import ProductTabs from '@/components/ProductTabs';
import { services } from '@/data/services';
import { subItemDetails } from '@/data/serviceDetails';
import { products } from '@/data/products';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

type Faq = { q: string; a: string };

const subitemFaqs: Record<string, Faq[]> = {
  'ecoloadmaster': [
    { q: 'What is a loadicator software for ships?', a: 'A loadicator (or loading computer) is onboard stability software that calculates vessel stability, trim, stress, and load conditions in real time. Ecoloadmaster by Green Ship Technologies is an advanced loadicator delivering class-compliant stability calculations for all vessel types.' },
    { q: 'Which vessel types does Ecoloadmaster support?', a: 'Ecoloadmaster supports bulk carriers, tankers, container ships, general cargo vessels, offshore support vessels, and more. Each installation is customised to the vessel\'s approved stability booklet.' },
    { q: 'Is Ecoloadmaster loading computer software class approved?', a: 'Yes. Ecoloadmaster is developed in accordance with classification society requirements and can be submitted for class approval for vessels that require an approved loading computer under their flag or class rules.' },
    { q: 'How is Ecoloadmaster installed on a vessel?', a: 'Ecoloadmaster is installed on the ship\'s bridge computer or a dedicated PC. Our team handles remote or onsite installation, calibration to the vessel\'s stability booklet, and crew training.' },
  ],
  'marine-custom-software-development': [
    { q: 'What types of custom maritime software can Green Ship Technologies develop?', a: 'We develop fleet management systems, voyage planning & optimization tools, planned maintenance systems (PMS), document management platforms, port & cargo operations software, and API integrations with third-party maritime systems.' },
    { q: 'Can you develop a planned maintenance system (PMS) for ships?', a: 'Yes. Our custom PMS solutions are aligned with class survey requirements and include scheduled maintenance tracking, spares management, defect reporting, and compliance documentation.' },
    { q: 'How long does it take to develop custom maritime software?', a: 'Development timelines vary by scope. A typical fleet management or PMS platform takes 3-6 months from requirement analysis to deployment. We follow an agile approach with regular client reviews.' },
  ],
  'ship-design': [
    { q: 'What ship design services are available in India?', a: 'Green Ship Technologies offers full-scope ship design services in India — new vessel concept and detailed design, ship conversion design, structural modifications, and class approval drawings — delivered by experienced naval architects using specialized marine software.' },
    { q: 'Can you design offshore support vessels (OSVs)?', a: 'Yes. Our naval architects have experience designing platform supply vessels (PSVs), anchor handling tug supply (AHTS) vessels, crew boats, and other offshore support vessel types.' },
    { q: 'What software do you use for ship design?', a: 'We use industry-standard naval architecture software including AutoCAD, NAPA, MAXSURF, and Rhino for hull form design, stability analysis, structural design, and 3D modelling.' },
  ],
  'retrofit-conversion': [
    { q: 'What is BWTS installation engineering for an existing vessel?', a: 'BWTS (Ballast Water Treatment System) installation engineering covers the full retrofit process — vessel feasibility inspection, 3D laser scanning of ballast spaces, detailed design and piping drawings, class approval submission, and installation supervision at the shipyard or in port.' },
    { q: 'What is the BWM Convention D-2 standard and who must comply?', a: 'The IMO Ballast Water Management (BWM) Convention D-2 standard limits the number of living organisms permitted in discharged ballast water. All ships in international trade must comply by fitting an approved BWTS by their IOPP renewal survey date.' },
    { q: 'What engineering is required for scrubber (EGCS) installation on a ship?', a: 'Scrubber installation requires vessel feasibility assessment, 3D laser scanning of the engine room, exhaust uptake route design, structural and weight calculations, class approval drawings, and installation supervision. Green Ship Technologies manages the complete engineering package.' },
    { q: 'How long does a BWTS retrofit project take?', a: 'Typical BWTS retrofit engineering takes 4-8 weeks from vessel inspection to class-approved drawings. Actual shipyard installation takes 1-3 weeks depending on the BWTS type and vessel size.' },
  ],
  'offshore-engineering': [
    { q: 'What offshore engineering services does Green Ship Technologies provide?', a: 'We provide MODU and self-elevating platform services, mooring and motion analysis, pipe and cable lay analysis, installation and modification studies, structural and FEM analysis, and towage and sea fastening engineering.' },
    { q: 'What is mooring analysis for offshore vessels and FPSOs?', a: 'Mooring analysis evaluates the forces on a vessel\'s mooring system under environmental loads (wind, waves, current) to ensure the mooring design is safe and adequate for the operational location and conditions.' },
    { q: 'What is sea fastening analysis for marine transportation?', a: 'Sea fastening analysis determines the structural requirements for securing cargo (modules, equipment, structures) on a transport vessel for an ocean voyage, complying with marine warranty surveyor and classification society requirements.' },
  ],
  'ihm-surveys': [
    { q: 'What is an IHM survey and why is it required?', a: 'An Inventory of Hazardous Materials (IHM) survey is a systematic inspection of a ship\'s structure and equipment to identify and document materials containing substances such as asbestos, PCBs, and heavy metals. It is required under the Hong Kong Convention for Safe and Environmentally Sound Recycling of Ships and is increasingly mandated by flag states, port states, and charterers.' },
    { q: 'Is IHM mandatory for all ships?', a: 'IHM is mandatory for ships over 500 GT engaged in international voyages under the Hong Kong Convention. Many flag states, P&I clubs, and major charterers now require IHM compliance as part of their due diligence and ESG requirements, regardless of convention ratification.' },
    { q: 'Who is approved to conduct IHM surveys in India?', a: 'Green Ship Technologies is approved by IRS (Indian Register of Shipping) and ABS (American Bureau of Shipping) to conduct IHM surveys. Our IHM specialists perform onboard inspections, documentation review, and provide complete IHM certification.' },
    { q: 'What is the difference between IHM Part I, Part II, and Part III?', a: 'IHM Part I covers hazardous materials in the ship\'s structure and equipment. Part II covers operationally generated wastes. Part III covers stores. The Hong Kong Convention primarily addresses Part I, which must be certified by the flag state administration or a recognised organisation.' },
    { q: 'How long does an IHM survey take?', a: 'An IHM onboard inspection typically takes 3-5 working days depending on vessel size and type. The complete process including sample analysis, documentation, and certification normally takes 3-6 weeks.' },
  ],
  'marine-surveys': [
    { q: 'What is a pre-purchase ship survey?', a: 'A pre-purchase survey is a comprehensive inspection of a vessel\'s hull, machinery, equipment, and documentation conducted before a sale. It identifies defects, estimates repair costs, and helps buyers assess the vessel\'s condition and fair market value.' },
    { q: 'What is an on/off hire condition survey?', a: 'An on-hire survey documents a vessel\'s condition at the commencement of a charter, and an off-hire survey at the end, to determine what damage or deterioration occurred during the charter period for commercial settlement between owners and charterers.' },
    { q: 'How is a draft survey conducted for bulk carriers?', a: 'A draft survey determines bulk cargo quantity by measuring the vessel\'s draft forward, aft, and midship before and after loading or discharging, then calculating the change in displacement. It is widely used for coal, grain, and ore cargoes.' },
    { q: 'What is a bunker survey and when is it required?', a: 'A bunker survey measures and verifies the quantity (and often quality) of fuel oil on board or transferred. It is required during vessel deliveries, redeliveries, bunker transfers, and whenever disputes arise between owners, charterers, or bunker suppliers.' },
  ],
  'class-statutory-surveys': [
    { q: 'What is the difference between a class survey and a statutory survey?', a: 'A class survey is conducted by a classification society to maintain a vessel\'s class notation, verifying structural and mechanical condition. A statutory survey is conducted on behalf of the flag state to verify compliance with international conventions such as SOLAS, MARPOL, and STCW. Many vessels require both.' },
    { q: 'What SOLAS surveys are required for ships?', a: 'SOLAS requires periodic safety equipment surveys (life-saving appliances, fire-fighting equipment), radio surveys, and cargo ship safety construction surveys at specified intervals. These are mandatory for all ships engaged in international voyages.' },
    { q: 'What is port state control (PSC) and how can deficiencies be avoided?', a: 'Port State Control is the inspection of foreign vessels in national ports to verify compliance with international maritime conventions. Common PSC deficiencies include expired certificates, defective fire and safety equipment, crew certification issues, and ISM non-conformities. Green Ship Technologies provides PSC readiness assessments to prepare vessels.' },
  ],
  'flag-state-inspections': [
    { q: 'What is a flag state inspection?', a: 'A flag state inspection verifies that a vessel and its crew meet all requirements of the flag state administration and applicable international conventions, including SOLAS, MARPOL, MLC, and STCW.' },
    { q: 'How do I prepare for a Port State Control (PSC) inspection?', a: 'PSC preparation involves auditing all statutory certificates for validity, ensuring safety equipment is operational and documented, verifying crew certificates and watchkeeping arrangements, and conducting emergency drills. Green Ship Technologies provides comprehensive pre-PSC assessments.' },
    { q: 'What are common reasons for PSC vessel detention?', a: 'Common PSC detention grounds include expired or defective fire and life-saving appliances, ISM non-conformities, crew certificate deficiencies, inadequate working and rest hours records, and defective navigation equipment.' },
  ],
  'floating-solar-system-design': [
    { q: 'What is floating solar system design?', a: 'Floating solar (FPV) system design covers the engineering of photovoltaic panel arrays mounted on floating platforms on water bodies. It includes site hydrodynamic assessment, floatation and mooring system design, structural analysis, panel orientation optimisation, and environmental impact assessment.' },
    { q: 'What marine engineering standards apply to floating solar systems?', a: 'Floating solar systems on open water bodies must comply with relevant classification society guidance, IEC standards for PV systems, and local environmental regulations. Marine engineering inputs include wave and current loading, corrosion protection, and anchoring design for the specific water body.' },
    { q: 'What water bodies are suitable for floating solar installations?', a: 'Floating solar is suitable for lakes, reservoirs, irrigation ponds, hydropower reservoirs, and calm coastal or estuarine areas. Suitability depends on water depth, wave conditions, water quality, and proximity to grid connection.' },
  ],
  'wind-farm-engineering-support': [
    { q: 'What offshore wind farm engineering services do you offer in India?', a: 'Green Ship Technologies provides site assessment and selection, turbine layout optimisation, offshore foundation design, electrical system and grid connection engineering, marine transportation engineering, and long-term monitoring and maintenance planning for offshore wind projects.' },
    { q: 'What types of offshore wind foundations can you design?', a: 'We support monopile, jacket, tripod, gravity-base, and floating offshore wind foundation concepts. Foundation type selection depends on water depth, seabed conditions, wave and wind loading, and project economics.' },
  ],
  'sale-purchase-brokering': [
    { q: 'What does a ship sale and purchase broker do?', a: 'A ship S&P broker acts as an intermediary between buyers and sellers of vessels. They identify suitable vessels, conduct market analysis and valuation, negotiate terms on behalf of clients, draft MOAs (Memoranda of Agreement), and manage the transaction through to delivery.' },
    { q: 'How is vessel value determined in a sale and purchase transaction?', a: 'Vessel value is assessed through market comparable analysis (recent sales of similar vessels), condition survey findings, age and remaining useful life, current freight market conditions, and any outstanding class or repair requirements.' },
  ],
  'chartering-brokers': [
    { q: 'What is the difference between voyage charter and time charter?', a: 'In a voyage charter, the shipowner provides the vessel for a specific voyage and voyage costs are the owner\'s responsibility. In a time charter, the charterer hires the vessel for a period and pays hire plus voyage costs (fuel, port charges). Each structure has different risk and cost implications.' },
    { q: 'What is a bareboat charter?', a: 'A bareboat (or demise) charter is where the charterer takes full operational and navigational control of the vessel, hiring the hull alone without crew or management. The charterer operates the vessel as if they were the owner for the charter period.' },
    { q: 'What is post-fixture management in ship chartering?', a: 'Post-fixture management covers all commercial and operational activities after a charter party is agreed — including hire payments, voyage instructions, cargo claims, laytime and demurrage calculations, and dispute resolution.' },
  ],
};

type HowToStep = { name: string; text: string };
type HowTo = { name: string; description: string; totalTime?: string; steps: HowToStep[] };

const subitemHowTo: Record<string, HowTo> = {
  'ihm-surveys': {
    name: 'How to Complete an IHM Survey for Hong Kong Convention Compliance',
    description: 'Step-by-step process for conducting an Inventory of Hazardous Materials (IHM) survey on a commercial vessel — from initial documentation review through to certification.',
    totalTime: 'P4W',
    steps: [
      { name: 'Initial Document Review', text: 'Green Ship Technologies reviews the vessel\'s construction plans, equipment lists, paint records, and any existing hazardous materials documentation to identify likely locations of regulated substances.' },
      { name: 'Onboard Visual Inspection', text: 'Our approved IHM surveyor conducts a systematic visual inspection of all ship areas, identifying materials suspected to contain asbestos, PCBs, lead-based paint, TBT, and other listed hazardous substances per IHM Guidelines.' },
      { name: 'Sample Collection and Analysis', text: 'Where visual inspection is inconclusive, representative samples are collected from suspect materials and sent to an accredited laboratory for chemical analysis (XRF, WDXRF, or wet chemistry as appropriate).' },
      { name: 'Compilation of IHM Part I', text: 'Laboratory results and inspection findings are compiled into the formal IHM Part I document, listing all identified hazardous materials with location, approximate quantity, and condition.' },
      { name: 'Documentation Review and Approval', text: 'The completed IHM and supporting evidence are submitted to the flag state administration or recognised organisation (e.g. IRS or ABS) for review and approval of the IHM Statement of Compliance.' },
      { name: 'Certification Issued', text: 'Upon approval, the vessel receives its IHM Statement of Compliance, valid for up to five years with periodic updates required whenever significant alterations or repairs affect the hazardous materials inventory.' },
    ],
  },
  'retrofit-conversion': {
    name: 'How a BWTS Retrofit Engineering Project Works',
    description: 'End-to-end engineering process for retrofitting a Ballast Water Treatment System (BWTS) on an existing commercial vessel, from feasibility to class-approved installation.',
    totalTime: 'P8W',
    steps: [
      { name: 'Vessel Feasibility Assessment', text: 'Our engineers review general arrangement drawings, ballast system P&IDs, and engine room layouts to assess available space, pipe routing, and power supply options for the selected BWTS technology.' },
      { name: '3D Laser Scanning', text: 'The vessel\'s ballast spaces, engine room, and proposed installation areas are 3D laser-scanned to produce an accurate as-built model, eliminating site dimension errors and reducing shipyard rework.' },
      { name: 'BWTS Selection and Engineering Design', text: 'Based on ballast water capacity, vessel trading pattern, and shipowner preference, an appropriate BWTS is selected. Detailed engineering drawings are produced: piping arrangement, structural modifications, cable routing, and weight & stability impact calculations.' },
      { name: 'Class Approval Submission', text: 'Engineering drawings and calculations are submitted to the vessel\'s classification society for plan approval. Comments are addressed and the final approved drawing set is issued.' },
      { name: 'Shipyard Installation Support', text: 'Our team provides on-site installation supervision at the shipyard or during dry-dock to ensure work is executed in accordance with the approved drawings and BWTS maker\'s guidelines.' },
      { name: 'Commissioning and Sea Trials', text: 'After installation, the BWTS is functionally tested, commissioned, and its performance documented. The classification society surveyor attends for final inspection and endorsement of the BWTS IOPP certificate.' },
    ],
  },
  'flag-state-inspections': {
    name: 'How to Prepare for a Flag State or Port State Control Inspection',
    description: 'A practical step-by-step guide to preparing a vessel for flag state and PSC inspections, minimising the risk of deficiencies and detention.',
    totalTime: 'P2W',
    steps: [
      { name: 'Certificate and Document Audit', text: 'All statutory certificates (SOLAS, MARPOL, MLC, Load Line) and class certificates are audited for validity. Missing or near-expiry certificates are identified and renewal initiated with flag state or classification society.' },
      { name: 'Safety Equipment Check', text: 'Life-saving appliances (lifeboats, rescue boats, life rings, EPIRBs, SARTs), fire-fighting equipment, and navigation equipment are inspected, tested, and serviced as required. Maintenance records are updated.' },
      { name: 'ISM SMS Compliance Review', text: 'The vessel\'s Safety Management System documentation — drill records, non-conformity reports, master\'s review, and critical equipment list — is reviewed for completeness and up-to-date entries.' },
      { name: 'Crew Certification and Rest Hours Verification', text: 'STCW certificates and medical certificates for all crew are verified against the vessel\'s Manning Certificate. Work and rest hour records are reviewed for compliance with MLC and STCW requirements.' },
      { name: 'MARPOL and Pollution Prevention Records', text: 'Oil Record Book, Garbage Management Plan, sewage system, ozone-depleting substance records, and EGCS wash water discharge logs (if applicable) are reviewed and corrected where necessary.' },
      { name: 'Pre-Inspection Familiarisation Drill', text: 'An emergency drill covering muster, firefighting, abandon ship, and man overboard procedures is conducted and recorded to demonstrate crew readiness to inspectors.' },
    ],
  },
};

const subitemSeoMeta: Record<string, { title: string; description: string }> = {
  'ecoloadmaster': {
    title: 'Ecoloadmaster Loadicator Software | Vessel Stability, Trim & Load Monitoring',
    description: 'Ecoloadmaster — advanced loadicator software for real-time vessel stability calculations, load monitoring, trim optimization, and stress analysis. Trusted by commercial shipping fleets and offshore vessels worldwide.',
  },
  'marine-custom-software-development': {
    title: 'Marine Custom Software Development | Fleet Management, PMS & Compliance Systems',
    description: 'Bespoke maritime software development — fleet management systems, voyage planning & optimization tools, planned maintenance systems (PMS), document management & API integration for shipowners and operators.',
  },
  'ship-design': {
    title: 'Ship Design Services | New Builds, Conversions & Modifications | Naval Architecture',
    description: 'Professional ship design services by experienced naval architects — new vessel builds, ship conversions & modifications for offshore, commercial, and defence vessels. Specialized marine engineering software used throughout.',
  },
  'retrofit-conversion': {
    title: 'Retrofit & Conversion Engineering | BWTS & Scrubber Installation | Class Approval',
    description: 'Ship retrofit & conversion engineering — BWTS installation (BWM Convention D-2 compliance), scrubber/EGCS installation, vessel feasibility inspections, 3D laser scanning, class approval drawings & installation assistance.',
  },
  'offshore-engineering': {
    title: 'Offshore Engineering | MODU Services, Mooring Analysis & Structural Stability',
    description: 'Comprehensive offshore engineering — MODU & self-elevating platform services, mooring & motion analysis, pipe/cable lay analysis, installation & modification studies, structural stability analysis, and towage & sea fastening.',
  },
  'floating-solar-system-design': {
    title: 'Floating Solar System Design | Offshore PV Engineering | Marine Renewable Energy',
    description: 'Custom floating solar PV system design for water bodies — site assessment, floatation & anchoring engineering, panel orientation optimization, and environmental impact assessment for lakes, reservoirs & offshore areas.',
  },
  'wind-farm-engineering-support': {
    title: 'Wind Farm Engineering Support | Offshore & Onshore Wind Energy Engineering',
    description: 'Full-scope wind farm engineering — site assessment & selection, turbine & layout optimization, foundation design, electrical system & grid connection design, and long-term monitoring & maintenance planning.',
  },
  'ihm-surveys': {
    title: 'IHM Survey Services | Hong Kong Convention Compliance | IRS & ABS Approved',
    description: 'IRS and ABS approved Inventory of Hazardous Materials (IHM) survey services for Hong Kong Convention compliance — onboard inventory compilation, documentation review, risk assessment & full IHM certification support.',
  },
  'marine-surveys': {
    title: 'Marine Survey Services | Pre-Purchase, Condition, Bunker, Draft & Damage Surveys',
    description: 'Comprehensive marine survey services — pre-purchase surveys, condition surveys, on/off hire surveys, towage surveys, damage surveys, bunker quantity & quality surveys, draft surveys & vessel feasibility surveys.',
  },
  'class-statutory-surveys': {
    title: 'Class & Statutory Surveys | SOLAS, MARPOL & Flag State Compliance | Green Ship Technologies',
    description: 'Class and statutory surveys by qualified surveyors — structural integrity inspections, comprehensive SOLAS & MARPOL compliance verification, flag state requirements, and port state control readiness assessments.',
  },
  'flag-state-inspections': {
    title: 'Flag State Inspection Services | Vessel Regulatory Compliance | Green Ship Technologies',
    description: 'Comprehensive flag state inspection services — regulatory compliance verification, safety & environmental compliance assessment, vessel documentation review, risk identification & expert maritime consultation.',
  },
  'sale-purchase-brokering': {
    title: 'Ship Sale & Purchase Brokering | Vessel S&P Transactions | Green Ship Technologies',
    description: 'Expert ship sale & purchase brokerage — comprehensive market analysis & vessel valuation, negotiation support, and end-to-end transaction management for buyers and sellers across global maritime markets.',
  },
  'chartering-brokers': {
    title: 'Ship Chartering Brokers | Voyage, Time & Bareboat Charter | Green Ship Technologies',
    description: 'Professional ship chartering services — voyage charter, time charter & bareboat charter arrangements with post-fixture management, freight market intelligence, charter party drafting & claims support.',
  },
};

interface Props {
  params: Promise<{ service: string; subitem: string }>;
}

export async function generateStaticParams() {
  return services.flatMap((s) =>
    (s.subItems ?? [])
      .filter((sub) => !sub.href)
      .map((sub) => ({ service: s.slug, subitem: sub.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, subitem: subitemSlug } = await params;
  const parentService = services.find((s) => s.slug === serviceSlug);
  const subItem = parentService?.subItems?.find((sub) => sub.slug === subitemSlug);
  if (!parentService || !subItem) return {};
  const detail = subItemDetails.find((d) => d.slug === subitemSlug && (!d.parentSlug || d.parentSlug === serviceSlug));
  const seo = subitemSeoMeta[subitemSlug];
  const title = seo?.title ?? `${subItem.title} | ${parentService.title} | Green Ship Technologies`;
  const description = seo?.description ?? detail?.intro.substring(0, 160) ?? subItem.description ?? `${subItem.title} services by Green Ship Technologies.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/services/${serviceSlug}/${subitemSlug}`,
      images: parentService.image ? [parentService.image] : [],
    },
    alternates: {
      canonical: `/services/${serviceSlug}/${subitemSlug}`,
    },
  };
}

export default async function SubItemPage({ params }: Props) {
  const { service: serviceSlug, subitem: subitemSlug } = await params;
  const parentService = services.find((s) => s.slug === serviceSlug);
  const subItem = parentService?.subItems?.find((sub) => sub.slug === subitemSlug);
  if (!parentService || !subItem) notFound();

  const detail = subItemDetails.find((d) => d.slug === subitemSlug && (!d.parentSlug || d.parentSlug === serviceSlug));
  const product = products.find((p) => p.slug === subitemSlug);
  const relatedSubItems = parentService.subItems?.filter((sub) => sub.slug !== subitemSlug) ?? [];
  const faqs = subitemFaqs[subitemSlug] ?? [];

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  const howToData = subitemHowTo[subitemSlug];
  const howToSchema = howToData ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToData.name,
    description: howToData.description,
    ...(howToData.totalTime ? { totalTime: howToData.totalTime } : {}),
    supply: [],
    tool: [],
    step: howToData.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  } : null;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: subItem.title,
    description: subItem.description,
    provider: { '@type': 'Organization', name: 'Green Ship Technologies', url: siteUrl },
    url: `${siteUrl}/services/${serviceSlug}/${subitemSlug}`,
    serviceType: subItem.title,
    areaServed: ['India', 'Middle East', 'Far East', 'Europe'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
      { '@type': 'ListItem', position: 3, name: parentService.title, item: `${siteUrl}/services/${serviceSlug}` },
      { '@type': 'ListItem', position: 4, name: subItem.title, item: `${siteUrl}/services/${serviceSlug}/${subitemSlug}` },
    ],
  };

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0a1e3c] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 left-20 w-72 h-72 bg-teal rounded-full filter blur-2xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="flex items-center gap-2 text-teal text-sm font-medium mb-6 flex-wrap">
                  <Link href="/services" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                    <Icon name="ArrowLeft" size={14} />
                    All Services
                  </Link>
                  <span className="text-white/40">/</span>
                  <Link href={`/services/${serviceSlug}`} className="hover:opacity-80 transition-opacity">
                    {parentService.title}
                  </Link>
                </nav>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal/20 border border-teal/30 rounded-xl flex items-center justify-center">
                    <Icon name={parentService.icon} size={24} className="text-teal" />
                  </div>
                  <span className="text-teal text-sm font-semibold tracking-wider uppercase">{parentService.title}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  {subItem.title}
                </h1>
                {subItem.description && (
                  <p className="text-white/80 text-lg leading-relaxed mb-8">{subItem.description}</p>
                )}
                <Button href="/contact" size="lg" variant="primary">
                  Get In Touch
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>

              <div className="hidden lg:block">
                {(detail?.heroImage ?? parentService.image) && (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-95">
                    <Image
                      src={detail?.heroImage ?? parentService.image!}
                      alt={subItem.title}
                      fill
                      priority
                      quality={90}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-teal/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {parentService.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              {detail?.intro ?? subItem.description ?? `Green Ship Technologies provides professional ${subItem.title.toLowerCase()} services as part of our comprehensive ${parentService.title.toLowerCase()} offering.`}
            </p>
          </div>
        </Section>

        {/* Product tabs if a product matches this sub-item */}
        {product && (
          <Section background="white">
            <ProductTabs products={[product]} />
          </Section>
        )}

        {/* Detailed sections if available */}
        {detail ? (
          detail.sections.map((section, si) => (
            <Section key={si} background={si % 2 === 0 ? 'grey' : 'white'}>
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-3">{section.heading}</h2>
                {section.body && <p className="text-gray-600 max-w-3xl mx-auto">{section.body}</p>}
              </div>

              {section.items && section.items.length > 0 && (
                <>
                  {section.layout === 'image-right' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {section.items.map((item, ii) => (
                        <div key={ii} className="flex items-stretch bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[140px]">
                          <div className="flex-1 p-5 flex flex-col justify-center">
                            {item.title && <h3 className="font-bold text-navy mb-2 text-sm">{item.title}</h3>}
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                          {item.image && (
                            <div className="relative w-36 sm:w-44 shrink-0">
                              <Image src={item.image} alt={item.title || section.heading} fill loading="lazy" quality={90} className="object-cover" />
                              <div className="absolute inset-0 bg-linear-to-l from-transparent to-navy/10" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : section.items.some((i) => i.image) ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.items.map((item, ii) => (
                        <div key={ii} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          {item.image && (
                            <div className="relative h-44 overflow-hidden">
                              <Image src={item.image} alt={item.title || section.heading} fill loading="lazy" quality={90} className="object-cover" />
                              <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent" />
                            </div>
                          )}
                          <div className="p-5">
                            {item.title && <h3 className="font-bold text-navy mb-2">{item.title}</h3>}
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      {section.items.map((item, ii) => (
                        <div key={ii} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                          <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Icon name="CheckCircle" size={18} className="text-teal-dark" />
                          </div>
                          <div>
                            {item.title && <p className="font-semibold text-navy text-sm mb-1">{item.title}</p>}
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </Section>
          ))
        ) : (
          /* Fallback: Why choose us */
          <section className="py-14 bg-light-grey">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Why Choose Green Ship Technologies?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our expertise in {subItem.title.toLowerCase()} is backed by years of hands-on maritime experience and a commitment to excellence.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: 'Award', title: 'Industry Expertise', desc: 'Years of specialized experience in maritime services, delivering results that meet international standards.' },
                  { icon: 'Shield', title: 'Compliance Assured', desc: 'Full adherence to SOLAS, MARPOL, and all applicable international maritime conventions and flag regulations.' },
                  { icon: 'Globe', title: 'Global Reach', desc: 'Operating across India, the Middle East, Far East, and Europe with a network of qualified maritime professionals.' },
                  { icon: 'Clock', title: 'Timely Delivery', desc: 'Efficient project management ensuring your operations are not delayed with on-time, accurate deliverables.' },
                  { icon: 'Users', title: 'Dedicated Team', desc: 'A team of certified surveyors, naval architects, and maritime engineers dedicated to your service needs.' },
                  { icon: 'HeadphonesIcon', title: '24/7 Support', desc: 'Round-the-clock availability for urgent maritime requirements, inspections, and consultations.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name={item.icon} size={20} className="text-teal-dark" />
                    </div>
                    <h3 className="font-bold text-navy mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ section */}
        {faqs.length > 0 && (
          <Section background="grey">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8" data-reveal="">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-sm">Common questions about {subItem.title.toLowerCase()}</p>
              </div>
              <div className="space-y-3">
                {faqs.map(({ q, a }, i) => (
                  <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden" data-reveal="" data-delay={String(i * 75)}>
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                      <span className="font-semibold text-navy text-sm sm:text-base leading-snug">{q}</span>
                      <span className="shrink-0 w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center group-open:bg-teal/20 transition-colors">
                        <Icon name="ChevronDown" size={14} className="text-teal-dark transition-transform duration-200 group-open:rotate-180" />
                      </span>
                    </summary>
                    <div className="px-5 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed pt-3">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Other sub-services under same parent */}
        {relatedSubItems.length > 0 && (
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">More under {parentService.title}</h2>
                <p className="text-gray-600">Explore our other {parentService.title.toLowerCase()} offerings</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedSubItems.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={sub.href ?? `/services/${serviceSlug}/${sub.slug}`}
                    className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-teal/40 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon name={parentService.icon} size={14} className="text-teal-dark" />
                    </div>
                    <span className="font-medium text-sm text-navy group-hover:text-teal-dark transition-colors">{sub.title}</span>
                    <Icon name="ArrowRight" size={14} className="text-gray-400 group-hover:text-teal-dark group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href={`/services/${serviceSlug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:underline">
                  View full {parentService.title} page →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8">
              Contact our maritime experts to discuss your {subItem.title.toLowerCase()} requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="primary">
                Contact Us Today
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
