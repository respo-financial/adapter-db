import { SortOrder } from "../../util/SortOrder";

export type UserDetailOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  isPersonalEmailVerified?: SortOrder;
  mobileNumber?: SortOrder;
  userProvidedFirstName?: SortOrder;
  userProvidedLastName?: SortOrder;
  aadhaarName?: SortOrder;
  aadhaarDob?: SortOrder;
  panName?: SortOrder;
  pan?: SortOrder;
  panDob?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  personalEmail?: SortOrder;
  userOnboardingStateId?: SortOrder;
};
