export interface Skill {
  name: string;
  category: "Backend" | "Frontend" | "Systems & Cloud" | "Data & DB";
  mastery: number; // 0 to 100
  description: string;
  keywords: string[];
  architectureDetail: string; // Detail for the architectural expansion
  simulationData?: {
    label: string;
    metrics: string;
    details: string;
  };
}

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
  sandboxEnabled: boolean;
}

export interface TravelVignette {
  id: string;
  selectTitle: string;
  selectSubtitle: string;
  focusTitle: string;
  iconName: string;
  mapCountries: string[];
  challengeTitle: string;
  challengeDesc: string;
  engineeringTitle: string;
  engineeringDesc: string;
  businessValue: string;
}
