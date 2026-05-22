import { Milestone, ContactInfo, SocialMedia, Partner } from '@/types';

export const companyInfo = {
  name: 'Green Ship Technologies',
  shortName: 'GST',
  tagline: 'Your Partner in Maritime Innovation',
  description: 'Green Ship Technologies is a leading marine, offshore & industrial service provider established in 2009. Our team of naval architects, marine engineers, master mariners, and technical specialists deliver innovative solutions across ship design, marine software, survey & certification, renewable energy, and manpower services.',
  mission: 'To provide innovative maritime solutions and services that exceed industry standards while optimizing efficiency, enhancing safety, and promoting sustainability.',
  vision: 'To be a globally recognized leader in maritime services, known for excellence, innovation, and an unwavering commitment to client success.',
  coreValues: [
    {
      title: 'Maritime Expertise',
      description: 'Our team brings deep experience from major shipyards, ship design offices, and offshore engineering operations worldwide.'
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies to develop modern software and engineering solutions for the maritime industry.'
    },
    {
      title: 'Safety & Compliance',
      description: 'We uphold the highest standards of marine safety, statutory compliance, and environmental responsibility.'
    },
    {
      title: 'Global Reach',
      description: 'Serving clients across India, the Middle East, Far East, and European countries with a truly global perspective.'
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by the satisfaction and growth of our clients across every maritime sector.'
    }
  ],
  founded: '2009',
  employees: '50+',
  clientsServed: '200+',
  projectsCompleted: '500+',
  yearsExperience: '15+'
};

export const milestones: Milestone[] = [
  {
    year: '2009',
    title: 'Company Founded',
    description: 'Green Ship Technologies was established in Navi Mumbai with a vision to serve the maritime and offshore industry.'
  },
  {
    year: '2012',
    title: 'Marine Software Division',
    description: 'Launched proprietary marine software services including stability software and vessel management systems.'
  },
  {
    year: '2015',
    title: 'International Expansion',
    description: 'Extended operations to the Middle East, Far East, and European maritime markets.'
  },
  {
    year: '2018',
    title: 'Renewable Energy Division',
    description: 'Established renewable energy engineering services including floating solar and offshore wind farm support.'
  },
  {
    year: '2021',
    title: 'Flag Registration Services',
    description: 'Added comprehensive flag registration services covering Panama, Liberia, Palau, and other major maritime registries.'
  },
  {
    year: '2024',
    title: '15 Years of Excellence',
    description: 'Celebrated 15 years of delivering maritime innovation and serving 200+ clients globally.'
  }
];

export const contactInfo: ContactInfo = {
  address: 'A-303, 3rd Floor, The Great Eastern Summit, Plot No - 56, Sector - 15, CBD Belapur, Navi Mumbai, 400614, India',
  phone: '+91 2249700617',
  phone2: '+91 8828192100',
  email: 'contact@greenshiptech.com',
  supportHours: 'Monday - Saturday: 9:00 AM - 6:00 PM IST',
  mapUrl: 'https://maps.google.com/?q=A-303+Great+Eastern+Summit+CBD+Belapur+Navi+Mumbai'
};

export const socialMedia: SocialMedia[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/green-ship-technologies', icon: 'linkedin' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@greenshiptechnologies1275', icon: 'youtube' },
];

export const partners: Partner[] = [
  { id: '1', name: 'MRK', logo: '/clients/mrk.png' },
  { id: '2', name: 'KSN Ship', logo: '/clients/ksn.png' },
  { id: '3', name: 'Maritime Steamship', logo: '/clients/maritime-steamship.png' },
  { id: '4', name: 'Chellsea', logo: '/clients/chellsea.png' },
  { id: '5', name: 'Navinya Shipping Services', logo: '/clients/navinya.png' },
];
