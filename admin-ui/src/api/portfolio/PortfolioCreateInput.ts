import { LanguageCreateNestedManyWithoutPortfoliosInput } from "./LanguageCreateNestedManyWithoutPortfoliosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioCreateInput = {
  category: string;
  githubUrl: string;
  image: string;
  info?: string | null;
  language?: LanguageCreateNestedManyWithoutPortfoliosInput;
  liveUrl?: string | null;
  title: string;
  user: UserWhereUniqueInput;
};
