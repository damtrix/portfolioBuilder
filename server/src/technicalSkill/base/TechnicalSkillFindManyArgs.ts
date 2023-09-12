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
import { TechnicalSkillWhereInput } from "./TechnicalSkillWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TechnicalSkillOrderByInput } from "./TechnicalSkillOrderByInput";

@ArgsType()
class TechnicalSkillFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TechnicalSkillWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TechnicalSkillWhereInput, { nullable: true })
  @Type(() => TechnicalSkillWhereInput)
  where?: TechnicalSkillWhereInput;

  @ApiProperty({
    required: false,
    type: [TechnicalSkillOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TechnicalSkillOrderByInput], { nullable: true })
  @Type(() => TechnicalSkillOrderByInput)
  orderBy?: Array<TechnicalSkillOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TechnicalSkillFindManyArgs as TechnicalSkillFindManyArgs };
