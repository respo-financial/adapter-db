import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KnowlarityMakeCallWhereInput = {
  agentId?: IntFilter;
  agentMobileNumber?: IntFilter;
  resPayload?: JsonFilter;
  customerId?: IntFilter;
  errorCode?: StringFilter;
  customerMobileNumber?: IntFilter;
  reqPayload?: JsonFilter;
  errorMessage?: StringFilter;
  id?: StringFilter;
  httpStatusCode?: StringNullableFilter;
};
