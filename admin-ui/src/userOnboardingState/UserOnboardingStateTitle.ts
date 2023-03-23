import { UserOnboardingState as TUserOnboardingState } from "../api/userOnboardingState/UserOnboardingState";

export const USERONBOARDINGSTATE_TITLE_FIELD = "isUserProvidedNameValid";

export const UserOnboardingStateTitle = (
  record: TUserOnboardingState
): string => {
  return record.isUserProvidedNameValid || String(record.id);
};
