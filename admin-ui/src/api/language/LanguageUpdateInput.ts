import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type LanguageUpdateInput = {
  acronym?: string;
  name?: string;
  portfolios?: PortfolioWhereUniqueInput | null;
};
