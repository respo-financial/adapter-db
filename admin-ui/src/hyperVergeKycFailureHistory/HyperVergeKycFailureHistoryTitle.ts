import { HyperVergeKycFailureHistory as THyperVergeKycFailureHistory } from "../api/hyperVergeKycFailureHistory/HyperVergeKycFailureHistory";

export const HYPERVERGEKYCFAILUREHISTORY_TITLE_FIELD = "id";

export const HyperVergeKycFailureHistoryTitle = (
  record: THyperVergeKycFailureHistory
): string => {
  return record.id || String(record.id);
};
