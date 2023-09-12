import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LanguageListRelationFilter } from "../language/LanguageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioWhereInput = {
  category?: StringFilter;
  GithubUrl?: StringFilter;
  id?: StringFilter;
  image?: StringFilter;
  info?: StringNullableFilter;
  language?: LanguageListRelationFilter;
  liveUrl?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
