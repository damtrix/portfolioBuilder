import { Home } from "../home/Home";
import { Portfolio } from "../portfolio/Portfolio";
import { JsonValue } from "type-fest";
import { TechnicalSkill } from "../technicalSkill/TechnicalSkill";

export type User = {
  aboutMe: string;
  createdAt: Date;
  email: string;
  firstName: string | null;
  githubLink: string | null;
  home?: Array<Home>;
  id: string;
  image: string;
  lastName: string | null;
  linkedinLink: string | null;
  message: string;
  portfolios?: Array<Portfolio>;
  roles: JsonValue;
  speciality: string;
  technicalSkills?: Array<TechnicalSkill>;
  twitterLink: string | null;
  updatedAt: Date;
  username: string;
};
