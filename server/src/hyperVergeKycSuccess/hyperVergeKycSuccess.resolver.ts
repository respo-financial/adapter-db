import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HyperVergeKycSuccessResolverBase } from "./base/hyperVergeKycSuccess.resolver.base";
import { HyperVergeKycSuccess } from "./base/HyperVergeKycSuccess";
import { HyperVergeKycSuccessService } from "./hyperVergeKycSuccess.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HyperVergeKycSuccess)
export class HyperVergeKycSuccessResolver extends HyperVergeKycSuccessResolverBase {
  constructor(
    protected readonly service: HyperVergeKycSuccessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
