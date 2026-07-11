export interface Expert {
  name: string;
  title: string;
  imageUrl: string;
}

export interface BenefitItem {
  text: string;
  subtext?: string;
}

export interface Topic {
  title: string;
  imageUrl: string;
  link: string;
}

export interface Recommendation {
  text: string;
  author: string;
  role?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface InstitutionLogo {
  name: string;
  imageUrl: string;
  width: number;
  height: number;
}
