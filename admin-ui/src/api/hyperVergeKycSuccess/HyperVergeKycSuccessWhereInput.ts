import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type HyperVergeKycSuccessWhereInput = {
  aadhaarNumber?: IntNullableFilter;
  aadhaarDob?: DateTimeNullableFilter;
  panNumber?: StringNullableFilter;
  panDob?: DateTimeNullableFilter;
  resPayload?: JsonFilter;
  customerId?: IntNullableFilter;
  id?: StringFilter;
  mobileNumber?: IntNullableFilter;
  reqPayload?: JsonFilter;
};
