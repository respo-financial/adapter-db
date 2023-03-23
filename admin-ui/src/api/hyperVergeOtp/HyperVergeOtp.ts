import { JsonValue } from "type-fest";

export type HyperVergeOtp = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  httpStatusCode: string;
  errorCode: string | null;
  errorMessage: string | null;
};
