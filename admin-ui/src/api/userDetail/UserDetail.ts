import { CreditBureauDetail } from "../creditBureauDetail/CreditBureauDetail";
import { AddressDetail } from "../addressDetail/AddressDetail";
import { EmploymentDetail } from "../employmentDetail/EmploymentDetail";
import { UserOnboardingState } from "../userOnboardingState/UserOnboardingState";

export type UserDetail = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  isPersonalEmailVerified: boolean | null;
  mobileNumber: string;
  userProvidedFirstName: string | null;
  userProvidedLastName: string | null;
  aadhaarName: string | null;
  aadhaarDob: Date | null;
  panName: string | null;
  pan: string | null;
  panDob: Date | null;
  firstName: string | null;
  lastName: string | null;
  personalEmail: string | null;
  creditBureauDetails?: Array<CreditBureauDetail>;
  addressDetails?: Array<AddressDetail>;
  employmentDetails?: Array<EmploymentDetail>;
  userOnboardingState?: UserOnboardingState | null;
};
