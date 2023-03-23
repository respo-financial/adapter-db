import { SortOrder } from "../../util/SortOrder";

export type KarzaAdhaarVerifyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  adhaarNumber?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  httpStatusCode?: SortOrder;
};
