import { InputJsonValue } from "../../types";

export type KarzaPanCreateInput = {
  panNumber: string;
  reqPayload: InputJsonValue;
  resPayload?: InputJsonValue;
  errorMessage?: string | null;
  httpStatusCode?: string | null;
  errorCode?: string | null;
  customerId: number;
  panName?: string | null;
};
