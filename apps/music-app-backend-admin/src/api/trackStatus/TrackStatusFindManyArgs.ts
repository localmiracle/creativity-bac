import { TrackStatusWhereInput } from "./TrackStatusWhereInput";
import { TrackStatusOrderByInput } from "./TrackStatusOrderByInput";

export type TrackStatusFindManyArgs = {
  where?: TrackStatusWhereInput;
  orderBy?: Array<TrackStatusOrderByInput>;
  skip?: number;
  take?: number;
};
