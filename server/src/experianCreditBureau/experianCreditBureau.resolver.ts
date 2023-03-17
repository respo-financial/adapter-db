import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExperianCreditBureauResolverBase } from "./base/experianCreditBureau.resolver.base";
import { ExperianCreditBureau } from "./base/ExperianCreditBureau";
import { ExperianCreditBureauService } from "./experianCreditBureau.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExperianCreditBureau)
export class ExperianCreditBureauResolver extends ExperianCreditBureauResolverBase {
  constructor(
    protected readonly service: ExperianCreditBureauService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
