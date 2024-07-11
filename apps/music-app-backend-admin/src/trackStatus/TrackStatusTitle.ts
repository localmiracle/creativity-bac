import { TrackStatus as TTrackStatus } from "../api/trackStatus/TrackStatus";

export const TRACKSTATUS_TITLE_FIELD = "status";

export const TrackStatusTitle = (record: TTrackStatus): string => {
  return record.status?.toString() || String(record.id);
};
