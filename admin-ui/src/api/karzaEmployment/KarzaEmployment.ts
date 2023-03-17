import { JsonValue } from "type-fest";

export type KarzaEmployment = {
  resPayload: JsonValue;
  errorMessage: string | null;
  httpStatusCode: string;
  reqPayload: JsonValue;
  karzaStatusCode: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  karzaStatus: string | null;
};
