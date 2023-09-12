import { Home as THome } from "../api/home/Home";

export const HOME_TITLE_FIELD = "logo";

export const HomeTitle = (record: THome): string => {
  return record.logo || String(record.id);
};
