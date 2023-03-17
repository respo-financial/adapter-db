import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HyperVergeOtpService } from "./hyperVergeOtp.service";
import { HyperVergeOtpControllerBase } from "./base/hyperVergeOtp.controller.base";

@swagger.ApiTags("hyperVergeOtps")
@common.Controller("hyperVergeOtps")
export class HyperVergeOtpController extends HyperVergeOtpControllerBase {
  constructor(
    protected readonly service: HyperVergeOtpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
