import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExperianCreditBureauService } from "./experianCreditBureau.service";
import { ExperianCreditBureauControllerBase } from "./base/experianCreditBureau.controller.base";

@swagger.ApiTags("experianCreditBureaus")
@common.Controller("experianCreditBureaus")
export class ExperianCreditBureauController extends ExperianCreditBureauControllerBase {
  constructor(
    protected readonly service: ExperianCreditBureauService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
