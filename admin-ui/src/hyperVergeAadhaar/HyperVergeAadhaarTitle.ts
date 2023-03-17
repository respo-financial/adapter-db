import { HyperVergeAadhaar as THyperVergeAadhaar } from "../api/hyperVergeAadhaar/HyperVergeAadhaar";

export const HYPERVERGEAADHAAR_TITLE_FIELD = "errorCode";

export const HyperVergeAadhaarTitle = (record: THyperVergeAadhaar): string => {
  return record.errorCode || String(record.id);
};
