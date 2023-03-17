import { UserDetail } from "../userDetail/UserDetail";

export type EmploymentDetail = {
  employmentVerificationProvider?: "zype" | "karza" | null;
  isEmploymentEmailValid: string | null;
  employmentVerificationStatus?: "verified" | "notVerified" | "Manual" | null;
  email: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  companyName: string | null;
  isOthers: boolean | null;
  userDetail?: UserDetail | null;
};
