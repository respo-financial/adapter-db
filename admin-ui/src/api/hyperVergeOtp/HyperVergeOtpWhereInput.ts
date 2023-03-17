import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HyperVergeOtpWhereInput = {
  id?: StringFilter;
  customerId?: IntFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  httpStatusCode?: StringFilter;
  errorCode?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
};
