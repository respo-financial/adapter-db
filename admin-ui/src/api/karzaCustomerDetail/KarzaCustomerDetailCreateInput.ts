import { InputJsonValue } from "../../types";

export type KarzaCustomerDetailCreateInput = {
  errorCode?: string | null;
  errorMessage?: string | null;
  panNumber: string;
  reqPayload?: InputJsonValue;
  httpStatusCode?: string | null;
  resPayload?: InputJsonValue;
  customerId: number;
};
