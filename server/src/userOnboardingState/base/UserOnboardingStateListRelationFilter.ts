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
import { UserOnboardingStateWhereInput } from "./UserOnboardingStateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserOnboardingStateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserOnboardingStateWhereInput,
  })
  @ValidateNested()
  @Type(() => UserOnboardingStateWhereInput)
  @IsOptional()
  @Field(() => UserOnboardingStateWhereInput, {
    nullable: true,
  })
  every?: UserOnboardingStateWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserOnboardingStateWhereInput,
  })
  @ValidateNested()
  @Type(() => UserOnboardingStateWhereInput)
  @IsOptional()
  @Field(() => UserOnboardingStateWhereInput, {
    nullable: true,
  })
  some?: UserOnboardingStateWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserOnboardingStateWhereInput,
  })
  @ValidateNested()
  @Type(() => UserOnboardingStateWhereInput)
  @IsOptional()
  @Field(() => UserOnboardingStateWhereInput, {
    nullable: true,
  })
  none?: UserOnboardingStateWhereInput;
}
export { UserOnboardingStateListRelationFilter as UserOnboardingStateListRelationFilter };
