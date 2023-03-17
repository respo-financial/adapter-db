import { InputJsonValue } from "../../types";

export type HyperVergeKycSuccessCreateInput = {
  aadhaarNumber?: number | null;
  aadhaarDob?: Date | null;
  panNumber?: string | null;
  panDob?: Date | null;
  resPayload?: InputJsonValue;
  customerId?: number | null;
  mobileNumber?: number | null;
  reqPayload?: InputJsonValue;
};
