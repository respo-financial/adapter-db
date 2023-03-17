import { SortOrder } from "../../util/SortOrder";

export type EmploymentDetailOrderByInput = {
  employmentVerificationProvider?: SortOrder;
  isEmploymentEmailValid?: SortOrder;
  employmentVerificationStatus?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  companyName?: SortOrder;
  isOthers?: SortOrder;
  userDetailId?: SortOrder;
};
