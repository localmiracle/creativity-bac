import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type TrackStatusCreateInput = {
  status?: string | null;
  track?: TrackWhereUniqueInput | null;
};
