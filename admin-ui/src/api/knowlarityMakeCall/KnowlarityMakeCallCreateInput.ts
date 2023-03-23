import { InputJsonValue } from "../../types";

export type KnowlarityMakeCallCreateInput = {
  agentId: number;
  agentMobileNumber: number;
  resPayload: InputJsonValue;
  customerId: number;
  errorCode: string;
  customerMobileNumber: number;
  reqPayload?: InputJsonValue;
  errorMessage: string;
  httpStatusCode?: string | null;
};
