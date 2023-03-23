import { InputJsonValue } from "../../types";

export type KarzaEmploymentUpdateInput = {
  resPayload?: InputJsonValue;
  errorMessage?: string | null;
  httpStatusCode?: string;
  reqPayload?: InputJsonValue;
  karzaStatusCode?: string | null;
  customerId?: number;
  karzaStatus?: string | null;
};
