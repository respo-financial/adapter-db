import { InputJsonValue } from "../../types";

export type HyperVergeAadhaarCreateInput = {
  errorMessage?: string | null;
  customerId: number;
  reqPayload: InputJsonValue;
  httpStatusCode: string;
  resPayload?: InputJsonValue;
  adhaarNumber: string;
  errorCode?: string | null;
  reqType?: string | null;
  hyperVergeStatus?: string | null;
};
