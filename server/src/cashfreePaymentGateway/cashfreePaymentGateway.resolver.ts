import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CashfreePaymentGatewayResolverBase } from "./base/cashfreePaymentGateway.resolver.base";
import { CashfreePaymentGateway } from "./base/CashfreePaymentGateway";
import { CashfreePaymentGatewayService } from "./cashfreePaymentGateway.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashfreePaymentGateway)
export class CashfreePaymentGatewayResolver extends CashfreePaymentGatewayResolverBase {
  constructor(
    protected readonly service: CashfreePaymentGatewayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
