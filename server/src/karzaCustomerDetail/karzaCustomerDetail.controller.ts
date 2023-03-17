import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KarzaCustomerDetailService } from "./karzaCustomerDetail.service";
import { KarzaCustomerDetailControllerBase } from "./base/karzaCustomerDetail.controller.base";

@swagger.ApiTags("karzaCustomerDetails")
@common.Controller("karzaCustomerDetails")
export class KarzaCustomerDetailController extends KarzaCustomerDetailControllerBase {
  constructor(
    protected readonly service: KarzaCustomerDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
