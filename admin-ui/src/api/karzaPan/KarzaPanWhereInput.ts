import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type KarzaPanWhereInput = {
  id?: StringFilter;
  panNumber?: StringFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  errorMessage?: StringNullableFilter;
  httpStatusCode?: StringNullableFilter;
  errorCode?: StringNullableFilter;
  customerId?: IntFilter;
};
