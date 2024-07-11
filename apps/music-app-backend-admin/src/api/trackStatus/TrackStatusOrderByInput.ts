import { SortOrder } from "../../util/SortOrder";

export type TrackStatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  trackId?: SortOrder;
};
