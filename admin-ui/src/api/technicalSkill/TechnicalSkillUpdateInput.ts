import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicalSkillUpdateInput = {
  name?: string | null;
  url?: string;
  users?: UserWhereUniqueInput | null;
};
