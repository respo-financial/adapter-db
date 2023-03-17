import { Module } from "@nestjs/common";
import { UserOnboardingStateModuleBase } from "./base/userOnboardingState.module.base";
import { UserOnboardingStateService } from "./userOnboardingState.service";
import { UserOnboardingStateController } from "./userOnboardingState.controller";
import { UserOnboardingStateResolver } from "./userOnboardingState.resolver";

@Module({
  imports: [UserOnboardingStateModuleBase],
  controllers: [UserOnboardingStateController],
  providers: [UserOnboardingStateService, UserOnboardingStateResolver],
  exports: [UserOnboardingStateService],
})
export class UserOnboardingStateModule {}
