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

import { USER_TITLE_FIELD } from "./UserTitle";
import { HOME_TITLE_FIELD } from "../home/HomeTitle";
import { TECHNICALSKILL_TITLE_FIELD } from "../technicalSkill/TechnicalSkillTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="About Me" source="aboutMe" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Github Link" source="githubLink" />
        <ReferenceField label="Home" source="home.id" reference="Home">
          <TextField source={HOME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Linkedin Link" source="linkedinLink" />
        <TextField label="Message" source="message" />
        <TextField label="Roles" source="roles" />
        <TextField label="Speciality" source="speciality" />
        <ReferenceField
          label="Technical Skills"
          source="technicalskill.id"
          reference="TechnicalSkill"
        >
          <TextField source={TECHNICALSKILL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Twitter Link" source="twitterLink" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
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
      </SimpleShowLayout>
    </Show>
  );
};
