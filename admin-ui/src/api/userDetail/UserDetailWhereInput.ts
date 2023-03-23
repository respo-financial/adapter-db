import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CreditBureauDetailListRelationFilter } from "../creditBureauDetail/CreditBureauDetailListRelationFilter";
import { AddressDetailListRelationFilter } from "../addressDetail/AddressDetailListRelationFilter";
import { EmploymentDetailListRelationFilter } from "../employmentDetail/EmploymentDetailListRelationFilter";
import { UserOnboardingStateWhereUniqueInput } from "../userOnboardingState/UserOnboardingStateWhereUniqueInput";

export type UserDetailWhereInput = {
  id?: StringFilter;
  userId?: StringFilter;
  mobileNumber?: StringFilter;
  pan?: StringNullableFilter;
  panDob?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  personalEmail?: StringNullableFilter;
  creditBureauDetails?: CreditBureauDetailListRelationFilter;
  addressDetails?: AddressDetailListRelationFilter;
  employmentDetails?: EmploymentDetailListRelationFilter;
  userOnboardingState?: UserOnboardingStateWhereUniqueInput;
};
