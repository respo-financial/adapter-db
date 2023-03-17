import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ExperianCreditBureauWhereInput = {
  resPayload?: JsonFilter;
  id?: StringFilter;
  reqType?: StringNullableFilter;
  experianStatusCode?: StringNullableFilter;
  httpStatusCode?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
  errorCode?: StringNullableFilter;
  customerId?: IntFilter;
  reqPayload?: JsonFilter;
};
