import { CreditBureauDetail as TCreditBureauDetail } from "../api/creditBureauDetail/CreditBureauDetail";

export const CREDITBUREAUDETAIL_TITLE_FIELD = "cbReportFileName";

export const CreditBureauDetailTitle = (
  record: TCreditBureauDetail
): string => {
  return record.cbReportFileName || String(record.id);
};
