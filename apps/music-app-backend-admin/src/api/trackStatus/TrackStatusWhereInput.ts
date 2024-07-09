import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type TrackStatusWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  track?: TrackWhereUniqueInput;
};
