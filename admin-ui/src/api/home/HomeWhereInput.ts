import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HomeWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  topBgImage?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
