import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TrackStatusTitle } from "../trackStatus/TrackStatusTitle";

export const TrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="artist" source="artist" />
        <NumberInput step={1} label="duration" source="duration" />
        <div />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="trackStatuses"
          reference="TrackStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrackStatusTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
