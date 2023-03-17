import { InputJsonValue } from "../../types";

export type CashfreePaymentGatewayUpdateInput = {
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  errorMessage?: string;
  errorCode?: string;
  customerId?: number | null;
  httpStatusCode?: string | null;
};
