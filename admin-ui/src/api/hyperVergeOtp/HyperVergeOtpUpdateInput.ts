import { InputJsonValue } from "../../types";

export type HyperVergeOtpUpdateInput = {
  customerId?: number;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  httpStatusCode?: string;
  errorCode?: string | null;
  errorMessage?: string | null;
};
