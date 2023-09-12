import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const LanguageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
