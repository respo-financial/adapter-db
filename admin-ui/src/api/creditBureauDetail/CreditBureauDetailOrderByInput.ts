import { SortOrder } from "../../util/SortOrder";

export type CreditBureauDetailOrderByInput = {
  provider?: SortOrder;
  cbReportFileName?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  id?: SortOrder;
  reportPullDate?: SortOrder;
  cbUserId?: SortOrder;
  userDetailId?: SortOrder;
};
