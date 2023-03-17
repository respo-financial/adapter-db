import { InputJsonValue } from "../../types";

export type KarzaEmploymentUpdateInput = {
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  customerId?: number;
  errorCode?: string | null;
  errorMessage?: string | null;
  httpStatusCode?: string | null;
};
