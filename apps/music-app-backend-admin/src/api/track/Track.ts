import { JsonValue } from "type-fest";
import { TrackStatus } from "../trackStatus/TrackStatus";

export type Track = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  artist: string | null;
  duration: number | null;
  file: JsonValue;
  title: string | null;
  trackStatuses?: Array<TrackStatus>;
};
