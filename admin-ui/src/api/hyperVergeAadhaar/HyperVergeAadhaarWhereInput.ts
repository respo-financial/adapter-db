import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HyperVergeAadhaarWhereInput = {
  id?: StringFilter;
  errorMessage?: StringFilter;
  customerId?: IntFilter;
  reqPayload?: JsonFilter;
  httpStatusCode?: StringFilter;
  errorCode?: StringNullableFilter;
  resPayload?: JsonFilter;
  mobile?: StringNullableFilter;
};
