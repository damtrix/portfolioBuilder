import { Portfolio } from "../portfolio/Portfolio";

export type Language = {
  acronym: string;
  createdAt: Date;
  id: string;
  name: string;
  portfolios?: Portfolio | null;
  updatedAt: Date;
};
