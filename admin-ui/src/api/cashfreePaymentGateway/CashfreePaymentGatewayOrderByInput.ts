import { SortOrder } from "../../util/SortOrder";

export type CashfreePaymentGatewayOrderByInput = {
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  errorMessage?: SortOrder;
  errorCode?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  httpStatusCode?: SortOrder;
};
