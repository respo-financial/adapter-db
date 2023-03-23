import { UserOnboardingStateWhereInput } from "./UserOnboardingStateWhereInput";
import { UserOnboardingStateOrderByInput } from "./UserOnboardingStateOrderByInput";

export type UserOnboardingStateFindManyArgs = {
  where?: UserOnboardingStateWhereInput;
  orderBy?: Array<UserOnboardingStateOrderByInput>;
  skip?: number;
  take?: number;
};
