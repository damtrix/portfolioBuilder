import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LanguageListRelationFilter } from "../language/LanguageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioWhereInput = {
  category?: StringFilter;
  createdAt?: DateTimeFilter;
  githubUrl?: StringFilter;
  id?: StringFilter;
  image?: StringFilter;
  info?: StringNullableFilter;
  language?: LanguageListRelationFilter;
  liveUrl?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
