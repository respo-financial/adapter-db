import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type CreditBureauDetailWhereInput = {
  provider?: "experian" | "equifax" | "cibil";
  cbReportFileName?: StringNullableFilter;
  id?: StringFilter;
  reportPullDate?: DateTimeNullableFilter;
  cbUserId?: StringNullableFilter;
  userDetail?: UserDetailWhereUniqueInput;
};
