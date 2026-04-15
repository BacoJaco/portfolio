export interface TechStack {
  name: string;
  logoUrl: string;
  invertInDarkMode?: boolean;
  invertInLightMode?: boolean;
}

export interface PersonalInfo {
  name: string;
  profession: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  link: string;
  logo: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  Livelink?: string;
  gitHubLink: string | null;
  imageSrc?: string;
  date: string;
  working?: boolean;
  liveLinkAvailable?: boolean;
  gitHubLinkAvailable?: boolean;
}


export interface UserData {
  personalInfo: PersonalInfo;
  about: string;
  experience: Experience[];
  projects: Project[];
}

