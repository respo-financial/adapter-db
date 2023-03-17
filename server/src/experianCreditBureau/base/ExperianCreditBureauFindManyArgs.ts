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
import { ExperianCreditBureauWhereInput } from "./ExperianCreditBureauWhereInput";
import { Type } from "class-transformer";
import { ExperianCreditBureauOrderByInput } from "./ExperianCreditBureauOrderByInput";

@ArgsType()
class ExperianCreditBureauFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExperianCreditBureauWhereInput,
  })
  @Field(() => ExperianCreditBureauWhereInput, { nullable: true })
  @Type(() => ExperianCreditBureauWhereInput)
  where?: ExperianCreditBureauWhereInput;

  @ApiProperty({
    required: false,
    type: [ExperianCreditBureauOrderByInput],
  })
  @Field(() => [ExperianCreditBureauOrderByInput], { nullable: true })
  @Type(() => ExperianCreditBureauOrderByInput)
  orderBy?: Array<ExperianCreditBureauOrderByInput>;

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

export { ExperianCreditBureauFindManyArgs as ExperianCreditBureauFindManyArgs };
