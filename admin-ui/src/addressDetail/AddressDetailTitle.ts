import { AddressDetail as TAddressDetail } from "../api/addressDetail/AddressDetail";

export const ADDRESSDETAIL_TITLE_FIELD = "state";

export const AddressDetailTitle = (record: TAddressDetail): string => {
  return record.state || String(record.id);
};
