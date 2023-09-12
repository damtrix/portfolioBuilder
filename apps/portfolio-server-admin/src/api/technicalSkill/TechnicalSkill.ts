import { User } from "../user/User";

export type TechnicalSkill = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  url: string;
  user?: User;
};
