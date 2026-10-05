export interface CareerMilestone {
  role: string;
  organization: string;
  location: string;
  period: string;
  isConsulting: boolean;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  architecturalLayer?: {
    title: string;
    diagram: string[];
    explanation: string;
  };
}

export interface Repositories {
  name: string;
  description: string;
  techStack: string[];
  stars: number;
  forks: number;
  highlight: string;
}
