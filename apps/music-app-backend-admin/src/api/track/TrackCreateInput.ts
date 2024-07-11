import { InputJsonValue } from "../../types";
import { TrackStatusCreateNestedManyWithoutTracksInput } from "./TrackStatusCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  artist?: string | null;
  duration?: number | null;
  file?: InputJsonValue;
  title?: string | null;
  trackStatuses?: TrackStatusCreateNestedManyWithoutTracksInput;
};
