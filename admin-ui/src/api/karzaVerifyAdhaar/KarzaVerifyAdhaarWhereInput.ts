import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type KarzaVerifyAdhaarWhereInput = {
  errorMessage?: StringNullableFilter;
  id?: StringFilter;
  customerId?: IntFilter;
  adhaarNumber?: IntFilter;
  resPayload?: JsonFilter;
  httpStatusCode?: IntFilter;
  reqPayload?: JsonFilter;
  errorCode?: StringNullableFilter;
  statusCode?: StringFilter;
  reqType?: StringFilter;
};
