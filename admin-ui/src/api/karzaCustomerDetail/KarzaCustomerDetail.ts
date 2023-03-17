import { JsonValue } from "type-fest";

export type KarzaCustomerDetail = {
  errorCode: string | null;
  errorMessage: string | null;
  panNumber: string;
  reqPayload: JsonValue;
  httpStatusCode: string | null;
  resPayload: JsonValue;
  customerId: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
