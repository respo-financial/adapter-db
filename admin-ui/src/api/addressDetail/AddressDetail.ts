import { UserDetail } from "../userDetail/UserDetail";

export type AddressDetail = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  inBlacklistedRegion: boolean | null;
  state: string | null;
  country: string | null;
  latitude: string | null;
  longitude: string | null;
  userDetail?: UserDetail | null;
  pincode: string | null;
  addressType?: "permanent" | "communication" | null;
  city: string | null;
  addressLine: string | null;
  inApprovedRegion: boolean | null;
};
