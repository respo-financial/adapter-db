/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CreditBureauDetailWhereUniqueInput } from "./CreditBureauDetailWhereUniqueInput";
import { CreditBureauDetailUpdateInput } from "./CreditBureauDetailUpdateInput";

@ArgsType()
class UpdateCreditBureauDetailArgs {
  @Field(() => CreditBureauDetailWhereUniqueInput, { nullable: false })
  where!: CreditBureauDetailWhereUniqueInput;
  @Field(() => CreditBureauDetailUpdateInput, { nullable: false })
  data!: CreditBureauDetailUpdateInput;
}

export { UpdateCreditBureauDetailArgs as UpdateCreditBureauDetailArgs };
