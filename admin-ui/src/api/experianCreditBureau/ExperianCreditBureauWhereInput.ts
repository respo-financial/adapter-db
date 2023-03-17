import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExperianCreditBureauWhereInput = {
  httpStatusCode?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
  errorCode?: StringNullableFilter;
  customerId?: IntFilter;
  address?: StringNullableFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  id?: StringFilter;
};
