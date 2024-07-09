import { InputJsonValue } from "../../types";
import { TrackStatusUpdateManyWithoutTracksInput } from "./TrackStatusUpdateManyWithoutTracksInput";

export type TrackUpdateInput = {
  artist?: string | null;
  duration?: number | null;
  file?: InputJsonValue;
  title?: string | null;
  trackStatuses?: TrackStatusUpdateManyWithoutTracksInput;
};
