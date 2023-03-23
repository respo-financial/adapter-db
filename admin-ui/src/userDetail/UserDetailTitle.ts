import { UserDetail as TUserDetail } from "../api/userDetail/UserDetail";

export const USERDETAIL_TITLE_FIELD = "userProvidedFirstName";

export const UserDetailTitle = (record: TUserDetail): string => {
  return record.userProvidedFirstName || String(record.id);
};
