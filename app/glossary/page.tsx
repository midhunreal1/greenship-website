import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

export const metadata: Metadata = {
  title: 'Maritime Glossary – Key Terms Explained',
  description: 'Comprehensive maritime glossary covering vessel stability software, IHM surveys, flag registration, ship design, offshore engineering, and chartering terms — explained by Green Ship Technologies.',
  alternates: { canonical: `${siteUrl}/glossary` },
  openGraph: {
    title: 'Maritime Glossary – Key Terms Explained | Green Ship Technologies',
    description: 'Definitions for 35+ maritime industry terms: loadicator, IHM, BWTS, MARPOL, bareboat charter, PSC inspection, and more — with links to related services.',
    url: `${siteUrl}/glossary`,
  },
};

type Term = {
  id: string;
  term: string;
  definition: string;
  serviceLink?: { label: string; href: string };
};

type Category = {
  id: string;
  label: string;
  terms: Term[];
};

const categories: Category[] = [
  {
    id: 'software-technology',
    label: 'Software & Technology',
    terms: [
      {
        id: 'loadicator',
        term: 'Loadicator (Loading Computer)',
        definition:
          'An onboard or shore-based software system that calculates a vessel\'s stability, stress, trim, and draft in real-time as cargo is loaded or discharged. Class-approved loadicators such as Ecoloadmaster are mandatory on most commercial vessels under SOLAS regulations.',
        serviceLink: { label: 'Ecoloadmaster software', href: '/services/marine-software-services/ecoloadmaster' },
      },
      {
        id: 'ecoloadmaster',
        term: 'Ecoloadmaster',
        definition:
          'A proprietary vessel stability and loadicator software developed by Green Ship Technologies. It provides real-time stability calculations, stress monitoring, and trim optimisation, and is approved by major classification societies including IRS and ABS.',
        serviceLink: { label: 'Ecoloadmaster details', href: '/services/marine-software-services/ecoloadmaster' },
      },
      {
        id: 'stability-software',
        term: 'Vessel Stability Software',
        definition:
          'Software that models a ship\'s intact and damage stability, ensuring it meets IMO and class requirements throughout all loading conditions. It uses the vessel\'s hydrostatic data and KN curves to compute metacentric height (GM), righting lever (GZ), and maximum allowable KG.',
        serviceLink: { label: 'Marine software services', href: '/services/marine-software-services' },
      },
      {
        id: 'pms',
        term: 'Planned Maintenance System (PMS)',
        definition:
          'An onboard software system that schedules, tracks, and records maintenance work on machinery and equipment. A functional PMS is required for ISM Code compliance and is routinely audited during PSC inspections.',
        serviceLink: { label: 'Marine custom software', href: '/services/marine-software-services/marine-custom-software-development' },
      },
    ],
  },
  {
    id: 'surveys-certification',
    label: 'Surveys & Certification',
    terms: [
      {
        id: 'ihm',
        term: 'Inventory of Hazardous Materials (IHM)',
        definition:
          'A mandatory document under the Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships (2009). The IHM lists all hazardous materials present in a vessel\'s structure and equipment, and must be maintained and updated throughout the ship\'s life.',
        serviceLink: { label: 'IHM survey services', href: '/services/survey-certification/ihm-surveys' },
      },
      {
        id: 'ihm-survey',
        term: 'IHM Survey',
        definition:
          'An onboard inspection carried out by an approved surveyor to identify and document hazardous materials such as asbestos, PCBs, lead paints, TBT, and ozone-depleting substances across all ship areas. Green Ship Technologies is both IRS- and ABS-approved to conduct IHM surveys.',
        serviceLink: { label: 'IHM survey services', href: '/services/survey-certification/ihm-surveys' },
      },
      {
        id: 'pre-purchase-survey',
        term: 'Pre-purchase Survey',
        definition:
          'A thorough technical inspection of a vessel carried out on behalf of a prospective buyer before a sale-and-purchase transaction is completed. It covers hull structure, machinery condition, certificates, and overall seaworthiness, allowing the buyer to identify defects and negotiate price adjustments.',
        serviceLink: { label: 'Marine survey services', href: '/services/survey-certification/marine-surveys' },
      },
      {
        id: 'draft-survey',
        term: 'Draft Survey',
        definition:
          'A method of estimating the quantity of bulk cargo loaded or discharged by measuring the vessel\'s draughts and displacement before and after cargo operations. Results are compared against shore figures and used for commercial settlement.',
        serviceLink: { label: 'Marine survey services', href: '/services/survey-certification/marine-surveys' },
      },
      {
        id: 'bunker-survey',
        term: 'Bunker Survey',
        definition:
          'An independent survey to measure and verify the quantity and quality of bunker fuel (heavy fuel oil, MDO, LNG) transferred to a vessel. It protects both the buyer and seller from commercial disputes and is typically conducted at major bunkering ports.',
        serviceLink: { label: 'Marine survey services', href: '/services/survey-certification/marine-surveys' },
      },
      {
        id: 'on-off-hire',
        term: 'On/Off Hire Survey',
        definition:
          'A condition survey carried out when a vessel is delivered to or redelivered from a time charter party. The survey establishes the vessel\'s physical condition and bunker quantities at the time of handover, providing an agreed baseline for any claims at redelivery.',
        serviceLink: { label: 'Marine survey services', href: '/services/survey-certification/marine-surveys' },
      },
      {
        id: 'class-survey',
        term: 'Class Survey',
        definition:
          'Periodical inspection required by a classification society (e.g., IRS, ABS, DNV, Lloyd\'s Register) to verify that a vessel\'s hull, machinery, and equipment meet the society\'s published rules. Surveys include Annual, Intermediate, Special (Renewal), Dry-dock, and Continuous Surveys.',
        serviceLink: { label: 'Class & statutory surveys', href: '/services/survey-certification/class-statutory-surveys' },
      },
      {
        id: 'psc-inspection',
        term: 'Port State Control (PSC) Inspection',
        definition:
          'An inspection of foreign vessels in national ports by government maritime authorities to verify compliance with international conventions (SOLAS, MARPOL, MLC). Vessels found deficient may be detained until deficiencies are rectified.',
        serviceLink: { label: 'Flag state inspections', href: '/services/survey-certification/flag-state-inspections' },
      },
    ],
  },
  {
    id: 'flag-registration',
    label: 'Ship Registration & Flags',
    terms: [
      {
        id: 'open-registry',
        term: 'Open Registry (Flag of Convenience)',
        definition:
          'A ship register that allows vessels owned by foreign nationals or companies to fly that country\'s flag, typically offering lower tax obligations, flexible crewing rules, and simplified registration procedures. Popular open registries include Panama, Liberia, Marshall Islands, and Palau.',
        serviceLink: { label: 'Flag registration services', href: '/services/flag-registration-services' },
      },
      {
        id: 'panama-flag',
        term: 'Panama Flag Registration',
        definition:
          'Registration under the Panama Maritime Authority (AMP), the world\'s largest ship registry by tonnage. Panama-flagged vessels benefit from well-recognised flag acceptance, a large consular network for document services, and competitive annual tonnage fees.',
        serviceLink: { label: 'Flag registration services', href: '/services/flag-registration-services' },
      },
      {
        id: 'liberia-flag',
        term: 'Liberia Flag Registration',
        definition:
          'Registration under the Liberian Registry (LISCR), the second-largest flag state by DWT. Known for its professional service, efficient documentation processes, and strong international acceptance by flag and port state authorities worldwide.',
        serviceLink: { label: 'Flag registration services', href: '/services/flag-registration-services' },
      },
      {
        id: 'flag-state-inspection',
        term: 'Flag State Inspection',
        definition:
          'An inspection conducted by or on behalf of the vessel\'s flag state administration to verify compliance with SOLAS, MARPOL, MLC, and other applicable conventions. Unlike PSC, flag state inspections are carried out by the country under whose flag the vessel is registered.',
        serviceLink: { label: 'Flag state inspection services', href: '/services/survey-certification/flag-state-inspections' },
      },
    ],
  },
  {
    id: 'ship-design',
    label: 'Ship Design & Engineering',
    terms: [
      {
        id: 'naval-architecture',
        term: 'Naval Architecture',
        definition:
          'The engineering discipline concerned with the design, construction, and repair of marine vessels and floating structures. Naval architects calculate hydrostatics, structural scantlings, powering requirements, and seakeeping characteristics to produce safe and efficient ships.',
        serviceLink: { label: 'Ship design services', href: '/services/ship-design-engineering/ship-design' },
      },
      {
        id: 'bwts',
        term: 'Ballast Water Treatment System (BWTS)',
        definition:
          'A shipboard system that treats ballast water to remove or neutralise invasive organisms before discharge in foreign ports, as required by the IMO Ballast Water Management (BWM) Convention, specifically the D-2 performance standard. Green Ship Technologies provides full BWTS retrofit engineering and class approval.',
        serviceLink: { label: 'Retrofit & conversion services', href: '/services/ship-design-engineering/retrofit-conversion' },
      },
      {
        id: 'scrubber-egcs',
        term: 'Scrubber / EGCS (Exhaust Gas Cleaning System)',
        definition:
          'Equipment installed in a vessel\'s exhaust pathway to wash SOx (sulphur oxides) from combustion gases, allowing the vessel to burn high-sulphur fuel while meeting MARPOL Annex VI Regulation 14 emission limits. Open-loop, closed-loop, and hybrid scrubbers are the three main types.',
        serviceLink: { label: 'Retrofit & conversion services', href: '/services/ship-design-engineering/retrofit-conversion' },
      },
      {
        id: 'modu',
        term: 'Mobile Offshore Drilling Unit (MODU)',
        definition:
          'A floating or self-elevating structure used for exploratory or production drilling in offshore oil and gas fields. Types include jack-up rigs, semi-submersibles, and drill ships, each governed by class society MODU Rules and flag state requirements.',
        serviceLink: { label: 'Offshore engineering', href: '/services/ship-design-engineering/offshore-engineering' },
      },
      {
        id: 'sea-fastening',
        term: 'Sea Fastening',
        definition:
          'Temporary structural supports and lashings used to secure cargo or deck equipment on a vessel during a sea voyage. Sea fastening analysis calculates accelerations at sea and sizes the fastening members to prevent cargo shifting or structural damage.',
        serviceLink: { label: 'Offshore engineering', href: '/services/ship-design-engineering/offshore-engineering' },
      },
      {
        id: 'mooring-analysis',
        term: 'Mooring Analysis',
        definition:
          'An engineering study that determines the size, configuration, and tension of mooring lines for a floating structure at a given location, taking into account environmental loads from wind, current, and waves. Required for FPSOs, MODUs, and floating solar platforms.',
        serviceLink: { label: 'Offshore engineering', href: '/services/ship-design-engineering/offshore-engineering' },
      },
    ],
  },
  {
    id: 'regulations-compliance',
    label: 'Regulatory & Compliance',
    terms: [
      {
        id: 'solas',
        term: 'SOLAS (Safety of Life at Sea)',
        definition:
          'The most important international treaty covering merchant ship safety. Administered by the International Maritime Organization (IMO), SOLAS sets minimum standards for construction, equipment, and operation of ships, including requirements for lifesaving appliances, fire protection, and navigation.',
      },
      {
        id: 'marpol',
        term: 'MARPOL (Marine Pollution)',
        definition:
          'The main international convention covering prevention of pollution by ships, consisting of six annexes addressing oil, noxious liquids, packaged harmful substances, sewage, garbage, and air emissions. Compliance is enforced by flag states and verified during PSC inspections.',
        serviceLink: { label: 'Survey & certification', href: '/services/survey-certification' },
      },
      {
        id: 'ism-code',
        term: 'ISM Code (International Safety Management)',
        definition:
          'An international standard for the safe management and operation of ships, and for pollution prevention. It requires ship companies to develop, implement, and maintain a Safety Management System (SMS), which is audited by the flag state or recognised organisation to issue Document of Compliance (DOC) and Safety Management Certificate (SMC).',
      },
      {
        id: 'mlc',
        term: 'MLC (Maritime Labour Convention)',
        definition:
          'Often called the "seafarers\' bill of rights," MLC 2006 consolidates over 65 previous ILO maritime labour standards. It sets minimum requirements for seafarers\' working and living conditions, covering employment agreements, wages, hours of work, rest, repatriation, and medical care.',
      },
      {
        id: 'hong-kong-convention',
        term: 'Hong Kong Convention',
        definition:
          'The IMO\'s Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships (2009) establishes requirements for ships being sent for scrapping. It mandates the Inventory of Hazardous Materials (IHM) and requires recycling facilities to meet defined safety and environmental standards.',
        serviceLink: { label: 'IHM survey services', href: '/services/survey-certification/ihm-surveys' },
      },
      {
        id: 'bwm-convention',
        term: 'BWM Convention (Ballast Water Management)',
        definition:
          'The IMO\'s International Convention for the Control and Management of Ships\' Ballast Water and Sediments (2004, in force 2017). It requires vessels to manage ballast water to meet the D-1 (exchange) or D-2 (treatment) standard, effectively mandating BWTS installation on most commercial ships.',
        serviceLink: { label: 'Retrofit & conversion services', href: '/services/ship-design-engineering/retrofit-conversion' },
      },
    ],
  },
  {
    id: 'chartering-broking',
    label: 'Chartering & Broking',
    terms: [
      {
        id: 'voyage-charter',
        term: 'Voyage Charter',
        definition:
          'A contract of affreightment under which a shipowner agrees to carry a specified cargo between named ports for a freight rate quoted per tonne or as a lump sum. The owner pays voyage costs (bunkers, port dues, canal dues); the charterer controls the cargo but not the vessel.',
        serviceLink: { label: 'Chartering brokers', href: '/services/ship-broking-chartering/chartering-brokers' },
      },
      {
        id: 'time-charter',
        term: 'Time Charter',
        definition:
          'An arrangement in which the shipowner provides the vessel with crew and maintenance for a fixed period; the charterer controls commercial employment and pays hire daily or monthly plus all voyage costs. The charterer directs the vessel but the owner remains responsible for operating the ship.',
        serviceLink: { label: 'Chartering brokers', href: '/services/ship-broking-chartering/chartering-brokers' },
      },
      {
        id: 'bareboat-charter',
        term: 'Bareboat Charter (Demise Charter)',
        definition:
          'A form of charter in which the charterer takes full possession and control of the vessel, including responsibility for crewing, maintenance, and all operating costs, for a long-term fixed hire. In practice, a bareboat charterer functions as a temporary owner of the vessel.',
        serviceLink: { label: 'Chartering brokers', href: '/services/ship-broking-chartering/chartering-brokers' },
      },
      {
        id: 'sale-purchase',
        term: 'Sale & Purchase (S&P)',
        definition:
          'The process of buying and selling second-hand vessels in the international shipping market. Brokers facilitate negotiations between buyer and seller, agree memoranda of agreement (MoA), coordinate pre-purchase surveys, and manage closing procedures to transfer ownership.',
        serviceLink: { label: 'Sale & purchase brokering', href: '/services/ship-broking-chartering/sale-purchase-brokering' },
      },
    ],
  },
  {
    id: 'renewable-offshore',
    label: 'Offshore & Renewable Energy',
    terms: [
      {
        id: 'floating-solar',
        term: 'Floating Solar PV System',
        definition:
          'A photovoltaic array mounted on floating structures anchored to a water body such as a reservoir, lake, or coastal area. Floating solar avoids land use, benefits from water cooling that improves panel efficiency, and reduces evaporation. Design requires buoyancy, mooring, and corrosion engineering.',
        serviceLink: { label: 'Floating solar design', href: '/services/renewable-energy-oil-gas/floating-solar-system-design' },
      },
      {
        id: 'monopile',
        term: 'Monopile Foundation (Offshore Wind)',
        definition:
          'A large-diameter hollow steel tube driven or drilled into the seabed to support an offshore wind turbine tower. The most common foundation type for water depths up to 40 m, monopiles are designed to withstand fatigue loads from wind, waves, and the rotating machinery above.',
        serviceLink: { label: 'Wind farm engineering', href: '/services/renewable-energy-oil-gas/wind-farm-engineering-support' },
      },
      {
        id: 'fpso',
        term: 'FPSO (Floating Production Storage and Offloading)',
        definition:
          'A floating vessel used by the offshore oil and gas industry for production processing, storage, and tanker offloading. FPSOs are permanently moored at the field and connect to subsea wellheads via flexible risers. They eliminate the need for pipelines to shore in remote or deepwater fields.',
        serviceLink: { label: 'Offshore engineering', href: '/services/ship-design-engineering/offshore-engineering' },
      },
    ],
  },
];

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${siteUrl}/glossary#termset`,
  name: 'Maritime Industry Glossary',
  description: 'Authoritative definitions for key maritime terminology covering vessel stability software, surveys, flag registration, ship design, regulations, and chartering — by Green Ship Technologies.',
  url: `${siteUrl}/glossary`,
  publisher: {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Green Ship Technologies',
  },
  hasDefinedTerm: categories.flatMap((cat) =>
    cat.terms.map((t) => ({
      '@type': 'DefinedTerm',
      '@id': `${siteUrl}/glossary#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${siteUrl}/glossary#termset`,
      url: `${siteUrl}/glossary#${t.id}`,
    }))
  ),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${siteUrl}/glossary` },
  ],
};

export default function GlossaryPage() {
  const totalTerms = categories.reduce((sum, c) => sum + c.terms.length, 0);

  return (
    <>
      <Script id="glossary-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />
      <Script id="glossary-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-navy pt-28 pb-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">Reference Guide</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Maritime Glossary
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Clear definitions for {totalTerms} maritime industry terms — from loadicators and IHM surveys to bareboat charters and BWTS retrofits.
            </p>
          </div>
        </section>

        {/* Category nav */}
        <nav aria-label="Glossary categories" className="bg-white border-b border-gray-200 sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
            <ul className="flex gap-1 py-2 min-w-max">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-teal/10 hover:text-teal transition-colors duration-150 whitespace-nowrap"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Terms */}
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 space-y-16">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-6 pb-2 border-b-2 border-teal/30">
                {cat.label}
              </h2>
              <dl className="space-y-6">
                {cat.terms.map((term) => (
                  <div
                    key={term.id}
                    id={term.id}
                    className="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:border-teal/40 hover:shadow-sm transition-all duration-200"
                  >
                    <dt className="text-base sm:text-lg font-bold text-navy mb-2">{term.term}</dt>
                    <dd className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {term.definition}
                      {term.serviceLink && (
                        <span className="block mt-3">
                          <Link
                            href={term.serviceLink.href}
                            className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
                          >
                            {term.serviceLink.label} →
                          </Link>
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Need expert maritime services?</h2>
            <p className="text-gray-300 mb-6">
              Green Ship Technologies has delivered IHM surveys, stability software, flag registration, and offshore engineering since 2009.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/services"
                className="px-6 py-3 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
