import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KarzaAdhaarConsentService } from "./karzaAdhaarConsent.service";
import { KarzaAdhaarConsentControllerBase } from "./base/karzaAdhaarConsent.controller.base";

@swagger.ApiTags("karzaAdhaarConsents")
@common.Controller("karzaAdhaarConsents")
export class KarzaAdhaarConsentController extends KarzaAdhaarConsentControllerBase {
  constructor(
    protected readonly service: KarzaAdhaarConsentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
