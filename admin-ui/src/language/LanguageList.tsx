import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const LanguageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Languages"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
