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
import { KarzaAdhaarConsentWhereInput } from "./KarzaAdhaarConsentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class KarzaAdhaarConsentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => KarzaAdhaarConsentWhereInput,
  })
  @ValidateNested()
  @Type(() => KarzaAdhaarConsentWhereInput)
  @IsOptional()
  @Field(() => KarzaAdhaarConsentWhereInput, {
    nullable: true,
  })
  every?: KarzaAdhaarConsentWhereInput;

  @ApiProperty({
    required: false,
    type: () => KarzaAdhaarConsentWhereInput,
  })
  @ValidateNested()
  @Type(() => KarzaAdhaarConsentWhereInput)
  @IsOptional()
  @Field(() => KarzaAdhaarConsentWhereInput, {
    nullable: true,
  })
  some?: KarzaAdhaarConsentWhereInput;

  @ApiProperty({
    required: false,
    type: () => KarzaAdhaarConsentWhereInput,
  })
  @ValidateNested()
  @Type(() => KarzaAdhaarConsentWhereInput)
  @IsOptional()
  @Field(() => KarzaAdhaarConsentWhereInput, {
    nullable: true,
  })
  none?: KarzaAdhaarConsentWhereInput;
}
export { KarzaAdhaarConsentListRelationFilter as KarzaAdhaarConsentListRelationFilter };