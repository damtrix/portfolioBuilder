import { PortfolioUpdateManyWithoutLanguagesInput } from "./PortfolioUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  acronym?: string;
  name?: string;
  portfolios?: PortfolioUpdateManyWithoutLanguagesInput;
};
