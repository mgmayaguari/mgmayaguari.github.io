export interface Project {
  name: string;
  description: string;
  href?: string;
  inProgress?: boolean;
}

export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Position {
  organization: string;
  location: string;
  roles: Role[];
}
