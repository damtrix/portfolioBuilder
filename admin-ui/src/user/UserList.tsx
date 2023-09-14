import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="About Me" source="aboutMe" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Github Link" source="githubLink" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Linkedin Link" source="linkedinLink" />
        <TextField label="Message" source="message" />
        <TextField label="Roles" source="roles" />
        <TextField label="Speciality" source="speciality" />
        <TextField label="Twitter Link" source="twitterLink" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
