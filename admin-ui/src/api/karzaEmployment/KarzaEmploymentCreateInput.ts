import { InputJsonValue } from "../../types";

export type KarzaEmploymentCreateInput = {
  resPayload: InputJsonValue;
  errorMessage?: string | null;
  httpStatusCode: string;
  reqPayload: InputJsonValue;
  karzaStatusCode?: string | null;
  customerId: number;
  karzaStatus?: string | null;
};
