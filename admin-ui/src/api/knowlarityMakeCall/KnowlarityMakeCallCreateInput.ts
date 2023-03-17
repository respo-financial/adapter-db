import { InputJsonValue } from "../../types";

export type KnowlarityMakeCallCreateInput = {
  customerId: number;
  agentId: number;
  customerMobileNumber: number;
  agentMobileNumber: number;
  reqPayload: InputJsonValue;
  resPayload: InputJsonValue;
  httpStatusCode?: string | null;
  errorCode: string;
  errorMessage: string;
};
