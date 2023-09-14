import { HomeUpdateManyWithoutUsersInput } from "./HomeUpdateManyWithoutUsersInput";
import { PortfolioUpdateManyWithoutUsersInput } from "./PortfolioUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TechnicalSkillUpdateManyWithoutUsersInput } from "./TechnicalSkillUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  aboutMe?: string;
  email?: string;
  firstName?: string | null;
  githubLink?: string | null;
  home?: HomeUpdateManyWithoutUsersInput;
  image?: string;
  lastName?: string | null;
  linkedinLink?: string | null;
  message?: string;
  password?: string;
  portfolios?: PortfolioUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  speciality?: string;
  technicalSkills?: TechnicalSkillUpdateManyWithoutUsersInput;
  twitterLink?: string | null;
  username?: string;
};
