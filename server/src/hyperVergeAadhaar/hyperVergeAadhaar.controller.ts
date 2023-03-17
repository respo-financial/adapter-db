import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HyperVergeAadhaarService } from "./hyperVergeAadhaar.service";
import { HyperVergeAadhaarControllerBase } from "./base/hyperVergeAadhaar.controller.base";

@swagger.ApiTags("hyperVergeAadhaars")
@common.Controller("hyperVergeAadhaars")
export class HyperVergeAadhaarController extends HyperVergeAadhaarControllerBase {
  constructor(
    protected readonly service: HyperVergeAadhaarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
