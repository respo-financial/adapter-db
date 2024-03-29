/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KarzaAdhaarConsentWhereInput } from "./KarzaAdhaarConsentWhereInput";
import { Type } from "class-transformer";
import { KarzaAdhaarConsentOrderByInput } from "./KarzaAdhaarConsentOrderByInput";

@ArgsType()
class KarzaAdhaarConsentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => KarzaAdhaarConsentWhereInput,
  })
  @Field(() => KarzaAdhaarConsentWhereInput, { nullable: true })
  @Type(() => KarzaAdhaarConsentWhereInput)
  where?: KarzaAdhaarConsentWhereInput;

  @ApiProperty({
    required: false,
    type: [KarzaAdhaarConsentOrderByInput],
  })
  @Field(() => [KarzaAdhaarConsentOrderByInput], { nullable: true })
  @Type(() => KarzaAdhaarConsentOrderByInput)
  orderBy?: Array<KarzaAdhaarConsentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { KarzaAdhaarConsentFindManyArgs as KarzaAdhaarConsentFindManyArgs };
