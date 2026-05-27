export interface PortfolioItem {
  id: string;
  title: string;
  author: string;
  category: 'Book Publishing' | 'Layout & Design' | 'Co-Publishing';
  description: string;
  fullStory: string;
  image: string;
  imageAlt: string;
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
