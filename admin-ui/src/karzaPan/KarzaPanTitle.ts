import { KarzaPan as TKarzaPan } from "../api/karzaPan/KarzaPan";

export const KARZAPAN_TITLE_FIELD = "panName";

export const KarzaPanTitle = (record: TKarzaPan): string => {
  return record.panName || String(record.id);
};
