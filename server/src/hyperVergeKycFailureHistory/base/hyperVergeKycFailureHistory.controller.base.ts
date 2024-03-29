/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HyperVergeKycFailureHistoryService } from "../hyperVergeKycFailureHistory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HyperVergeKycFailureHistoryCreateInput } from "./HyperVergeKycFailureHistoryCreateInput";
import { HyperVergeKycFailureHistoryWhereInput } from "./HyperVergeKycFailureHistoryWhereInput";
import { HyperVergeKycFailureHistoryWhereUniqueInput } from "./HyperVergeKycFailureHistoryWhereUniqueInput";
import { HyperVergeKycFailureHistoryFindManyArgs } from "./HyperVergeKycFailureHistoryFindManyArgs";
import { HyperVergeKycFailureHistoryUpdateInput } from "./HyperVergeKycFailureHistoryUpdateInput";
import { HyperVergeKycFailureHistory } from "./HyperVergeKycFailureHistory";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HyperVergeKycFailureHistoryControllerBase {
  constructor(
    protected readonly service: HyperVergeKycFailureHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HyperVergeKycFailureHistory })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeKycFailureHistory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: HyperVergeKycFailureHistoryCreateInput
  ): Promise<HyperVergeKycFailureHistory> {
    return await this.service.create({
      data: data,
      select: {
        customerId: true,
        reqPayload: true,
        id: true,
        resPayload: true,
        httpStatusCode: true,
        errorCode: true,
        createdAt: true,
        updatedAt: true,
        errorMessage: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [HyperVergeKycFailureHistory] })
  @ApiNestedQuery(HyperVergeKycFailureHistoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HyperVergeKycFailureHistory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<HyperVergeKycFailureHistory[]> {
    const args = plainToClass(
      HyperVergeKycFailureHistoryFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        customerId: true,
        reqPayload: true,
        id: true,
        resPayload: true,
        httpStatusCode: true,
        errorCode: true,
        createdAt: true,
        updatedAt: true,
        errorMessage: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HyperVergeKycFailureHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeKycFailureHistory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: HyperVergeKycFailureHistoryWhereUniqueInput
  ): Promise<HyperVergeKycFailureHistory | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        customerId: true,
        reqPayload: true,
        id: true,
        resPayload: true,
        httpStatusCode: true,
        errorCode: true,
        createdAt: true,
        updatedAt: true,
        errorMessage: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HyperVergeKycFailureHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeKycFailureHistory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: HyperVergeKycFailureHistoryWhereUniqueInput,
    @common.Body() data: HyperVergeKycFailureHistoryUpdateInput
  ): Promise<HyperVergeKycFailureHistory | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          customerId: true,
          reqPayload: true,
          id: true,
          resPayload: true,
          httpStatusCode: true,
          errorCode: true,
          createdAt: true,
          updatedAt: true,
          errorMessage: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HyperVergeKycFailureHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeKycFailureHistory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: HyperVergeKycFailureHistoryWhereUniqueInput
  ): Promise<HyperVergeKycFailureHistory | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          customerId: true,
          reqPayload: true,
          id: true,
          resPayload: true,
          httpStatusCode: true,
          errorCode: true,
          createdAt: true,
          updatedAt: true,
          errorMessage: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
