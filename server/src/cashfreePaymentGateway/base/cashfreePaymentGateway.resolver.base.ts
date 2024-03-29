/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCashfreePaymentGatewayArgs } from "./CreateCashfreePaymentGatewayArgs";
import { UpdateCashfreePaymentGatewayArgs } from "./UpdateCashfreePaymentGatewayArgs";
import { DeleteCashfreePaymentGatewayArgs } from "./DeleteCashfreePaymentGatewayArgs";
import { CashfreePaymentGatewayFindManyArgs } from "./CashfreePaymentGatewayFindManyArgs";
import { CashfreePaymentGatewayFindUniqueArgs } from "./CashfreePaymentGatewayFindUniqueArgs";
import { CashfreePaymentGateway } from "./CashfreePaymentGateway";
import { CashfreePaymentGatewayService } from "../cashfreePaymentGateway.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashfreePaymentGateway)
export class CashfreePaymentGatewayResolverBase {
  constructor(
    protected readonly service: CashfreePaymentGatewayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CashfreePaymentGateway",
    action: "read",
    possession: "any",
  })
  async _cashfreePaymentGatewaysMeta(
    @graphql.Args() args: CashfreePaymentGatewayFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CashfreePaymentGateway])
  @nestAccessControl.UseRoles({
    resource: "CashfreePaymentGateway",
    action: "read",
    possession: "any",
  })
  async cashfreePaymentGateways(
    @graphql.Args() args: CashfreePaymentGatewayFindManyArgs
  ): Promise<CashfreePaymentGateway[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CashfreePaymentGateway, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CashfreePaymentGateway",
    action: "read",
    possession: "own",
  })
  async cashfreePaymentGateway(
    @graphql.Args() args: CashfreePaymentGatewayFindUniqueArgs
  ): Promise<CashfreePaymentGateway | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CashfreePaymentGateway)
  @nestAccessControl.UseRoles({
    resource: "CashfreePaymentGateway",
    action: "create",
    possession: "any",
  })
  async createCashfreePaymentGateway(
    @graphql.Args() args: CreateCashfreePaymentGatewayArgs
  ): Promise<CashfreePaymentGateway> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CashfreePaymentGateway)
  @nestAccessControl.UseRoles({
    resource: "CashfreePaymentGateway",
    action: "update",
    possession: "any",
  })
  async updateCashfreePaymentGateway(
    @graphql.Args() args: UpdateCashfreePaymentGatewayArgs
  ): Promise<CashfreePaymentGateway | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CashfreePaymentGateway)
  @nestAccessControl.UseRoles({
    resource: "CashfreePaymentGateway",
    action: "delete",
    possession: "any",
  })
  async deleteCashfreePaymentGateway(
    @graphql.Args() args: DeleteCashfreePaymentGatewayArgs
  ): Promise<CashfreePaymentGateway | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
