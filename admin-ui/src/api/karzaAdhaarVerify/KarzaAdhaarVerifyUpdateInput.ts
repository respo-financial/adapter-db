import { InputJsonValue } from "../../types";

export type KarzaAdhaarVerifyUpdateInput = {
  customerId?: number;
  adhaarNumber?: number;
  reqPayload?: InputJsonValue;
  resPayload?: InputJsonValue;
  httpStatusCode?: number | null;
};
