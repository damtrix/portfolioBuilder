import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";

export type LanguageWhereInput = {
  acronym?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  portfolios?: PortfolioListRelationFilter;
  updatedAt?: DateTimeFilter;
};
