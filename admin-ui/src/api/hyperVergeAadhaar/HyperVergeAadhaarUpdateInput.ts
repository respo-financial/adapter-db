import { InputJsonValue } from "../../types";

export type HyperVergeAadhaarUpdateInput = {
  errorMessage?: string | null;
  customerId?: number;
  reqPayload?: InputJsonValue;
  httpStatusCode?: string;
  resPayload?: InputJsonValue;
  adhaarNumber?: string;
  errorCode?: string | null;
  reqType?: string;
  hyperVergeStatus?: string | null;
};
