import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KarzaPanService } from "./karzaPan.service";
import { KarzaPanControllerBase } from "./base/karzaPan.controller.base";

@swagger.ApiTags("karzaPans")
@common.Controller("karzaPans")
export class KarzaPanController extends KarzaPanControllerBase {
  constructor(
    protected readonly service: KarzaPanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
