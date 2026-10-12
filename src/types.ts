export interface Project {
  name: string;
  description: string;
  href?: string;
  inProgress?: boolean;
}

export interface Position {
  title: string;
  organization?: string;
  location: string;
  period: string;
  note?: string;
  bullets: string[];
}
