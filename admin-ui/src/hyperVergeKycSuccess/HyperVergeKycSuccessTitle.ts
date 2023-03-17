import { HyperVergeKycSuccess as THyperVergeKycSuccess } from "../api/hyperVergeKycSuccess/HyperVergeKycSuccess";

export const HYPERVERGEKYCSUCCESS_TITLE_FIELD = "panNumber";

export const HyperVergeKycSuccessTitle = (
  record: THyperVergeKycSuccess
): string => {
  return record.panNumber || String(record.id);
};
