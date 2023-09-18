import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const LanguageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
