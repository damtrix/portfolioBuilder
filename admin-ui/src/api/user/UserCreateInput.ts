import { HomeWhereUniqueInput } from "../home/HomeWhereUniqueInput";
import { PortfolioCreateNestedManyWithoutUsersInput } from "./PortfolioCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TechnicalSkillWhereUniqueInput } from "../technicalSkill/TechnicalSkillWhereUniqueInput";

export type UserCreateInput = {
  aboutMe: string;
  email: string;
  firstName?: string | null;
  githubLink?: string | null;
  home?: HomeWhereUniqueInput | null;
  image: string;
  lastName?: string | null;
  linkedinLink?: string | null;
  message: string;
  password: string;
  portfolios?: PortfolioCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  speciality: string;
  technicalSkills?: TechnicalSkillWhereUniqueInput | null;
  twitterLink?: string | null;
  username: string;
};
