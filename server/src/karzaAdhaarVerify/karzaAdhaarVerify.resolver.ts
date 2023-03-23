import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KarzaAdhaarVerifyResolverBase } from "./base/karzaAdhaarVerify.resolver.base";
import { KarzaAdhaarVerify } from "./base/KarzaAdhaarVerify";
import { KarzaAdhaarVerifyService } from "./karzaAdhaarVerify.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KarzaAdhaarVerify)
export class KarzaAdhaarVerifyResolver extends KarzaAdhaarVerifyResolverBase {
  constructor(
    protected readonly service: KarzaAdhaarVerifyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
