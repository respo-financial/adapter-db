import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KarzaVerifyAdhaarService } from "./karzaVerifyAdhaar.service";
import { KarzaVerifyAdhaarControllerBase } from "./base/karzaVerifyAdhaar.controller.base";

@swagger.ApiTags("karzaVerifyAdhaars")
@common.Controller("karzaVerifyAdhaars")
export class KarzaVerifyAdhaarController extends KarzaVerifyAdhaarControllerBase {
  constructor(
    protected readonly service: KarzaVerifyAdhaarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
