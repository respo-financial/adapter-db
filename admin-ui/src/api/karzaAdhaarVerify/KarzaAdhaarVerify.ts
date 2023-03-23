import { JsonValue } from "type-fest";

export type KarzaAdhaarVerify = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  adhaarNumber: number;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  httpStatusCode: number | null;
};
