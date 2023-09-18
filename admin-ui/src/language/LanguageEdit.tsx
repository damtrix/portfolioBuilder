import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const LanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Acronym" source="acronym" />
        <ReferenceArrayInput
          source="portfolios"
          reference="Portfolio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PortfolioTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
