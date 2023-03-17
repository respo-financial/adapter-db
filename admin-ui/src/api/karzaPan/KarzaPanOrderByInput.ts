import { SortOrder } from "../../util/SortOrder";

export type KarzaPanOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  panNumber?: SortOrder;
  reqPayload?: SortOrder;
  resPayload?: SortOrder;
  errorMessage?: SortOrder;
  httpStatusCode?: SortOrder;
  errorCode?: SortOrder;
  customerId?: SortOrder;
};
