import { SortOrder } from "../../util/SortOrder";

export type KnowlarityMakeCallOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  agentId?: SortOrder;
  customerMobileNumber?: SortOrder;
  agentMobileNumber?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  httpStatusCode?: SortOrder;
  errorCode?: SortOrder;
  errorMessage?: SortOrder;
};
