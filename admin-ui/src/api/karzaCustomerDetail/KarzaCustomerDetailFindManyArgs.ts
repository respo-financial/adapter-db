import { KarzaCustomerDetailWhereInput } from "./KarzaCustomerDetailWhereInput";
import { KarzaCustomerDetailOrderByInput } from "./KarzaCustomerDetailOrderByInput";

export type KarzaCustomerDetailFindManyArgs = {
  where?: KarzaCustomerDetailWhereInput;
  orderBy?: Array<KarzaCustomerDetailOrderByInput>;
  skip?: number;
  take?: number;
};
