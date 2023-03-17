import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HyperVergeKycSuccessService } from "./hyperVergeKycSuccess.service";
import { HyperVergeKycSuccessControllerBase } from "./base/hyperVergeKycSuccess.controller.base";

@swagger.ApiTags("hyperVergeKycSuccesses")
@common.Controller("hyperVergeKycSuccesses")
export class HyperVergeKycSuccessController extends HyperVergeKycSuccessControllerBase {
  constructor(
    protected readonly service: HyperVergeKycSuccessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
