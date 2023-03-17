import { InputJsonValue } from "../../types";

export type KarzaEmploymentCreateInput = {
  reqPayload: InputJsonValue;
  resPayload: InputJsonValue;
  customerId: number;
  errorCode?: string | null;
  errorMessage?: string | null;
  httpStatusCode?: string | null;
};
