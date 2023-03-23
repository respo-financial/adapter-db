import { UserDetailUpdateManyWithoutUserOnboardingStatesInput } from "./UserDetailUpdateManyWithoutUserOnboardingStatesInput";

export type UserOnboardingStateUpdateInput = {
  isUserProvidedNameValid?: boolean | null;
  employmentType?:
    | "SALARIED"
    | "SELF_EMPLOYED"
    | "STUDENT"
    | "PROFESSIONAL"
    | null;
  isEmploymentEmailValidated?: boolean | null;
  apNameMatchStatus?: "success" | "failed" | "manual" | null;
  isAddressValid?: boolean | null;
  dobMatchStatus?: "success" | "failed" | "manual" | null;
  inApprovedRegion?: boolean | null;
  inBlacklistedRegion?: boolean | null;
  isPennytransferSuccess?: boolean | null;
  isEnachCreated?: boolean | null;
  isSelfieMatchSuccess?: boolean | null;
  isLoanAgreementSigned?: boolean | null;
  isCbSuccess?: boolean | null;
  isPanValid?: boolean | null;
  l1Status?:
    | "Accept"
    | "Manual"
    | "Waitlist"
    | "Fail"
    | "Reject"
    | "Refer"
    | null;
  l2Status?: "Accept" | "Manual" | "Waitlist" | "Fail" | "Reject" | null;
  combinedStatus?: "Accept" | "Manual" | "Waitlist" | "Fail" | "Reject" | null;
  isPersonalEmailVerified?: boolean | null;
  userDetails?: UserDetailUpdateManyWithoutUserOnboardingStatesInput;
};
