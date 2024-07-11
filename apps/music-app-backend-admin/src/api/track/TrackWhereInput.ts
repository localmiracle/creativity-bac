import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TrackStatusListRelationFilter } from "../trackStatus/TrackStatusListRelationFilter";

export type TrackWhereInput = {
  id?: StringFilter;
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  file?: JsonFilter;
  title?: StringNullableFilter;
  trackStatuses?: TrackStatusListRelationFilter;
};
