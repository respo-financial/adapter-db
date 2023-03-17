import { CreditBureauDetailUpdateManyWithoutUserDetailsInput } from "./CreditBureauDetailUpdateManyWithoutUserDetailsInput";
import { AddressDetailUpdateManyWithoutUserDetailsInput } from "./AddressDetailUpdateManyWithoutUserDetailsInput";
import { EmploymentDetailUpdateManyWithoutUserDetailsInput } from "./EmploymentDetailUpdateManyWithoutUserDetailsInput";
import { UserOnboardingStateWhereUniqueInput } from "../userOnboardingState/UserOnboardingStateWhereUniqueInput";

export type UserDetailUpdateInput = {
  userId?: string;
  isPersonalEmailVerified?: boolean | null;
  mobileNumber?: string;
  userProvidedFirstName?: string | null;
  userProvidedLastName?: string | null;
  aadhaarName?: string | null;
  aadhaarDob?: Date | null;
  panName?: string | null;
  pan?: string | null;
  panDob?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  personalEmail?: string | null;
  creditBureauDetails?: CreditBureauDetailUpdateManyWithoutUserDetailsInput;
  addressDetails?: AddressDetailUpdateManyWithoutUserDetailsInput;
  employmentDetails?: EmploymentDetailUpdateManyWithoutUserDetailsInput;
  userOnboardingState?: UserOnboardingStateWhereUniqueInput | null;
};
