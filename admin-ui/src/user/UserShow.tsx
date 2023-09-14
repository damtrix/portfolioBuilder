import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Home" target="userId" label="Homes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <TextField label="Logo" source="logo" />
            <TextField label="Top Bg Image" source="topBgImage" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Portfolio"
          target="userId"
          label="Portfolios"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TechnicalSkill"
          target="userId"
          label="TechnicalSkills"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
