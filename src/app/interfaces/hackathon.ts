export interface Hackathon {
  _id?: string;
  name: string;
  description: string;
  price: number;
  location: string;
  date: Date;
  url?: string;
  __v?: number;
}

export type Hackathons = Array<Hackathon>;
