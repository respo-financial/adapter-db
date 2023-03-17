import { InputJsonValue } from "../../types";

export type ExperianCreditBureauUpdateInput = {
  httpStatusCode?: string | null;
  errorMessage?: string | null;
  errorCode?: string | null;
  customerId?: number;
  address?: string | null;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
};
