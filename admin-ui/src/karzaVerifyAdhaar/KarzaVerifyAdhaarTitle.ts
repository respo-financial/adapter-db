import { KarzaVerifyAdhaar as TKarzaVerifyAdhaar } from "../api/karzaVerifyAdhaar/KarzaVerifyAdhaar";

export const KARZAVERIFYADHAAR_TITLE_FIELD = "errorMessage";

export const KarzaVerifyAdhaarTitle = (record: TKarzaVerifyAdhaar): string => {
  return record.errorMessage || String(record.id);
};
