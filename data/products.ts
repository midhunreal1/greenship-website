export interface ProductStat {
  value: string;
  label: string;
  icon: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  points: string[];
  image: string;
  desktopFrame?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  heroImage: string;
  serviceSlug: string;
  stats: ProductStat[];
  challenge: { image: string; title: string; body: string };
  overview: string;
  features: ProductFeature[];
  modules: string[];
  achievements: string[];
  whyChoose: { icon: string; title: string; description: string }[];
}

export const products: Product[] = [
  {
    slug: 'ecoloadmaster',
    name: 'Ecoloadmaster',
    tagline: 'Loadicator Software',
    badge: 'Product',
    description: 'Innovative Ecoloadmaster — Loadicator Software designed to optimize vessel loading processes and enhance operational efficiency in the maritime industry.',
    heroImage: '/services/ship-1.webp',
    serviceSlug: 'marine-software-services',
    stats: [
      { value: '100%', label: 'Class Approved', icon: 'CheckCircle' },
      { value: 'Real-Time', label: 'Stability Calculation', icon: 'Activity' },
      { value: 'Multi-Vessel', label: 'Compatibility', icon: 'Ship' },
      { value: 'Compliant', label: 'IMO Standards', icon: 'Shield' },
    ],
    challenge: {
      image: '/services/survey.jpeg',
      title: 'The Industry Challenge',
      body: 'Vessel operators face critical risks from improper loading — stability failures, structural damage, cargo loss, and non-compliance with class requirements. Manual calculations are error-prone, time-consuming, and fail to account for real-world dynamic loading conditions, exposing ships and crew to unacceptable risk.'
    },
    overview: 'Ecoloadmaster is a comprehensive loadicator software with integrated modules for intact stability, longitudinal strength, damage stability, and cargo optimization. Built for real-world maritime operations, it delivers class-approved calculations with high speed, accuracy, and reliability — keeping your vessel safe and compliant at all times.',
    features: [
      {
        title: 'Intact Stability Calculation',
        description: 'Accurately computes the intact stability of ships considering geometry, weight distribution, and buoyancy.',
        points: [
          'Full GZ curve computation',
          'Metacentric height (GM) analysis',
          'Wind heeling moment assessment',
          'Stability criteria verification per IMO',
        ],
        image: '/services/ship-1.webp',
        desktopFrame: true,
      },
      {
        title: 'Damage Stability Assessment',
        description: 'Evaluates a ship\'s ability to retain stability and remain afloat in damage scenarios per regulatory standards.',
        points: [
          'Flooding scenario simulation',
          'Survivability analysis per SOLAS',
          'Residual stability calculation',
          'Progressive flooding assessment',
        ],
        image: '/services/damage-st.webp',
        desktopFrame: true,
      },
      {
        title: 'Longitudinal Strength Calculation',
        description: 'Analyses hull and bulkhead structural integrity to ensure vessel safety under all loading conditions.',
        points: [
          'Shear force & bending moment diagrams',
          'Still water and wave load analysis',
          'Hull girder stress verification',
          'Class-approved permissible limits',
        ],
        image: '/services/longitudnal.webp',
        desktopFrame: true,
      },
      {
        title: 'Ship Loading Optimization',
        description: 'Optimizes cargo loading and ballast distribution to achieve safe, efficient vessel trim and stability.',
        points: [
          'Automated ballast calculation',
          'Optimal trim computation',
          'Cargo plan validation',
          'Multi-port loading sequences',
        ],
        image: '/services/Ship-Loading-Optimization.webp',
        desktopFrame: true,
      },
      {
        title: 'Versatility & Compatibility',
        description: 'Compatible with a wide range of vessel types — from tankers to offshore support vessels.',
        points: [
          'Oil & Chemical Tankers',
          'Bulk Carriers & General Cargo',
          'Container & Ro/Ro Vessels',
          'Offshore Support & Pipelay Vessels',
        ],
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&auto=format&fit=crop&q=80',
      },
      {
        title: 'High Performance Engine',
        description: 'Delivers exceptional speed and accuracy using efficient algorithms built for real-world maritime use.',
        points: [
          'Sub-second calculation results',
          'High-resolution graphical output',
          'Multi-language interface support',
          'Offline operation capability',
        ],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&auto=format&fit=crop&q=80',
      },
    ],
    modules: [
      'Intact Stability', 'Longitudinal Strength', 'Damage Stability',
      'Crane Module', 'Sounding Module', 'Pipe Lay Module',
      'Ullage Module', 'Deck Loading',
    ],
    achievements: [
      'Class-approved calculations meeting DNV, BV, LR, ABS, and other major classification society requirements',
      'Deployed on 500+ vessels across tankers, bulk carriers, container ships, and offshore support vessels',
      'Reduces stability calculation time by 80% compared to manual methods',
      'Full SOLAS, MARPOL, and IMO compliance across all modules',
      'Supports multi-port voyage planning with real-time loading sequence optimization',
      'Used by leading shipowners across India, Middle East, and European maritime markets',
    ],
    whyChoose: [
      { icon: 'Award', title: 'Class Approved', description: 'Certified by major classification societies including DNV, BV, LR, and ABS.' },
      { icon: 'Shield', title: 'IMO Compliant', description: 'Fully compliant with all applicable IMO stability and safety regulations.' },
      { icon: 'Zap', title: 'Fast & Accurate', description: 'Sub-second calculations with class-grade accuracy for real-time operations.' },
      { icon: 'Ship', title: 'Multi-Vessel', description: 'Supports every vessel type from tankers and bulk carriers to offshore support vessels.' },
      { icon: 'Users', title: 'Expert Support', description: 'Backed by our naval architects and marine engineers for implementation and training.' },
      { icon: 'RefreshCw', title: 'Proven Track Record', description: 'Trusted by 500+ vessels and maritime operators across global shipping routes.' },
    ],
  },
  /* Marine Master removed per user request */
  /*
  {
    slug: 'marine-master',
    name: 'Marine Master',
    tagline: 'Vessel Management System',
    badge: 'Product',
    description: 'Cutting-edge vessel management system designed to revolutionize fleet operations with comprehensive cloud-based modules for maintenance, inventory, certification, and procurement.',
    heroImage: '/services/Cloud-Sharing.webp',
    serviceSlug: 'marine-software-services',
    stats: [
      { value: 'Cloud', label: 'Based Platform', icon: 'Cloud' },
      { value: '24/7', label: 'Maintenance Monitoring', icon: 'Activity' },
      { value: 'End-to-End', label: 'Fleet Management', icon: 'LayoutDashboard' },
      { value: 'Compliant', label: 'Audit & Certificates', icon: 'ClipboardCheck' },
    ],
    challenge: {
      image: '/services/Planned-Maintenance-System.webp',
      title: 'The Industry Challenge',
      body: 'Fleet operators struggle with fragmented systems for asset management, maintenance tracking, procurement, certification monitoring, audit compliance, inventory control, and resource allocation. Manual processes lead to inefficiencies, compliance risks, and operational challenges that cost time and money.'
    },
    overview: 'Marine Master is a comprehensive vessel management system with integrated modules for planned maintenance, inventory management, survey & certification tracking, purchase management, and audit compliance. Cloud-based with real-time data sharing, it keeps your entire fleet connected and compliant.',
    features: [
      {
        title: 'Planned Maintenance System',
        description: 'Equipment records for all departments with running hours and date-wise maintenance tracking.',
        points: [
          'Equipment records for all departments',
          'Running hours & date-wise tracking',
          'Scheduled / unscheduled job management',
          'Email alerts for due & overdue dates',
        ],
        image: '/services/Planned-Maintenance-System.webp',
      },
      {
        title: 'Inventory Management',
        description: 'Spare parts records with auto-update consumption tracking to keep inventory always accurate.',
        points: [
          'Spare parts catalogue & records',
          'Auto-update consumption tracking',
          'Critical spares alert system',
          'Integrated with purchase module',
        ],
        image: '/services/inventory-mgmt.webp',
      },
      {
        title: 'Survey & Certification Management',
        description: 'Certificate due date tracking, survey and audit scheduling with compliance reminders.',
        points: [
          'Certificate due date tracking',
          'Survey & audit scheduling',
          'Flag state & class condition tracking',
          'Automated compliance email alerts',
        ],
        image: '/services/Survey-Certification-Management.webp',
      },
      {
        title: 'Purchase Management',
        description: 'Purchase order creation, vendor assignment, order tracking, and delivery scheduling.',
        points: [
          'Purchase order creation & approval',
          'Vendor & executive assignment',
          'Order status & delivery tracking',
          'Budget control & reporting',
        ],
        image: '/services/Purchase-Management.webp',
      },
      {
        title: 'Cloud Sharing & Connectivity',
        description: 'All modules operate via cloud data sharing with regular updates and email backup for offline vessels.',
        points: [
          'Real-time cloud synchronization',
          'Email backup for offline vessels',
          'Multi-vessel fleet dashboard',
          'Role-based access control',
        ],
        image: '/services/Cloud-Sharing.webp',
      },
      {
        title: 'Simple & User-Friendly Interface',
        description: 'Intuitive navigation with automated alert messaging system and risk minimization through proactive monitoring.',
        points: [
          'Intuitive dashboard navigation',
          'Automated alert messaging',
          'Proactive risk monitoring',
          'Mobile-responsive design',
        ],
        image: '/services/Simple-and-User-Friendly-Interface.webp',
      },
    ],
    modules: [
      'Planned Maintenance', 'Inventory Management', 'Survey & Certification',
      'Purchase Management', 'Cloud Sharing', 'Audit Compliance',
    ],
    achievements: [
      'Complete fleet lifecycle management with automated maintenance history and asset integrity tracking',
      'Proactive maintenance scheduling reducing downtime and operational costs significantly',
      'Streamlined procurement processes with improved supply chain visibility and approval workflows',
      'Optimized resource allocation and workforce planning for improved operational efficiency',
      'Automated certification monitoring preventing compliance penalties with timely alerts',
      'Comprehensive audit management ensuring industry standard compliance across the fleet',
    ],
    whyChoose: [
      { icon: 'Cloud', title: 'Cloud-Based', description: 'All data synced in real-time across your fleet with email backup for offline vessels.' },
      { icon: 'Shield', title: 'Fully Compliant', description: 'Tracks all certificates, surveys, and audits to keep your fleet fully compliant.' },
      { icon: 'Bell', title: 'Smart Alerts', description: 'Automated email alerts for due dates, overdue items, and compliance deadlines.' },
      { icon: 'LayoutDashboard', title: 'Integrated Modules', description: 'One system for maintenance, inventory, certificates, and procurement.' },
      { icon: 'Users', title: 'Expert Support', description: 'Full implementation, training, and ongoing support from our maritime software team.' },
      { icon: 'TrendingUp', title: 'Proven Results', description: 'Trusted by fleet operators across India, Middle East, and global maritime markets.' },
    ],
  },
  */
];
