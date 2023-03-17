import { JsonValue } from "type-fest";

export type HyperVergeAadhaar = {
  errorCode: string | null;
  reqType: string;
  hyperVergeStatus: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  errorMessage: string | null;
  customerId: number;
  reqPayload: JsonValue;
  httpStatusCode: string;
  resPayload: JsonValue;
  adhaarNumber: string;
};
