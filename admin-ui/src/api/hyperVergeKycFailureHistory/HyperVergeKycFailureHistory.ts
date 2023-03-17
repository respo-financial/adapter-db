import { JsonValue } from "type-fest";

export type HyperVergeKycFailureHistory = {
  customerId: number | null;
  reqPayload: JsonValue;
  id: string;
  resPayload: JsonValue;
  httpStatusCode: number;
  errorCode: number;
  createdAt: Date;
  updatedAt: Date;
  errorMessage: string;
};
