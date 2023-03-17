/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsBoolean,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { CreditBureauDetail } from "../../creditBureauDetail/base/CreditBureauDetail";
import { AddressDetail } from "../../addressDetail/base/AddressDetail";
import { EmploymentDetail } from "../../employmentDetail/base/EmploymentDetail";
import { UserOnboardingState } from "../../userOnboardingState/base/UserOnboardingState";

@ObjectType()
class UserDetail {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  userId!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPersonalEmailVerified!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  mobileNumber!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userProvidedFirstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userProvidedLastName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  aadhaarName!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  aadhaarDob!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  panName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pan!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  panDob!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personalEmail!: string | null;

  @ApiProperty({
    required: false,
    type: () => [CreditBureauDetail],
  })
  @ValidateNested()
  @Type(() => CreditBureauDetail)
  @IsOptional()
  creditBureauDetails?: Array<CreditBureauDetail>;

  @ApiProperty({
    required: false,
    type: () => [AddressDetail],
  })
  @ValidateNested()
  @Type(() => AddressDetail)
  @IsOptional()
  addressDetails?: Array<AddressDetail>;

  @ApiProperty({
    required: false,
    type: () => [EmploymentDetail],
  })
  @ValidateNested()
  @Type(() => EmploymentDetail)
  @IsOptional()
  employmentDetails?: Array<EmploymentDetail>;

  @ApiProperty({
    required: false,
    type: () => UserOnboardingState,
  })
  @ValidateNested()
  @Type(() => UserOnboardingState)
  @IsOptional()
  userOnboardingState?: UserOnboardingState | null;
}

export { UserDetail as UserDetail };
