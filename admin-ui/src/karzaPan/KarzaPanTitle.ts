import { KarzaPan as TKarzaPan } from "../api/karzaPan/KarzaPan";

export const KARZAPAN_TITLE_FIELD = "panNumber";

export const KarzaPanTitle = (record: TKarzaPan): string => {
  return record.panNumber || String(record.id);
};
