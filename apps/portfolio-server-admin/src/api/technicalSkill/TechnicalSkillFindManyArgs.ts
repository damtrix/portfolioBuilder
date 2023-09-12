import { TechnicalSkillWhereInput } from "./TechnicalSkillWhereInput";
import { TechnicalSkillOrderByInput } from "./TechnicalSkillOrderByInput";

export type TechnicalSkillFindManyArgs = {
  where?: TechnicalSkillWhereInput;
  orderBy?: Array<TechnicalSkillOrderByInput>;
  skip?: number;
  take?: number;
};
