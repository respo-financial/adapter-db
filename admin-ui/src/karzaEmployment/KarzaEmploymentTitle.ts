import { KarzaEmployment as TKarzaEmployment } from "../api/karzaEmployment/KarzaEmployment";

export const KARZAEMPLOYMENT_TITLE_FIELD = "errorMessage";

export const KarzaEmploymentTitle = (record: TKarzaEmployment): string => {
  return record.errorMessage || String(record.id);
};
