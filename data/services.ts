import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Marine Software Services',
    description: 'Advanced stability software and vessel management systems tailored for modern maritime operations.',
    icon: 'Monitor',
    image: '/services/software.jpeg',
    features: [
      'Vessel stability software (Ecoloadmaster)',
      'Vessel management systems (Marine Master)',
      'Cargo planning tools',
      'Fleet monitoring dashboards',
      'Regulatory compliance software',
      'Custom maritime application development'
    ],
    slug: 'marine-software-services'
  },
  {
    id: '2',
    title: 'Ship Design & Engineering',
    description: 'Comprehensive ship design and engineering services from concept to completion — conversions, new builds, and retrofits.',
    icon: 'Ruler',
    image: '/services/shipdesign.jpeg',
    features: [
      'Vessel conversion & modification',
      'New build design',
      'Retrofit engineering',
      'Finite Element Analysis (FEA)',
      'Stability analysis & trim optimization',
      'Ballast water management retrofits',
      'Scrubber system installations'
    ],
    slug: 'ship-design-engineering'
  },
  {
    id: '3',
    title: 'Survey & Certification',
    description: 'Professional marine survey and certification services ensuring full compliance with class and statutory requirements.',
    icon: 'ClipboardCheck',
    image: '/services/survey.jpeg',
    features: [
      'Class & statutory surveys',
      'Pre-purchase vessel assessments',
      'Flag state inspections',
      'Condition surveys',
      'Damage surveys',
      'Voyage surveys',
      'Ultrasonic thickness measurement'
    ],
    slug: 'survey-certification'
  },
  {
    id: '4',
    title: 'Renewable Energy Services',
    description: 'Offshore engineering expertise spanning floating solar systems, oil & gas infrastructure, and wind farm development.',
    icon: 'Zap',
    image: '/services/solar.jpeg',
    features: [
      'Floating solar system design',
      'Offshore oil & gas engineering',
      'Wind farm engineering support',
      'Offshore structure analysis',
      'Mooring system design',
      'Environmental impact assessments',
      'FEED & detailed engineering'
    ],
    slug: 'renewable-energy-services'
  },
  {
    id: '5',
    title: 'Ship Broking & Chartering',
    description: 'Expert ship brokerage facilitating vessel sales, purchases, and chartering arrangements across global maritime markets.',
    icon: 'Handshake',
    image: '/services/chartrering.jpg',
    features: [
      'Sale & purchase brokering',
      'Voyage chartering',
      'Time chartering',
      'Bareboat chartering',
      'Market intelligence & valuations',
      'Contract negotiations',
      'Post-fixture management'
    ],
    slug: 'ship-broking-chartering'
  },
  {
    id: '6',
    title: 'Flag Registration Services',
    description: 'Streamlined vessel registration under leading open registries including Panama, Liberia, Palau, and more.',
    icon: 'Flag',
    image: '/services/flag.png',
    features: [
      'Panama flag registration',
      'Liberia flag registration',
      'Palau flag registration',
      'St. Kitts & Nevis registration',
      'Comoros flag registration',
      'Cook Islands registration',
      'Belize flag registration'
    ],
    slug: 'flag-registration-services'
  },
  {
    id: '7',
    title: 'NDT & Manpower Services',
    description: 'Specialized non-destructive testing, rope access, and skilled maritime manpower solutions for complex projects.',
    icon: 'Users',
    image: '/services/ndt.jpeg',
    features: [
      'Non-destructive testing (NDT)',
      'Ultrasonic testing (UT)',
      'Magnetic particle inspection (MPI)',
      'Rope access technician services',
      'Maritime crew placement',
      'Technical manpower supply',
      'Specialized offshore personnel'
    ],
    slug: 'non-destructive-testing-services'
  }
];
