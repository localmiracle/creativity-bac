/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TrackStatusWhereUniqueInput } from "../../trackStatus/base/TrackStatusWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TrackStatusUpdateManyWithoutTracksInput {
  @Field(() => [TrackStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrackStatusWhereUniqueInput],
  })
  connect?: Array<TrackStatusWhereUniqueInput>;

  @Field(() => [TrackStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrackStatusWhereUniqueInput],
  })
  disconnect?: Array<TrackStatusWhereUniqueInput>;

  @Field(() => [TrackStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrackStatusWhereUniqueInput],
  })
  set?: Array<TrackStatusWhereUniqueInput>;
}

export { TrackStatusUpdateManyWithoutTracksInput as TrackStatusUpdateManyWithoutTracksInput };