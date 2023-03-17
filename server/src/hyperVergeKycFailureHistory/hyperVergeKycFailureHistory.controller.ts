import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HyperVergeKycFailureHistoryService } from "./hyperVergeKycFailureHistory.service";
import { HyperVergeKycFailureHistoryControllerBase } from "./base/hyperVergeKycFailureHistory.controller.base";

@swagger.ApiTags("hyperVergeKycFailureHistories")
@common.Controller("hyperVergeKycFailureHistories")
export class HyperVergeKycFailureHistoryController extends HyperVergeKycFailureHistoryControllerBase {
  constructor(
    protected readonly service: HyperVergeKycFailureHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
