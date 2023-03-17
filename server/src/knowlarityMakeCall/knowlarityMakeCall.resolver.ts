import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KnowlarityMakeCallResolverBase } from "./base/knowlarityMakeCall.resolver.base";
import { KnowlarityMakeCall } from "./base/KnowlarityMakeCall";
import { KnowlarityMakeCallService } from "./knowlarityMakeCall.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KnowlarityMakeCall)
export class KnowlarityMakeCallResolver extends KnowlarityMakeCallResolverBase {
  constructor(
    protected readonly service: KnowlarityMakeCallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
