import { StudioWhereInput } from "./StudioWhereInput";
import { StudioOrderByInput } from "./StudioOrderByInput";

export type StudioFindManyArgs = {
  where?: StudioWhereInput;
  orderBy?: Array<StudioOrderByInput>;
  skip?: number;
  take?: number;
};
