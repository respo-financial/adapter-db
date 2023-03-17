import { InputJsonValue } from "../../types";

export type KarzaVerifyAdhaarUpdateInput = {
  customerId?: number;
  adhaarNumber?: number;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  httpStatusCode?: number | null;
  errorMessage?: string | null;
  errorCode?: string | null;
};
