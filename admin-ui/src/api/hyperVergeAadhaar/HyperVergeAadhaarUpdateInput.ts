import { InputJsonValue } from "../../types";

export type HyperVergeAadhaarUpdateInput = {
  errorMessage?: string;
  customerId?: number;
  reqPayload?: InputJsonValue;
  httpStatusCode?: string;
  errorCode?: string | null;
  resPayload?: InputJsonValue;
  mobile?: string | null;
};
