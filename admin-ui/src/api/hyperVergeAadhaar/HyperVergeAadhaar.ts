import { JsonValue } from "type-fest";

export type HyperVergeAadhaar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  errorMessage: string | null;
  customerId: number;
  reqPayload: JsonValue;
  httpStatusCode: string;
  resPayload: JsonValue;
  adhaarNumber: string;
  errorCode: string | null;
  reqType: string | null;
  hyperVergeStatus: string | null;
};
