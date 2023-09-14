import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type LanguageCreateInput = {
  acronym: string;
  name: string;
  portfolios: PortfolioWhereUniqueInput;
};
