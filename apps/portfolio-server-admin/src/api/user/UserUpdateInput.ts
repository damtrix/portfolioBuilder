import { HomeWhereUniqueInput } from "../home/HomeWhereUniqueInput";
import { PortfolioUpdateManyWithoutUsersInput } from "./PortfolioUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TechnicalSkillUpdateManyWithoutUsersInput } from "./TechnicalSkillUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  aboutMe?: string;
  email?: string;
  firstName?: string | null;
  githubLink?: string | null;
  homes?: HomeWhereUniqueInput | null;
  image?: string;
  lastName?: string | null;
  linkedinLink?: string | null;
  message?: string | null;
  password?: string;
  portfolios?: PortfolioUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  speciality?: string;
  technicalSkills?: TechnicalSkillUpdateManyWithoutUsersInput;
  twitterLink?: string | null;
  username?: string;
};
