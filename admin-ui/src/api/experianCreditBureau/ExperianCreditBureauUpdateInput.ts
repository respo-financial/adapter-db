import { InputJsonValue } from "../../types";

export type ExperianCreditBureauUpdateInput = {
  resPayload?: InputJsonValue;
  reqType?: string | null;
  experianStatusCode?: string | null;
  httpStatusCode?: string | null;
  errorMessage?: string | null;
  errorCode?: string | null;
  customerId?: number;
  reqPayload?: InputJsonValue;
};
