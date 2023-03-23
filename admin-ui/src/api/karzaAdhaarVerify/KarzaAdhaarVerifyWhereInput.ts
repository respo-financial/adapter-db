import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type KarzaAdhaarVerifyWhereInput = {
  id?: StringFilter;
  customerId?: IntFilter;
  adhaarNumber?: IntFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  httpStatusCode?: IntNullableFilter;
};
