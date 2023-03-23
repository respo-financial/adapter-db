import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KarzaAdhaarVerifyService } from "./karzaAdhaarVerify.service";
import { KarzaAdhaarVerifyControllerBase } from "./base/karzaAdhaarVerify.controller.base";

@swagger.ApiTags("karzaAdhaarVerifies")
@common.Controller("karzaAdhaarVerifies")
export class KarzaAdhaarVerifyController extends KarzaAdhaarVerifyControllerBase {
  constructor(
    protected readonly service: KarzaAdhaarVerifyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
