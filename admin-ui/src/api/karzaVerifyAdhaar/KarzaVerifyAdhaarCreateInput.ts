import { InputJsonValue } from "../../types";

export type KarzaVerifyAdhaarCreateInput = {
  errorMessage?: string | null;
  customerId: number;
  adhaarNumber: number;
  resPayload?: InputJsonValue;
  httpStatusCode: number;
  reqPayload: InputJsonValue;
  errorCode?: string | null;
  statusCode: string;
  reqType: string;
};
