import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CashfreePaymentGatewayService } from "./cashfreePaymentGateway.service";
import { CashfreePaymentGatewayControllerBase } from "./base/cashfreePaymentGateway.controller.base";

@swagger.ApiTags("cashfreePaymentGateways")
@common.Controller("cashfreePaymentGateways")
export class CashfreePaymentGatewayController extends CashfreePaymentGatewayControllerBase {
  constructor(
    protected readonly service: CashfreePaymentGatewayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
