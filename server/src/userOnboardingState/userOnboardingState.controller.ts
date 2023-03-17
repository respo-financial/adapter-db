import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserOnboardingStateService } from "./userOnboardingState.service";
import { UserOnboardingStateControllerBase } from "./base/userOnboardingState.controller.base";

@swagger.ApiTags("userOnboardingStates")
@common.Controller("userOnboardingStates")
export class UserOnboardingStateController extends UserOnboardingStateControllerBase {
  constructor(protected readonly service: UserOnboardingStateService) {
    super(service);
  }
}
