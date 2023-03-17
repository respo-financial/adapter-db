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
import {
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { UserDetailWhereUniqueInput } from "../../userDetail/base/UserDetailWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumAddressDetailAddressType } from "./EnumAddressDetailAddressType";

@InputType()
class AddressDetailUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  inBlacklistedRegion?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  latitude?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  longitude?: string | null;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pincode?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAddressDetailAddressType,
  })
  @IsEnum(EnumAddressDetailAddressType)
  @IsOptional()
  @Field(() => EnumAddressDetailAddressType, {
    nullable: true,
  })
  addressType?: "permanent" | "communication" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  inApprovedRegion?: boolean | null;
}

export { AddressDetailUpdateInput as AddressDetailUpdateInput };
