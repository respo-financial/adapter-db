import { KarzaCustomerDetail as TKarzaCustomerDetail } from "../api/karzaCustomerDetail/KarzaCustomerDetail";

export const KARZACUSTOMERDETAIL_TITLE_FIELD = "errorCode";

export const KarzaCustomerDetailTitle = (
  record: TKarzaCustomerDetail
): string => {
  return record.errorCode || String(record.id);
};
