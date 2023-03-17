import { SortOrder } from "../../util/SortOrder";

export type HyperVergeKycFailureHistoryOrderByInput = {
  customerId?: SortOrder;
  reqPayload?: SortOrder;
  id?: SortOrder;
  resPayload?: SortOrder;
  httpStatusCode?: SortOrder;
  errorCode?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  errorMessage?: SortOrder;
};
