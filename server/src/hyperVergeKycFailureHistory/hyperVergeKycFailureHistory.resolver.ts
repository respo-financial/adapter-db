import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HyperVergeKycFailureHistoryResolverBase } from "./base/hyperVergeKycFailureHistory.resolver.base";
import { HyperVergeKycFailureHistory } from "./base/HyperVergeKycFailureHistory";
import { HyperVergeKycFailureHistoryService } from "./hyperVergeKycFailureHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HyperVergeKycFailureHistory)
export class HyperVergeKycFailureHistoryResolver extends HyperVergeKycFailureHistoryResolverBase {
  constructor(
    protected readonly service: HyperVergeKycFailureHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
