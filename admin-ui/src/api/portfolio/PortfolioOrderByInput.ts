import { SortOrder } from "../../util/SortOrder";

export type PortfolioOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  githubUrl?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  info?: SortOrder;
  liveUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
