import { InputJsonValue } from "../../types";

export type CashfreePaymentGatewayCreateInput = {
  reqPayload?: InputJsonValue;
  resPayload: InputJsonValue;
  errorMessage: string;
  errorCode: string;
  customerId?: number | null;
  httpStatusCode?: string | null;
};
