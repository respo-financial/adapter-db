import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HyperVergeOtpResolverBase } from "./base/hyperVergeOtp.resolver.base";
import { HyperVergeOtp } from "./base/HyperVergeOtp";
import { HyperVergeOtpService } from "./hyperVergeOtp.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HyperVergeOtp)
export class HyperVergeOtpResolver extends HyperVergeOtpResolverBase {
  constructor(
    protected readonly service: HyperVergeOtpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
