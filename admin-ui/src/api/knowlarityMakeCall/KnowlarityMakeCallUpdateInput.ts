import { InputJsonValue } from "../../types";

export type KnowlarityMakeCallUpdateInput = {
  agentId?: number;
  agentMobileNumber?: number;
  resPayload?: InputJsonValue;
  customerId?: number;
  errorCode?: string;
  customerMobileNumber?: number;
  reqPayload?: InputJsonValue;
  errorMessage?: string;
  httpStatusCode?: string | null;
};
