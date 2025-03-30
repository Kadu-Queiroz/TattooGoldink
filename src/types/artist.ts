export interface PortfolioItem {
  id: string;
  url: string;
  title: string;
  style?: string;
  bodyPart?: string;
  description?: string;
}

export interface Artist {
  id: string;
  name: string;
  photo: string;
  backgroundArt: string;
  bio: string;
  specialty: string;
  instagram: string;
  whatsapp: string;
  portfolio: PortfolioItem[];
}