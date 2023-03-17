import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KarzaPanResolverBase } from "./base/karzaPan.resolver.base";
import { KarzaPan } from "./base/KarzaPan";
import { KarzaPanService } from "./karzaPan.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KarzaPan)
export class KarzaPanResolver extends KarzaPanResolverBase {
  constructor(
    protected readonly service: KarzaPanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
