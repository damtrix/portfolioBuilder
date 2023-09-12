import { User } from "../user/User";

export type Home = {
  createdAt: Date;
  id: string;
  logo: string | null;
  topBgImage: string | null;
  updatedAt: Date;
  user?: User | null;
  userId: string | null;
};
