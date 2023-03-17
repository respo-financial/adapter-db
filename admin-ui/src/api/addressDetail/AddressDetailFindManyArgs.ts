import { AddressDetailWhereInput } from "./AddressDetailWhereInput";
import { AddressDetailOrderByInput } from "./AddressDetailOrderByInput";

export type AddressDetailFindManyArgs = {
  where?: AddressDetailWhereInput;
  orderBy?: Array<AddressDetailOrderByInput>;
  skip?: number;
  take?: number;
};
