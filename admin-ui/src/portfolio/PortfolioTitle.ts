import { Portfolio as TPortfolio } from "../api/portfolio/Portfolio";

export const PORTFOLIO_TITLE_FIELD = "title";

export const PortfolioTitle = (record: TPortfolio): string => {
  return record.title || String(record.id);
};
