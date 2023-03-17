import { SortOrder } from "../../util/SortOrder";

export type KarzaVerifyAdhaarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  adhaarNumber?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  httpStatusCode?: SortOrder;
  errorMessage?: SortOrder;
  errorCode?: SortOrder;
};
