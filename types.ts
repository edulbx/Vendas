export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceLevel {
  id: number;
  level: string;
  title: string;
  subtitle: string;
  description: string;
  priceRange: string;
  recurrence?: string;
  features: ServiceFeature[];
  tools: string[];
  idealFor: string;
  color: string;
  gradient: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  logo: string;
  text: string;
}