import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicalSkillCreateInput = {
  name?: string | null;
  url: string;
  users?: UserWhereUniqueInput | null;
};
