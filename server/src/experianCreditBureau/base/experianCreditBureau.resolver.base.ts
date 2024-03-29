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
import { CreateExperianCreditBureauArgs } from "./CreateExperianCreditBureauArgs";
import { UpdateExperianCreditBureauArgs } from "./UpdateExperianCreditBureauArgs";
import { DeleteExperianCreditBureauArgs } from "./DeleteExperianCreditBureauArgs";
import { ExperianCreditBureauFindManyArgs } from "./ExperianCreditBureauFindManyArgs";
import { ExperianCreditBureauFindUniqueArgs } from "./ExperianCreditBureauFindUniqueArgs";
import { ExperianCreditBureau } from "./ExperianCreditBureau";
import { ExperianCreditBureauService } from "../experianCreditBureau.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExperianCreditBureau)
export class ExperianCreditBureauResolverBase {
  constructor(
    protected readonly service: ExperianCreditBureauService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ExperianCreditBureau",
    action: "read",
    possession: "any",
  })
  async _experianCreditBureausMeta(
    @graphql.Args() args: ExperianCreditBureauFindManyArgs
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
  @graphql.Query(() => [ExperianCreditBureau])
  @nestAccessControl.UseRoles({
    resource: "ExperianCreditBureau",
    action: "read",
    possession: "any",
  })
  async experianCreditBureaus(
    @graphql.Args() args: ExperianCreditBureauFindManyArgs
  ): Promise<ExperianCreditBureau[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ExperianCreditBureau, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ExperianCreditBureau",
    action: "read",
    possession: "own",
  })
  async experianCreditBureau(
    @graphql.Args() args: ExperianCreditBureauFindUniqueArgs
  ): Promise<ExperianCreditBureau | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ExperianCreditBureau)
  @nestAccessControl.UseRoles({
    resource: "ExperianCreditBureau",
    action: "create",
    possession: "any",
  })
  async createExperianCreditBureau(
    @graphql.Args() args: CreateExperianCreditBureauArgs
  ): Promise<ExperianCreditBureau> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ExperianCreditBureau)
  @nestAccessControl.UseRoles({
    resource: "ExperianCreditBureau",
    action: "update",
    possession: "any",
  })
  async updateExperianCreditBureau(
    @graphql.Args() args: UpdateExperianCreditBureauArgs
  ): Promise<ExperianCreditBureau | null> {
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

  @graphql.Mutation(() => ExperianCreditBureau)
  @nestAccessControl.UseRoles({
    resource: "ExperianCreditBureau",
    action: "delete",
    possession: "any",
  })
  async deleteExperianCreditBureau(
    @graphql.Args() args: DeleteExperianCreditBureauArgs
  ): Promise<ExperianCreditBureau | null> {
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
