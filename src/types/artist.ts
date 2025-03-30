export interface Artist {
  id: string;
  name: string;
  photo: string;
  backgroundArt: string;
  bio: string;
  instagram: string;
  whatsapp: string;
  portfolio: {
    id: string;
    url: string;
    title: string;
  }[];
}