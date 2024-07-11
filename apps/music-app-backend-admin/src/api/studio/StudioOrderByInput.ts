import { SortOrder } from "../../util/SortOrder";

export type StudioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  contactInfo?: SortOrder;
};
