import { SortOrder } from "../../util/SortOrder";

export type LanguageOrderByInput = {
  acronym?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  portfoliosId?: SortOrder;
  updatedAt?: SortOrder;
};
