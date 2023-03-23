import { KarzaAdhaarConsent as TKarzaAdhaarConsent } from "../api/karzaAdhaarConsent/KarzaAdhaarConsent";

export const KARZAADHAARCONSENT_TITLE_FIELD = "httpStatusCode";

export const KarzaAdhaarConsentTitle = (
  record: TKarzaAdhaarConsent
): string => {
  return record.httpStatusCode || String(record.id);
};
