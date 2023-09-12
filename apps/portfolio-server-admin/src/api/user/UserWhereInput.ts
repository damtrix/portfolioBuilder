import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HomeWhereUniqueInput } from "../home/HomeWhereUniqueInput";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";
import { TechnicalSkillListRelationFilter } from "../technicalSkill/TechnicalSkillListRelationFilter";

export type UserWhereInput = {
  aboutMe?: StringFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  githubLink?: StringNullableFilter;
  homes?: HomeWhereUniqueInput;
  id?: StringFilter;
  image?: StringFilter;
  lastName?: StringNullableFilter;
  linkedinLink?: StringNullableFilter;
  message?: StringNullableFilter;
  portfolios?: PortfolioListRelationFilter;
  speciality?: StringFilter;
  technicalSkills?: TechnicalSkillListRelationFilter;
  twitterLink?: StringNullableFilter;
  username?: StringFilter;
};
