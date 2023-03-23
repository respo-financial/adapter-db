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
import { HyperVergeOtpWhereInput } from "./HyperVergeOtpWhereInput";
import { Type } from "class-transformer";
import { HyperVergeOtpOrderByInput } from "./HyperVergeOtpOrderByInput";

@ArgsType()
class HyperVergeOtpFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HyperVergeOtpWhereInput,
  })
  @Field(() => HyperVergeOtpWhereInput, { nullable: true })
  @Type(() => HyperVergeOtpWhereInput)
  where?: HyperVergeOtpWhereInput;

  @ApiProperty({
    required: false,
    type: [HyperVergeOtpOrderByInput],
  })
  @Field(() => [HyperVergeOtpOrderByInput], { nullable: true })
  @Type(() => HyperVergeOtpOrderByInput)
  orderBy?: Array<HyperVergeOtpOrderByInput>;

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

export { HyperVergeOtpFindManyArgs as HyperVergeOtpFindManyArgs };
