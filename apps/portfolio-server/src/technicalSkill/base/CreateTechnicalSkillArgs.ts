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
import { TechnicalSkillCreateInput } from "./TechnicalSkillCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTechnicalSkillArgs {
  @ApiProperty({
    required: true,
    type: () => TechnicalSkillCreateInput,
  })
  @ValidateNested()
  @Type(() => TechnicalSkillCreateInput)
  @Field(() => TechnicalSkillCreateInput, { nullable: false })
  data!: TechnicalSkillCreateInput;
}

export { CreateTechnicalSkillArgs as CreateTechnicalSkillArgs };
