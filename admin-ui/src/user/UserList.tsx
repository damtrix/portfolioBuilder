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
import { HOME_TITLE_FIELD } from "../home/HomeTitle";
import { TECHNICALSKILL_TITLE_FIELD } from "../technicalSkill/TechnicalSkillTitle";

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
      </Datagrid>
    </List>
  );
};
