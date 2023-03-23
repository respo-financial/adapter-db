import { JsonValue } from "type-fest";

export type KnowlarityMakeCall = {
  agentId: number;
  agentMobileNumber: number;
  resPayload: JsonValue;
  customerId: number;
  errorCode: string;
  customerMobileNumber: number;
  reqPayload: JsonValue;
  errorMessage: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  httpStatusCode: string | null;
};
