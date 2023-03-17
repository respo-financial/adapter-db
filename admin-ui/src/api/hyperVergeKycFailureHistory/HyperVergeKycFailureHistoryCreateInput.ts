import { InputJsonValue } from "../../types";

export type HyperVergeKycFailureHistoryCreateInput = {
  customerId?: number | null;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  httpStatusCode: number;
  errorCode: number;
  errorMessage: string;
};
