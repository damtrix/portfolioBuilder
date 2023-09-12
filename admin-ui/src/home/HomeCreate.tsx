import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const HomeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Logo" source="logo" />
        <TextInput label="Top Bg Image" source="topBgImage" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
