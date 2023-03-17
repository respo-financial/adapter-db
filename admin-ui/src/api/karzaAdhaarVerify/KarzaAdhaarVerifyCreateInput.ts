import { InputJsonValue } from "../../types";

export type KarzaAdhaarVerifyCreateInput = {
  customerId: number;
  adhaarNumber: number;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  httpStatusCode?: number | null;
};
