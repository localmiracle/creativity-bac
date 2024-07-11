import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  artist?: SortOrder;
  duration?: SortOrder;
  file?: SortOrder;
  title?: SortOrder;
};
