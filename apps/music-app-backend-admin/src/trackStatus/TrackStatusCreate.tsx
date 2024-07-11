import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TrackTitle } from "../track/TrackTitle";

export const TrackStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <ReferenceInput source="track.id" reference="Track" label="Track">
          <SelectInput optionText={TrackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
