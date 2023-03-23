import { SortOrder } from "../../util/SortOrder";

export type HyperVergeOtpOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  httpStatusCode?: SortOrder;
  errorCode?: SortOrder;
  errorMessage?: SortOrder;
};
