import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KarzaEmploymentResolverBase } from "./base/karzaEmployment.resolver.base";
import { KarzaEmployment } from "./base/KarzaEmployment";
import { KarzaEmploymentService } from "./karzaEmployment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KarzaEmployment)
export class KarzaEmploymentResolver extends KarzaEmploymentResolverBase {
  constructor(
    protected readonly service: KarzaEmploymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
