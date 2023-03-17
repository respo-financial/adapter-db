import { HyperVergeOtp as THyperVergeOtp } from "../api/hyperVergeOtp/HyperVergeOtp";

export const HYPERVERGEOTP_TITLE_FIELD = "httpStatusCode";

export const HyperVergeOtpTitle = (record: THyperVergeOtp): string => {
  return record.httpStatusCode || String(record.id);
};
