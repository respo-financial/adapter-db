import { KarzaEmployment as TKarzaEmployment } from "../api/karzaEmployment/KarzaEmployment";

export const KARZAEMPLOYMENT_TITLE_FIELD = "errorCode";

export const KarzaEmploymentTitle = (record: TKarzaEmployment): string => {
  return record.errorCode || String(record.id);
};
