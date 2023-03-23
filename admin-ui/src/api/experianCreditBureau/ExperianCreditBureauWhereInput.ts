import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExperianCreditBureauWhereInput = {
  errorMessage?: StringNullableFilter;
  errorCode?: StringNullableFilter;
  customerId?: IntFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  id?: StringFilter;
  reqType?: StringNullableFilter;
  httpStatusCode?: StringNullableFilter;
  experianStatusCode?: StringNullableFilter;
};
