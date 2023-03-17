import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KarzaEmploymentService } from "./karzaEmployment.service";
import { KarzaEmploymentControllerBase } from "./base/karzaEmployment.controller.base";

@swagger.ApiTags("karzaEmployments")
@common.Controller("karzaEmployments")
export class KarzaEmploymentController extends KarzaEmploymentControllerBase {
  constructor(
    protected readonly service: KarzaEmploymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
