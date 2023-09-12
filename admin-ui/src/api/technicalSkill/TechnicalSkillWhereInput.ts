import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicalSkillWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
