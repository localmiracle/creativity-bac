import { Track } from "../track/Track";

export type TrackStatus = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  track?: Track | null;
};
