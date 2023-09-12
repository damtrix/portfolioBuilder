import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicalSkillCreateInput = {
  name?: string | null;
  url: string;
  user?: UserWhereUniqueInput | null;
};
