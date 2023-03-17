import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KarzaAdhaarConsentResolverBase } from "./base/karzaAdhaarConsent.resolver.base";
import { KarzaAdhaarConsent } from "./base/KarzaAdhaarConsent";
import { KarzaAdhaarConsentService } from "./karzaAdhaarConsent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KarzaAdhaarConsent)
export class KarzaAdhaarConsentResolver extends KarzaAdhaarConsentResolverBase {
  constructor(
    protected readonly service: KarzaAdhaarConsentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
