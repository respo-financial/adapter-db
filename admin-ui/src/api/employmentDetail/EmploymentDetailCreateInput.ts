import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type EmploymentDetailCreateInput = {
  employmentVerificationProvider?: "zype" | "karza" | null;
  isEmploymentEmailValid?: string | null;
  employmentVerificationStatus?: "verified" | "notVerified" | "Manual" | null;
  email?: string | null;
  companyName?: string | null;
  isOthers?: boolean | null;
  userDetail?: UserDetailWhereUniqueInput | null;
};
