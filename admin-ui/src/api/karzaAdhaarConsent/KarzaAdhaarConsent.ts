import { JsonValue } from "type-fest";

export type KarzaAdhaarConsent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  customerId: number;
  mobileNumber: number | null;
  httpStatusCode: string | null;
  errorMessage: string | null;
  errorCode: string | null;
};
