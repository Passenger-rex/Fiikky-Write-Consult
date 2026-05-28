export interface PortfolioItem {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  fullStory: string;
  image: string;
  imageAlt: string;
  amazonUrl?: string;
}

export interface ServicePackage {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}
