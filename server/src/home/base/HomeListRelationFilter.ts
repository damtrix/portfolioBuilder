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
import { HomeWhereInput } from "./HomeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HomeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HomeWhereInput,
  })
  @ValidateNested()
  @Type(() => HomeWhereInput)
  @IsOptional()
  @Field(() => HomeWhereInput, {
    nullable: true,
  })
  every?: HomeWhereInput;

  @ApiProperty({
    required: false,
    type: () => HomeWhereInput,
  })
  @ValidateNested()
  @Type(() => HomeWhereInput)
  @IsOptional()
  @Field(() => HomeWhereInput, {
    nullable: true,
  })
  some?: HomeWhereInput;

  @ApiProperty({
    required: false,
    type: () => HomeWhereInput,
  })
  @ValidateNested()
  @Type(() => HomeWhereInput)
  @IsOptional()
  @Field(() => HomeWhereInput, {
    nullable: true,
  })
  none?: HomeWhereInput;
}
export { HomeListRelationFilter as HomeListRelationFilter };
