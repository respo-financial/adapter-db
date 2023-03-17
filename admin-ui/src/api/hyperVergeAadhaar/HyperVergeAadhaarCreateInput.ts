import { InputJsonValue } from "../../types";

export type HyperVergeAadhaarCreateInput = {
  errorMessage: string;
  customerId: number;
  reqPayload: InputJsonValue;
  httpStatusCode: string;
  errorCode?: string | null;
  resPayload?: InputJsonValue;
  mobile?: string | null;
};
