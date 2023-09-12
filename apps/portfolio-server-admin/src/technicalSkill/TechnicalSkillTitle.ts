import { TechnicalSkill as TTechnicalSkill } from "../api/technicalSkill/TechnicalSkill";

export const TECHNICALSKILL_TITLE_FIELD = "name";

export const TechnicalSkillTitle = (record: TTechnicalSkill): string => {
  return record.name || String(record.id);
};
