import { HyperVergeAadhaar as THyperVergeAadhaar } from "../api/hyperVergeAadhaar/HyperVergeAadhaar";

export const HYPERVERGEAADHAAR_TITLE_FIELD = "httpStatusCode";

export const HyperVergeAadhaarTitle = (record: THyperVergeAadhaar): string => {
  return record.httpStatusCode || String(record.id);
};
