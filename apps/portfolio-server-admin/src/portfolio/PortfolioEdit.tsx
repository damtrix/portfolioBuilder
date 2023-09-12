import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LanguageTitle } from "../language/LanguageTitle";
import { UserTitle } from "../user/UserTitle";

export const PortfolioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="GitHub Url" source="GithubUrl" />
        <TextInput label="Image" source="image" />
        <TextInput label="Info" multiline source="info" />
        <ReferenceArrayInput
          source="language"
          reference="Language"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LanguageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Live url" source="liveUrl" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
