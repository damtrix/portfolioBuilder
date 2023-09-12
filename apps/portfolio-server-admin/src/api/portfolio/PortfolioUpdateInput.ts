import { LanguageUpdateManyWithoutPortfoliosInput } from "./LanguageUpdateManyWithoutPortfoliosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioUpdateInput = {
  category?: string;
  GithubUrl?: string;
  image?: string;
  info?: string | null;
  language?: LanguageUpdateManyWithoutPortfoliosInput;
  liveUrl?: string | null;
  user?: UserWhereUniqueInput;
};
