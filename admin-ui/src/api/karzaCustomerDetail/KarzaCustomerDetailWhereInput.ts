import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";

export type KarzaCustomerDetailWhereInput = {
  errorCode?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
  panNumber?: StringFilter;
  reqPayload?: JsonFilter;
  httpStatusCode?: StringNullableFilter;
  resPayload?: JsonFilter;
  customerId?: IntFilter;
  id?: StringFilter;
};
