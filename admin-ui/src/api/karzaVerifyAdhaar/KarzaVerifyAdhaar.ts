import { JsonValue } from "type-fest";

export type KarzaVerifyAdhaar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  adhaarNumber: number;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  httpStatusCode: number | null;
  errorMessage: string | null;
  errorCode: string | null;
};
