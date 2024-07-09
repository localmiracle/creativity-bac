import { Studio as TStudio } from "../api/studio/Studio";

export const STUDIO_TITLE_FIELD = "name";

export const StudioTitle = (record: TStudio): string => {
  return record.name?.toString() || String(record.id);
};
