import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KarzaEmploymentWhereInput = {
  id?: StringFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  customerId?: IntFilter;
  errorCode?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
  httpStatusCode?: StringNullableFilter;
};
