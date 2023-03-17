import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KarzaAdhaarConsentWhereInput = {
  id?: StringFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  customerId?: IntFilter;
  mobileNumber?: IntNullableFilter;
  httpStatusCode?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
  errorCode?: StringNullableFilter;
};
