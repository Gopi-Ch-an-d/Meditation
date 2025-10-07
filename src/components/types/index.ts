export interface PricingPlan {
  id: number;
  title: string;
  duration: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  description: string;
}

export interface CarouselProps {
  plans: PricingPlan[];
  interval?: number;
}