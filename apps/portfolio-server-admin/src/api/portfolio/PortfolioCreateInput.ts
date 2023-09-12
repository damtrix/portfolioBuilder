import { LanguageCreateNestedManyWithoutPortfoliosInput } from "./LanguageCreateNestedManyWithoutPortfoliosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioCreateInput = {
  category: string;
  GithubUrl: string;
  image: string;
  info?: string | null;
  language?: LanguageCreateNestedManyWithoutPortfoliosInput;
  liveUrl?: string | null;
  user: UserWhereUniqueInput;
};
