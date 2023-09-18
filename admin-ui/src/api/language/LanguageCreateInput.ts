import { PortfolioCreateNestedManyWithoutLanguagesInput } from "./PortfolioCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  acronym: string;
  name: string;
  portfolios?: PortfolioCreateNestedManyWithoutLanguagesInput;
};
