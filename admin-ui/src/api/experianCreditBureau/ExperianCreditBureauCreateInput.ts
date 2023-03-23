import { InputJsonValue } from "../../types";

export type ExperianCreditBureauCreateInput = {
  errorMessage?: string | null;
  errorCode?: string | null;
  customerId: number;
  reqPayload: InputJsonValue;
  resPayload?: InputJsonValue;
  reqType?: string | null;
  httpStatusCode?: string | null;
  experianStatusCode?: string | null;
};
