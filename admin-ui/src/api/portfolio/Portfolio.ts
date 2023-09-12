import { Language } from "../language/Language";
import { User } from "../user/User";

export type Portfolio = {
  category: string;
  createdAt: Date;
  githubUrl: string;
  id: string;
  image: string;
  info: string | null;
  language?: Array<Language>;
  liveUrl: string | null;
  updatedAt: Date;
  user?: User | null;
};
