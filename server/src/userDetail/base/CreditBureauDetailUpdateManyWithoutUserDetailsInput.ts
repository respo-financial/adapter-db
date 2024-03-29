/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CreditBureauDetailWhereUniqueInput } from "../../creditBureauDetail/base/CreditBureauDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CreditBureauDetailUpdateManyWithoutUserDetailsInput {
  @Field(() => [CreditBureauDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CreditBureauDetailWhereUniqueInput],
  })
  connect?: Array<CreditBureauDetailWhereUniqueInput>;

  @Field(() => [CreditBureauDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CreditBureauDetailWhereUniqueInput],
  })
  disconnect?: Array<CreditBureauDetailWhereUniqueInput>;

  @Field(() => [CreditBureauDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CreditBureauDetailWhereUniqueInput],
  })
  set?: Array<CreditBureauDetailWhereUniqueInput>;
}

export { CreditBureauDetailUpdateManyWithoutUserDetailsInput as CreditBureauDetailUpdateManyWithoutUserDetailsInput };
