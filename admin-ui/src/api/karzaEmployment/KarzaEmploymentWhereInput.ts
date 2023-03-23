import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type KarzaEmploymentWhereInput = {
  errorMessage?: StringNullableFilter;
  httpStatusCode?: StringFilter;
  karzaStatusCode?: StringNullableFilter;
  id?: StringFilter;
  customerId?: IntFilter;
  karzaStatus?: StringNullableFilter;
};
