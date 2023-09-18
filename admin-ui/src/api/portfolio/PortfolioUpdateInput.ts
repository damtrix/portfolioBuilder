import { LanguageUpdateManyWithoutPortfoliosInput } from "./LanguageUpdateManyWithoutPortfoliosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioUpdateInput = {
  category?: string;
  githubUrl?: string;
  image?: string;
  info?: string | null;
  language?: LanguageUpdateManyWithoutPortfoliosInput;
  liveUrl?: string | null;
  title?: string;
  user?: UserWhereUniqueInput;
};
