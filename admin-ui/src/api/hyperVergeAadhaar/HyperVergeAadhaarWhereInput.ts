import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type HyperVergeAadhaarWhereInput = {
  errorCode?: StringNullableFilter;
  reqType?: StringFilter;
  hyperVergeStatus?: StringNullableFilter;
  id?: StringFilter;
  errorMessage?: StringNullableFilter;
  customerId?: IntFilter;
  httpStatusCode?: StringFilter;
  adhaarNumber?: StringFilter;
};
