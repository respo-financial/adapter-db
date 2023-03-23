import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type CreditBureauDetailCreateInput = {
  provider?: "experian" | "equifax" | "cibil" | null;
  cbReportFileName?: string | null;
  reportPullDate?: Date | null;
  cbUserId?: string | null;
  userDetail?: UserDetailWhereUniqueInput | null;
};
