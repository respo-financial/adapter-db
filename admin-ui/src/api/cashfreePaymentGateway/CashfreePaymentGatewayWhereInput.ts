import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CashfreePaymentGatewayWhereInput = {
  reqPayload?: JsonFilter;
  resPayload?: JsonFilter;
  errorMessage?: StringFilter;
  errorCode?: StringFilter;
  customerId?: IntNullableFilter;
  id?: StringFilter;
  httpStatusCode?: StringNullableFilter;
};
