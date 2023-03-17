import { JsonValue } from "type-fest";

export type KarzaEmployment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  customerId: number;
  errorCode: string | null;
  errorMessage: string | null;
  httpStatusCode: string | null;
};
