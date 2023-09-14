import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HomeListRelationFilter } from "../home/HomeListRelationFilter";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";
import { TechnicalSkillListRelationFilter } from "../technicalSkill/TechnicalSkillListRelationFilter";

export type UserWhereInput = {
  aboutMe?: StringFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  githubLink?: StringNullableFilter;
  home?: HomeListRelationFilter;
  id?: StringFilter;
  image?: StringFilter;
  lastName?: StringNullableFilter;
  linkedinLink?: StringNullableFilter;
  message?: StringFilter;
  portfolios?: PortfolioListRelationFilter;
  speciality?: StringFilter;
  technicalSkills?: TechnicalSkillListRelationFilter;
  twitterLink?: StringNullableFilter;
  username?: StringFilter;
};
