import { JsonValue } from "type-fest";

export type ExperianCreditBureau = {
  httpStatusCode: string | null;
  errorMessage: string | null;
  errorCode: string | null;
  customerId: number;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reqType: string | null;
  experianStatusCode: string | null;
};
