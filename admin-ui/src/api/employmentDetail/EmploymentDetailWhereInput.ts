import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type EmploymentDetailWhereInput = {
  employmentVerificationProvider?: "zype" | "karza";
  isEmploymentEmailValid?: StringNullableFilter;
  employmentVerificationStatus?: "verified" | "notVerified" | "Manual";
  email?: StringNullableFilter;
  id?: StringFilter;
  companyName?: StringNullableFilter;
  isOthers?: BooleanNullableFilter;
  userDetail?: UserDetailWhereUniqueInput;
};
