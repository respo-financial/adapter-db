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
import { CreateEmploymentDetailArgs } from "./CreateEmploymentDetailArgs";
import { UpdateEmploymentDetailArgs } from "./UpdateEmploymentDetailArgs";
import { DeleteEmploymentDetailArgs } from "./DeleteEmploymentDetailArgs";
import { EmploymentDetailFindManyArgs } from "./EmploymentDetailFindManyArgs";
import { EmploymentDetailFindUniqueArgs } from "./EmploymentDetailFindUniqueArgs";
import { EmploymentDetail } from "./EmploymentDetail";
import { UserDetail } from "../../userDetail/base/UserDetail";
import { EmploymentDetailService } from "../employmentDetail.service";
@graphql.Resolver(() => EmploymentDetail)
export class EmploymentDetailResolverBase {
  constructor(protected readonly service: EmploymentDetailService) {}

  async _employmentDetailsMeta(
    @graphql.Args() args: EmploymentDetailFindManyArgs
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

  @graphql.Query(() => [EmploymentDetail])
  async employmentDetails(
    @graphql.Args() args: EmploymentDetailFindManyArgs
  ): Promise<EmploymentDetail[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => EmploymentDetail, { nullable: true })
  async employmentDetail(
    @graphql.Args() args: EmploymentDetailFindUniqueArgs
  ): Promise<EmploymentDetail | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmploymentDetail)
  async createEmploymentDetail(
    @graphql.Args() args: CreateEmploymentDetailArgs
  ): Promise<EmploymentDetail> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        userDetail: args.data.userDetail
          ? {
              connect: args.data.userDetail,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => EmploymentDetail)
  async updateEmploymentDetail(
    @graphql.Args() args: UpdateEmploymentDetailArgs
  ): Promise<EmploymentDetail | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          userDetail: args.data.userDetail
            ? {
                connect: args.data.userDetail,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => EmploymentDetail)
  async deleteEmploymentDetail(
    @graphql.Args() args: DeleteEmploymentDetailArgs
  ): Promise<EmploymentDetail | null> {
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

  @graphql.ResolveField(() => UserDetail, { nullable: true })
  async userDetail(
    @graphql.Parent() parent: EmploymentDetail
  ): Promise<UserDetail | null> {
    const result = await this.service.getUserDetail(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
