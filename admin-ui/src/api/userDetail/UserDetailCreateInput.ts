import { CreditBureauDetailCreateNestedManyWithoutUserDetailsInput } from "./CreditBureauDetailCreateNestedManyWithoutUserDetailsInput";
import { AddressDetailCreateNestedManyWithoutUserDetailsInput } from "./AddressDetailCreateNestedManyWithoutUserDetailsInput";
import { EmploymentDetailCreateNestedManyWithoutUserDetailsInput } from "./EmploymentDetailCreateNestedManyWithoutUserDetailsInput";
import { UserOnboardingStateWhereUniqueInput } from "../userOnboardingState/UserOnboardingStateWhereUniqueInput";

export type UserDetailCreateInput = {
  userId: string;
  isPersonalEmailVerified?: boolean | null;
  mobileNumber: string;
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
  creditBureauDetails?: CreditBureauDetailCreateNestedManyWithoutUserDetailsInput;
  addressDetails?: AddressDetailCreateNestedManyWithoutUserDetailsInput;
  employmentDetails?: EmploymentDetailCreateNestedManyWithoutUserDetailsInput;
  userOnboardingState?: UserOnboardingStateWhereUniqueInput | null;
};
