import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type LanguageWhereInput = {
  acronym?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  portfolios?: PortfolioWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
