import { HyperVergeAadhaar as THyperVergeAadhaar } from "../api/hyperVergeAadhaar/HyperVergeAadhaar";

export const HYPERVERGEAADHAAR_TITLE_FIELD = "errorMessage";

export const HyperVergeAadhaarTitle = (record: THyperVergeAadhaar): string => {
  return record.errorMessage || String(record.id);
};
