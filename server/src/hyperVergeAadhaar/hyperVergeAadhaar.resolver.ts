import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HyperVergeAadhaarResolverBase } from "./base/hyperVergeAadhaar.resolver.base";
import { HyperVergeAadhaar } from "./base/HyperVergeAadhaar";
import { HyperVergeAadhaarService } from "./hyperVergeAadhaar.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HyperVergeAadhaar)
export class HyperVergeAadhaarResolver extends HyperVergeAadhaarResolverBase {
  constructor(
    protected readonly service: HyperVergeAadhaarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
