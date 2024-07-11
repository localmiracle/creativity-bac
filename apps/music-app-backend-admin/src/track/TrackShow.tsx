import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRACK_TITLE_FIELD } from "./TrackTitle";

export const TrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="artist" source="artist" />
        <TextField label="duration" source="duration" />
        <TextField label="file" source="file" />
        <TextField label="title" source="title" />
        <ReferenceManyField
          reference="TrackStatus"
          target="trackId"
          label="TrackStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="status" source="status" />
            <ReferenceField label="Track" source="track.id" reference="Track">
              <TextField source={TRACK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
