import { InputJsonValue } from "../../types";

export type KarzaAdhaarConsentCreateInput = {
  reqPayload: InputJsonValue;
  resPayload?: InputJsonValue;
  customerId: number;
  mobileNumber?: number | null;
  httpStatusCode?: string | null;
  errorMessage?: string | null;
  errorCode?: string | null;
};
