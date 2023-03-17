import { JsonValue } from "type-fest";

export type ExperianCreditBureau = {
  httpStatusCode: string | null;
  errorMessage: string | null;
  errorCode: string | null;
  customerId: number;
  address: string | null;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
