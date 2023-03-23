import { JsonValue } from "type-fest";

export type KarzaVerifyAdhaar = {
  errorMessage: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  adhaarNumber: number;
  resPayload: JsonValue;
  httpStatusCode: number;
  reqPayload: JsonValue;
  errorCode: string | null;
  statusCode: string;
  reqType: string;
};
