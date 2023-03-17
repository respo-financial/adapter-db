import { SortOrder } from "../../util/SortOrder";

export type AddressDetailOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  inBlacklistedRegion?: SortOrder;
  state?: SortOrder;
  country?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  userDetailId?: SortOrder;
  pincode?: SortOrder;
  addressType?: SortOrder;
  city?: SortOrder;
  addressLine?: SortOrder;
  inApprovedRegion?: SortOrder;
};
