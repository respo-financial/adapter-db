import * as graphql from "@nestjs/graphql";
import { UserOnboardingStateResolverBase } from "./base/userOnboardingState.resolver.base";
import { UserOnboardingState } from "./base/UserOnboardingState";
import { UserOnboardingStateService } from "./userOnboardingState.service";

@graphql.Resolver(() => UserOnboardingState)
export class UserOnboardingStateResolver extends UserOnboardingStateResolverBase {
  constructor(protected readonly service: UserOnboardingStateService) {
    super(service);
  }
}
