import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type AddressDetailWhereInput = {
  id?: StringFilter;
  inBlacklistedRegion?: BooleanNullableFilter;
  state?: StringNullableFilter;
  country?: StringNullableFilter;
  latitude?: StringNullableFilter;
  longitude?: StringNullableFilter;
  userDetail?: UserDetailWhereUniqueInput;
  pincode?: StringNullableFilter;
  addressType?: "permanent" | "communication";
  city?: StringNullableFilter;
  addressLine?: StringNullableFilter;
  inApprovedRegion?: BooleanNullableFilter;
};
