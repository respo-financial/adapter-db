import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type HyperVergeKycFailureHistoryWhereInput = {
  customerId?: IntNullableFilter;
  reqPayload?: JsonFilter;
  id?: StringFilter;
  resPayload?: JsonFilter;
  httpStatusCode?: IntFilter;
  errorCode?: IntFilter;
  errorMessage?: StringFilter;
};
