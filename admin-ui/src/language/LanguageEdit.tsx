import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const LanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
