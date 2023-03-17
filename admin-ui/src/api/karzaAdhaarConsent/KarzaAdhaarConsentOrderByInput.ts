import { SortOrder } from "../../util/SortOrder";

export type KarzaAdhaarConsentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  customerId?: SortOrder;
  mobileNumber?: SortOrder;
  httpStatusCode?: SortOrder;
  errorMessage?: SortOrder;
  errorCode?: SortOrder;
};
