import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KarzaVerifyAdhaarWhereInput = {
  id?: StringFilter;
  customerId?: IntFilter;
  adhaarNumber?: IntFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  httpStatusCode?: IntNullableFilter;
  errorMessage?: StringNullableFilter;
  errorCode?: StringNullableFilter;
};
