import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KarzaVerifyAdhaarResolverBase } from "./base/karzaVerifyAdhaar.resolver.base";
import { KarzaVerifyAdhaar } from "./base/KarzaVerifyAdhaar";
import { KarzaVerifyAdhaarService } from "./karzaVerifyAdhaar.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KarzaVerifyAdhaar)
export class KarzaVerifyAdhaarResolver extends KarzaVerifyAdhaarResolverBase {
  constructor(
    protected readonly service: KarzaVerifyAdhaarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
