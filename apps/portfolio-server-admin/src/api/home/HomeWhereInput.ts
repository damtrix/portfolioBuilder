import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HomeWhereInput = {
  id?: StringFilter;
  logo?: StringNullableFilter;
  topBgImage?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
