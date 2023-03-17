import { JsonValue } from "type-fest";

export type ExperianCreditBureau = {
  resPayload: JsonValue;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reqType: string | null;
  experianStatusCode: string | null;
  httpStatusCode: string | null;
  errorMessage: string | null;
  errorCode: string | null;
  customerId: number;
  reqPayload: JsonValue;
};
