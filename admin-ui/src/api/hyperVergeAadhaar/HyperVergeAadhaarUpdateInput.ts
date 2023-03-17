import { InputJsonValue } from "../../types";

export type HyperVergeAadhaarUpdateInput = {
  errorCode?: string | null;
  reqType?: string;
  hyperVergeStatus?: string | null;
  errorMessage?: string | null;
  customerId?: number;
  reqPayload?: InputJsonValue;
  httpStatusCode?: string;
  resPayload?: InputJsonValue;
  adhaarNumber?: string;
};
