/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { KarzaEmploymentCreateInput } from "./KarzaEmploymentCreateInput";

@ArgsType()
class CreateKarzaEmploymentArgs {
  @Field(() => KarzaEmploymentCreateInput, { nullable: false })
  data!: KarzaEmploymentCreateInput;
}

export { CreateKarzaEmploymentArgs as CreateKarzaEmploymentArgs };
