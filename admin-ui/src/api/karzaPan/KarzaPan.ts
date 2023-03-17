import { JsonValue } from "type-fest";

export type KarzaPan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  panNumber: string;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  errorMessage: string | null;
  httpStatusCode: string | null;
  errorCode: string | null;
  customerId: number;
  panName: string | null;
};
