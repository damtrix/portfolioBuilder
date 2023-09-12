import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HomeCreateInput = {
  logo?: string | null;
  topBgImage?: string | null;
  user?: UserWhereUniqueInput | null;
  userId?: string | null;
};
