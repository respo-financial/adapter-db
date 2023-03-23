import { SortOrder } from "../../util/SortOrder";

export type UserOnboardingStateOrderByInput = {
  isUserProvidedNameValid?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  employmentType?: SortOrder;
  isEmploymentEmailValidated?: SortOrder;
  apNameMatchStatus?: SortOrder;
  isAddressValid?: SortOrder;
  dobMatchStatus?: SortOrder;
  inApprovedRegion?: SortOrder;
  inBlacklistedRegion?: SortOrder;
  isPennytransferSuccess?: SortOrder;
  isEnachCreated?: SortOrder;
  isSelfieMatchSuccess?: SortOrder;
  isLoanAgreementSigned?: SortOrder;
  isCbSuccess?: SortOrder;
  isPanValid?: SortOrder;
  l1Status?: SortOrder;
  l2Status?: SortOrder;
  combinedStatus?: SortOrder;
  isPersonalEmailVerified?: SortOrder;
};
