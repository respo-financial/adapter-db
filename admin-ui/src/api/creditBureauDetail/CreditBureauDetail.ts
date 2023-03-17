import { UserDetail } from "../userDetail/UserDetail";

export type CreditBureauDetail = {
  provider?: "experian" | "equifax" | "cibil" | null;
  cbReportFileName: string | null;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  reportPullDate: Date | null;
  cbUserId: string | null;
  userDetail?: UserDetail | null;
};
