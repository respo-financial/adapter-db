import { InputJsonValue } from "../../types";

export type HyperVergeKycFailureHistoryUpdateInput = {
  customerId?: number | null;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  httpStatusCode?: number;
  errorCode?: number;
  errorMessage?: string;
};
