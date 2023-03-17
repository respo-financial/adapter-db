import { KarzaAdhaarVerify as TKarzaAdhaarVerify } from "../api/karzaAdhaarVerify/KarzaAdhaarVerify";

export const KARZAADHAARVERIFY_TITLE_FIELD = "id";

export const KarzaAdhaarVerifyTitle = (record: TKarzaAdhaarVerify): string => {
  return record.id || String(record.id);
};
