import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KnowlarityMakeCallService } from "./knowlarityMakeCall.service";
import { KnowlarityMakeCallControllerBase } from "./base/knowlarityMakeCall.controller.base";

@swagger.ApiTags("knowlarityMakeCalls")
@common.Controller("knowlarityMakeCalls")
export class KnowlarityMakeCallController extends KnowlarityMakeCallControllerBase {
  constructor(
    protected readonly service: KnowlarityMakeCallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
