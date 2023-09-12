import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicalSkillUpdateInput = {
  name?: string | null;
  url?: string;
  user?: UserWhereUniqueInput | null;
};
