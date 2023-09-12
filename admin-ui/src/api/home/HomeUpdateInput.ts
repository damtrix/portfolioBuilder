import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HomeUpdateInput = {
  logo?: string | null;
  topBgImage?: string | null;
  user?: UserWhereUniqueInput | null;
  userId?: string | null;
};
