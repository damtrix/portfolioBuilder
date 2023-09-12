import { HomeWhereUniqueInput } from "../home/HomeWhereUniqueInput";
import { PortfolioUpdateManyWithoutUsersInput } from "./PortfolioUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TechnicalSkillWhereUniqueInput } from "../technicalSkill/TechnicalSkillWhereUniqueInput";

export type UserUpdateInput = {
  aboutMe?: string;
  email?: string;
  firstName?: string | null;
  githubLink?: string | null;
  home?: HomeWhereUniqueInput | null;
  image?: string;
  lastName?: string | null;
  linkedinLink?: string | null;
  message?: string;
  password?: string;
  portfolios?: PortfolioUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  speciality?: string;
  technicalSkills?: TechnicalSkillWhereUniqueInput | null;
  twitterLink?: string | null;
  username?: string;
};
