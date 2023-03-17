import { JsonValue } from "type-fest";

export type HyperVergeAadhaar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  errorMessage: string;
  customerId: number;
  reqPayload: JsonValue;
  httpStatusCode: string;
  errorCode: string | null;
  resPayload: JsonValue;
  mobile: string | null;
};
