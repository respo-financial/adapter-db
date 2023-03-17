import { JsonValue } from "type-fest";

export type HyperVergeKycSuccess = {
  aadhaarNumber: number | null;
  aadhaarDob: Date | null;
  panNumber: string | null;
  panDob: Date | null;
  resPayload: JsonValue;
  customerId: number | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  mobileNumber: number | null;
  reqPayload: JsonValue;
};
