export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  features: string[];
  slug: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phone2?: string;
  email: string;
  supportHours: string;
  mapUrl: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}
