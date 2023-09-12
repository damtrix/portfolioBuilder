import { Portfolio as TPortfolio } from "../api/portfolio/Portfolio";

export const PORTFOLIO_TITLE_FIELD = "category";

export const PortfolioTitle = (record: TPortfolio): string => {
  return record.category || String(record.id);
};
