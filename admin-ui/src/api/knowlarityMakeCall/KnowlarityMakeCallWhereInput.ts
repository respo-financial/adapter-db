import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KnowlarityMakeCallWhereInput = {
  id?: StringFilter;
  customerId?: IntFilter;
  agentId?: IntFilter;
  customerMobileNumber?: IntFilter;
  agentMobileNumber?: IntFilter;
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  httpStatusCode?: StringNullableFilter;
  errorCode?: StringFilter;
  errorMessage?: StringFilter;
};
