import { InputJsonValue } from "../../types";

export type ExperianCreditBureauUpdateInput = {
  httpStatusCode?: string | null;
  errorMessage?: string | null;
  errorCode?: string | null;
  customerId?: number;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  reqType?: string | null;
  experianStatusCode?: string | null;
};
