import { StringFilter } from "../../util/StringFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type LanguageWhereInput = {
  acronym?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  portfolios?: PortfolioWhereUniqueInput;
};
