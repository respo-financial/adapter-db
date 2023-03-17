import { EmploymentDetailWhereInput } from "./EmploymentDetailWhereInput";
import { EmploymentDetailOrderByInput } from "./EmploymentDetailOrderByInput";

export type EmploymentDetailFindManyArgs = {
  where?: EmploymentDetailWhereInput;
  orderBy?: Array<EmploymentDetailOrderByInput>;
  skip?: number;
  take?: number;
};
