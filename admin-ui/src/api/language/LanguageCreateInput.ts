import { PortfolioCreateNestedManyWithoutLanguagesInput } from "./PortfolioCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  acronym: string;
  portfolios?: PortfolioCreateNestedManyWithoutLanguagesInput;
};
