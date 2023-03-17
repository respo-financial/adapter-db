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
import { KarzaCustomerDetailService } from "../karzaCustomerDetail.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { KarzaCustomerDetailCreateInput } from "./KarzaCustomerDetailCreateInput";
import { KarzaCustomerDetailWhereInput } from "./KarzaCustomerDetailWhereInput";
import { KarzaCustomerDetailWhereUniqueInput } from "./KarzaCustomerDetailWhereUniqueInput";
import { KarzaCustomerDetailFindManyArgs } from "./KarzaCustomerDetailFindManyArgs";
import { KarzaCustomerDetailUpdateInput } from "./KarzaCustomerDetailUpdateInput";
import { KarzaCustomerDetail } from "./KarzaCustomerDetail";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class KarzaCustomerDetailControllerBase {
  constructor(
    protected readonly service: KarzaCustomerDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: KarzaCustomerDetail })
  @nestAccessControl.UseRoles({
    resource: "KarzaCustomerDetail",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: KarzaCustomerDetailCreateInput
  ): Promise<KarzaCustomerDetail> {
    return await this.service.create({
      data: data,
      select: {
        errorCode: true,
        errorMessage: true,
        panNumber: true,
        reqPayload: true,
        httpStatusCode: true,
        resPayload: true,
        customerId: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [KarzaCustomerDetail] })
  @ApiNestedQuery(KarzaCustomerDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "KarzaCustomerDetail",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<KarzaCustomerDetail[]> {
    const args = plainToClass(KarzaCustomerDetailFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        errorCode: true,
        errorMessage: true,
        panNumber: true,
        reqPayload: true,
        httpStatusCode: true,
        resPayload: true,
        customerId: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: KarzaCustomerDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "KarzaCustomerDetail",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: KarzaCustomerDetailWhereUniqueInput
  ): Promise<KarzaCustomerDetail | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        errorCode: true,
        errorMessage: true,
        panNumber: true,
        reqPayload: true,
        httpStatusCode: true,
        resPayload: true,
        customerId: true,
        id: true,
        createdAt: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: KarzaCustomerDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "KarzaCustomerDetail",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: KarzaCustomerDetailWhereUniqueInput,
    @common.Body() data: KarzaCustomerDetailUpdateInput
  ): Promise<KarzaCustomerDetail | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          errorCode: true,
          errorMessage: true,
          panNumber: true,
          reqPayload: true,
          httpStatusCode: true,
          resPayload: true,
          customerId: true,
          id: true,
          createdAt: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: KarzaCustomerDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "KarzaCustomerDetail",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: KarzaCustomerDetailWhereUniqueInput
  ): Promise<KarzaCustomerDetail | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          errorCode: true,
          errorMessage: true,
          panNumber: true,
          reqPayload: true,
          httpStatusCode: true,
          resPayload: true,
          customerId: true,
          id: true,
          createdAt: true,
          updatedAt: true,
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
