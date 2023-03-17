import { JsonValue } from "type-fest";

export type CashfreePaymentGateway = {
  reqPayload: JsonValue;
  resPayload: JsonValue;
  errorMessage: string;
  errorCode: string;
  customerId: number | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  httpStatusCode: string | null;
};
