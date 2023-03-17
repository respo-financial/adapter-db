import { EmploymentDetail as TEmploymentDetail } from "../api/employmentDetail/EmploymentDetail";

export const EMPLOYMENTDETAIL_TITLE_FIELD = "companyName";

export const EmploymentDetailTitle = (record: TEmploymentDetail): string => {
  return record.companyName || String(record.id);
};
