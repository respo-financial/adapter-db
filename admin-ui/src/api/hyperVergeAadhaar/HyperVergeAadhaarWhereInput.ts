import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type HyperVergeAadhaarWhereInput = {
  id?: StringFilter;
  errorMessage?: StringNullableFilter;
  customerId?: IntFilter;
  httpStatusCode?: StringFilter;
  adhaarNumber?: StringFilter;
  errorCode?: StringNullableFilter;
  reqType?: StringNullableFilter;
  hyperVergeStatus?: StringNullableFilter;
};
