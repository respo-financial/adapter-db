import { SortOrder } from "../../util/SortOrder";

export type KarzaEmploymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  customerId?: SortOrder;
  errorCode?: SortOrder;
  errorMessage?: SortOrder;
  httpStatusCode?: SortOrder;
};
