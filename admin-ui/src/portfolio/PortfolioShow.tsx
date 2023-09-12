import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PORTFOLIO_TITLE_FIELD } from "./PortfolioTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PortfolioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Github Url" source="githubUrl" />
        <TextField label="Id" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Info" source="info" />
        <TextField label="Live Url" source="liveUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Language"
          target="portfoliosId"
          label="Languages"
        >
          <Datagrid rowClick="show">
            <TextField label="Acronym" source="acronym" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Portfolios"
              source="portfolio.id"
              reference="Portfolio"
            >
              <TextField source={PORTFOLIO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
