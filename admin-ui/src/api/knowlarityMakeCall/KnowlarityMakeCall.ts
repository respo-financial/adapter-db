import { JsonValue } from "type-fest";

export type KnowlarityMakeCall = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  agentId: number;
  customerMobileNumber: number;
  agentMobileNumber: number;
  reqPayload: JsonValue;
  resPayload: JsonValue;
  httpStatusCode: string | null;
  errorCode: string;
  errorMessage: string;
};
