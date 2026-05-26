export interface ServiceSubItem {
  title: string;
  slug: string;
  description?: string;
  href?: string; // override the generated link URL
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  features: string[];
  slug: string;
  subItems?: ServiceSubItem[];
}
