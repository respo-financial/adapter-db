import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";

export type AddressDetailUpdateInput = {
  inBlacklistedRegion?: boolean | null;
  state?: string | null;
  country?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  userDetail?: UserDetailWhereUniqueInput | null;
  pincode?: string | null;
  addressType?: "permanent" | "communication" | null;
  city?: string | null;
  addressLine?: string | null;
  inApprovedRegion?: boolean | null;
};
