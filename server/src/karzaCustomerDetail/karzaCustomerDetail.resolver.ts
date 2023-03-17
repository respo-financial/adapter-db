import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KarzaCustomerDetailResolverBase } from "./base/karzaCustomerDetail.resolver.base";
import { KarzaCustomerDetail } from "./base/KarzaCustomerDetail";
import { KarzaCustomerDetailService } from "./karzaCustomerDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KarzaCustomerDetail)
export class KarzaCustomerDetailResolver extends KarzaCustomerDetailResolverBase {
  constructor(
    protected readonly service: KarzaCustomerDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
