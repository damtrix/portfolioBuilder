import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HomeWhereUniqueInput } from "../home/HomeWhereUniqueInput";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";
import { TechnicalSkillWhereUniqueInput } from "../technicalSkill/TechnicalSkillWhereUniqueInput";

export type UserWhereInput = {
  aboutMe?: StringFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  githubLink?: StringNullableFilter;
  home?: HomeWhereUniqueInput;
  id?: StringFilter;
  image?: StringFilter;
  lastName?: StringNullableFilter;
  linkedinLink?: StringNullableFilter;
  message?: StringFilter;
  portfolios?: PortfolioListRelationFilter;
  speciality?: StringFilter;
  technicalSkills?: TechnicalSkillWhereUniqueInput;
  twitterLink?: StringNullableFilter;
  username?: StringFilter;
};
