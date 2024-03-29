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
import { HyperVergeAadhaarService } from "../hyperVergeAadhaar.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HyperVergeAadhaarCreateInput } from "./HyperVergeAadhaarCreateInput";
import { HyperVergeAadhaarWhereInput } from "./HyperVergeAadhaarWhereInput";
import { HyperVergeAadhaarWhereUniqueInput } from "./HyperVergeAadhaarWhereUniqueInput";
import { HyperVergeAadhaarFindManyArgs } from "./HyperVergeAadhaarFindManyArgs";
import { HyperVergeAadhaarUpdateInput } from "./HyperVergeAadhaarUpdateInput";
import { HyperVergeAadhaar } from "./HyperVergeAadhaar";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HyperVergeAadhaarControllerBase {
  constructor(
    protected readonly service: HyperVergeAadhaarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HyperVergeAadhaar })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeAadhaar",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: HyperVergeAadhaarCreateInput
  ): Promise<HyperVergeAadhaar> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        errorMessage: true,
        customerId: true,
        reqPayload: true,
        httpStatusCode: true,
        resPayload: true,
        adhaarNumber: true,
        errorCode: true,
        reqType: true,
        hyperVergeStatus: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [HyperVergeAadhaar] })
  @ApiNestedQuery(HyperVergeAadhaarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HyperVergeAadhaar",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<HyperVergeAadhaar[]> {
    const args = plainToClass(HyperVergeAadhaarFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        errorMessage: true,
        customerId: true,
        reqPayload: true,
        httpStatusCode: true,
        resPayload: true,
        adhaarNumber: true,
        errorCode: true,
        reqType: true,
        hyperVergeStatus: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HyperVergeAadhaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeAadhaar",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: HyperVergeAadhaarWhereUniqueInput
  ): Promise<HyperVergeAadhaar | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        errorMessage: true,
        customerId: true,
        reqPayload: true,
        httpStatusCode: true,
        resPayload: true,
        adhaarNumber: true,
        errorCode: true,
        reqType: true,
        hyperVergeStatus: true,
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
  @swagger.ApiOkResponse({ type: HyperVergeAadhaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeAadhaar",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: HyperVergeAadhaarWhereUniqueInput,
    @common.Body() data: HyperVergeAadhaarUpdateInput
  ): Promise<HyperVergeAadhaar | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          errorMessage: true,
          customerId: true,
          reqPayload: true,
          httpStatusCode: true,
          resPayload: true,
          adhaarNumber: true,
          errorCode: true,
          reqType: true,
          hyperVergeStatus: true,
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
  @swagger.ApiOkResponse({ type: HyperVergeAadhaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HyperVergeAadhaar",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: HyperVergeAadhaarWhereUniqueInput
  ): Promise<HyperVergeAadhaar | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          errorMessage: true,
          customerId: true,
          reqPayload: true,
          httpStatusCode: true,
          resPayload: true,
          adhaarNumber: true,
          errorCode: true,
          reqType: true,
          hyperVergeStatus: true,
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
