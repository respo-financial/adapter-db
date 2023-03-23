import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type CreditBureauDetailUpdateInput = {
  provider?: "experian" | "equifax" | "cibil" | null;
  cbReportFileName?: string | null;
  reportPullDate?: Date | null;
  cbUserId?: string | null;
  userDetail?: UserDetailWhereUniqueInput | null;
};
