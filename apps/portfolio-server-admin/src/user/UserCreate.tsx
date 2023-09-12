import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HomeTitle } from "../home/HomeTitle";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";
import { TechnicalSkillTitle } from "../technicalSkill/TechnicalSkillTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="About Me" source="aboutMe" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Github Link" source="githubLink" />
        <ReferenceInput source="homes.id" reference="Home" label="Homes">
          <SelectInput optionText={HomeTitle} />
        </ReferenceInput>
        <TextInput label="Image" source="image" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Linkedin Link" source="linkedinLink" />
        <TextInput label="Message" multiline source="message" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="portfolios"
          reference="Portfolio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PortfolioTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Speciality" source="speciality" />
        <ReferenceArrayInput
          source="technicalSkills"
          reference="TechnicalSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TechnicalSkillTitle} />
        </ReferenceArrayInput>
        <TextInput label="Twitter Link" source="twitterLink" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
