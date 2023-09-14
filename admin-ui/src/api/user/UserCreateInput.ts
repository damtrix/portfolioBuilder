import { HomeCreateNestedManyWithoutUsersInput } from "./HomeCreateNestedManyWithoutUsersInput";
import { PortfolioCreateNestedManyWithoutUsersInput } from "./PortfolioCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TechnicalSkillCreateNestedManyWithoutUsersInput } from "./TechnicalSkillCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  aboutMe: string;
  email: string;
  firstName?: string | null;
  githubLink?: string | null;
  home?: HomeCreateNestedManyWithoutUsersInput;
  image: string;
  lastName?: string | null;
  linkedinLink?: string | null;
  message: string;
  password: string;
  portfolios?: PortfolioCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  speciality: string;
  technicalSkills?: TechnicalSkillCreateNestedManyWithoutUsersInput;
  twitterLink?: string | null;
  username: string;
};
