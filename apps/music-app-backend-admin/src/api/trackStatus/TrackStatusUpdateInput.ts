import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type TrackStatusUpdateInput = {
  status?: string | null;
  track?: TrackWhereUniqueInput | null;
};
