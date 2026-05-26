import { Service } from '@/types/service-subitem';

export const services: Service[] = [
  {
    id: '1',
    title: 'Marine Software Services',
    description: 'Advanced stability software and vessel management systems tailored for modern maritime operations.',
    icon: 'Monitor',
    image: '/services/software.jpeg',
    features: ['Ecoloadmaster', 'Marine Custom Software Development'],
    slug: 'marine-software-services',
    subItems: [
      {
        title: 'Ecoloadmaster (Loadicator software)',
        slug: 'ecoloadmaster',
        description: 'Advanced loadicator software for vessel stability calculations, load monitoring, and trim optimization in real-time.',
      },
      {
        title: 'Marine Custom Software Development',
        slug: 'marine-custom-software-development',
        description: 'Bespoke maritime software solutions tailored to your fleet\'s specific operational and compliance requirements.',
      },
    ],
  },
  {
    id: '2',
    title: 'Ship Design & Engineering',
    description: 'Comprehensive ship design and engineering services from concept to completion — conversions, new builds, and retrofits.',
    icon: 'Ruler',
    image: '/services/shipdesign.jpeg',
    features: ['Conversion & Modification', 'New Build Design', 'Retrofit Engineering'],
    slug: 'ship-design-engineering',
    subItems: [
      {
        title: 'Conversion & Modification',
        slug: 'conversion-modification',
        description: 'End-to-end engineering for vessel conversions, supporting design, classification approval, and shipyard supervision.',
      },
      {
        title: 'New Build Design',
        slug: 'new-build-design',
        description: 'Complete new vessel design from concept through detailed engineering, covering all vessel types and sizes.',
      },
      {
        title: 'Retrofit Engineering',
        slug: 'retrofit-engineering',
        description: 'Integration engineering for modern systems such as BWTS, scrubbers, and LNG fuel systems on existing vessels.',
      },
    ],
  },
  {
    id: '3',
    title: 'Survey & Certification',
    description: 'Professional marine survey and certification services ensuring full compliance with class and statutory requirements.',
    icon: 'ClipboardCheck',
    image: '/services/survey.jpeg',
    features: ['IHM Surveys', 'Class & Statutory Surveys', 'Pre-purchase Surveys', 'Flag State Inspections'],
    slug: 'survey-certification',
    subItems: [
      {
        title: 'IHM Surveys',
        slug: 'ihm-surveys',
        description: 'Inventory of Hazardous Materials (IHM) surveys for Hong Kong Convention compliance.  ABS approved, with detailed onboard inventory, documentation review, and full certification support.',
      },
      {
        title: 'Class & Statutory Surveys',
        slug: 'class-statutory-surveys',
        description: 'Scheduled class and statutory surveys ensuring continuous compliance with SOLAS, MARPOL, and flag requirements.',
      },
      {
        title: 'Pre-purchase Surveys',
        slug: 'pre-purchase-surveys',
        description: 'Independent hull, machinery, and documentation inspections to support informed vessel purchase decisions.',
      },
      {
        title: 'Flag State Inspections',
        slug: 'flag-state-inspections',
        description: 'Comprehensive inspections verifying flag state regulatory compliance, crew qualifications, and vessel documentation.',
      },
    ],
  },
  {
    id: '4',
    title: 'Renewable Energy & Oil Gas',
    description: 'Offshore engineering expertise spanning floating solar systems, oil & gas infrastructure, and wind farm development.',
    icon: 'Zap',
    image: '/services/solar.jpeg',
    features: ['Floating Solar System Design', 'Offshore Engineering', 'Wind Farm Engineering Support'],
    slug: 'renewable-energy-oil-gas',
    subItems: [
      {
        title: 'Floating Solar System Design',
        slug: 'floating-solar-system-design',
        description: 'Custom floating PV system design for water bodies, covering floatation, anchoring, and environmental assessment.',
      },
      {
        title: 'Offshore Engineering',
        slug: 'offshore-engineering',
        description: 'Design and installation engineering for offshore renewable and oil & gas infrastructure in marine environments.',
      },
      {
        title: 'Wind Farm Engineering Support',
        slug: 'wind-farm-engineering-support',
        description: 'Full-scope wind farm engineering from site assessment and turbine layout through foundation design and commissioning.',
      },
    ],
  },
  {
    id: '5',
    title: 'Ship Broking & Chartering',
    description: 'Expert ship brokerage facilitating vessel sales, purchases, and chartering arrangements across global maritime markets.',
    icon: 'Handshake',
    image: '/services/chartrering.jpg',
    features: ['Sale & Purchase Brokering', 'Chartering Brokers'],
    slug: 'ship-broking-chartering',
    subItems: [
      {
        title: 'Sale & Purchase Brokering',
        slug: 'sale-purchase-brokering',
        description: 'Expert vessel brokerage facilitating sale and purchase transactions with optimal terms across global markets.',
      },
      {
        title: 'Chartering Brokers',
        slug: 'chartering-brokers',
        description: 'Comprehensive voyage, time, and bareboat charter arrangements with full post-fixture management support.',
      },
    ],
  },
  {
    id: '6',
    title: 'Flag Registration Services',
    description: 'Streamlined vessel registration under leading open registries including Panama, Liberia, Palau, and more.',
    icon: 'Flag',
    image: '/services/flag.png',
    features: ['Panama', 'Liberia', 'Palau', 'ST. Kitts & Nevis', 'Comoros', 'Cooks Island', 'Belize'],
    slug: 'flag-registration-services',
    subItems: [
      {
        title: 'Panama, Liberia, Palau, ST. Kitts & Nevis, Comoros, Cooks Island & Belize',
        slug: 'flag-registries',
        description: 'Streamlined vessel registration under leading open registries — Panama, Liberia, Palau, ST. Kitts & Nevis, Comoros, Cook Islands, and Belize.',
        href: '/services/flag-registration-services',
      },
    ],
  },
];
