import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserDetailListRelationFilter } from "../userDetail/UserDetailListRelationFilter";

export type UserOnboardingStateWhereInput = {
  id?: StringFilter;
  employmentType?: "SALARIED" | "SELF_EMPLOYED" | "STUDENT" | "PROFESSIONAL";
  isEmploymentEmailValidated?: BooleanNullableFilter;
  apNameMatchStatus?: "success" | "failed" | "manual";
  isAddressValid?: BooleanNullableFilter;
  dobMatchStatus?: "success" | "failed" | "manual";
  inApprovedRegion?: BooleanNullableFilter;
  inBlacklistedRegion?: BooleanNullableFilter;
  isPennytransferSuccess?: BooleanNullableFilter;
  isEnachCreated?: BooleanNullableFilter;
  isSelfieMatchSuccess?: BooleanNullableFilter;
  isLoanAgreementSigned?: BooleanNullableFilter;
  isCbSuccess?: BooleanNullableFilter;
  isPanValid?: BooleanNullableFilter;
  l1Status?: "Accept" | "Manual" | "Waitlist" | "Fail" | "Reject" | "Refer";
  l2Status?: "Accept" | "Manual" | "Waitlist" | "Fail" | "Reject";
  combinedStatus?: "Accept" | "Manual" | "Waitlist" | "Fail" | "Reject";
  userDetails?: UserDetailListRelationFilter;
};
