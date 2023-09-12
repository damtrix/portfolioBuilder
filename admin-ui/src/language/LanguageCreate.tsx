import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const LanguageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Acronym" source="acronym" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="portfolios.id"
          reference="Portfolio"
          label="Portfolios"
        >
          <SelectInput optionText={PortfolioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
