import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicalSkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
