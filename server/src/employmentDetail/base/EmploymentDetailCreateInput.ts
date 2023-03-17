/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumEmploymentDetailEmploymentVerificationProvider } from "./EnumEmploymentDetailEmploymentVerificationProvider";
import {
  IsEnum,
  IsOptional,
  IsString,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { EnumEmploymentDetailEmploymentVerificationStatus } from "./EnumEmploymentDetailEmploymentVerificationStatus";
import { UserDetailWhereUniqueInput } from "../../userDetail/base/UserDetailWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class EmploymentDetailCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumEmploymentDetailEmploymentVerificationProvider,
  })
  @IsEnum(EnumEmploymentDetailEmploymentVerificationProvider)
  @IsOptional()
  @Field(() => EnumEmploymentDetailEmploymentVerificationProvider, {
    nullable: true,
  })
  employmentVerificationProvider?: "zype" | "karza" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  isEmploymentEmailValid?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumEmploymentDetailEmploymentVerificationStatus,
  })
  @IsEnum(EnumEmploymentDetailEmploymentVerificationStatus)
  @IsOptional()
  @Field(() => EnumEmploymentDetailEmploymentVerificationStatus, {
    nullable: true,
  })
  employmentVerificationStatus?: "verified" | "notVerified" | "Manual" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  companyName?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isOthers?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => UserDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => UserDetailWhereUniqueInput, {
    nullable: true,
  })
  userDetail?: UserDetailWhereUniqueInput | null;
}

export { EmploymentDetailCreateInput as EmploymentDetailCreateInput };