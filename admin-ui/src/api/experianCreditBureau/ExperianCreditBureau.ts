import { JsonValue } from "type-fest";

export type ExperianCreditBureau = {
  errorMessage: string | null;
  errorCode: string | null;
  customerId: number;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reqType: string | null;
  httpStatusCode: string | null;
  experianStatusCode: string | null;
};
