import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERONBOARDINGSTATE_TITLE_FIELD } from "../userOnboardingState/UserOnboardingStateTitle";

export const UserDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"userDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <BooleanField
          label="isPersonalEmailVerified"
          source="isPersonalEmailVerified"
        />
        <TextField label="mobileNumber" source="mobileNumber" />
        <TextField
          label="userProvidedFirstName"
          source="userProvidedFirstName"
        />
        <TextField label="userProvidedLastName" source="userProvidedLastName" />
        <TextField label="aadhaarName" source="aadhaarName" />
        <TextField label="aadhaarDob" source="aadhaarDob" />
        <TextField label="panName" source="panName" />
        <TextField label="pan" source="pan" />
        <TextField label="panDob" source="panDob" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="personalEmail" source="personalEmail" />
        <ReferenceField
          label="userOnboardingState"
          source="useronboardingstate.id"
          reference="UserOnboardingState"
        >
          <TextField source={USERONBOARDINGSTATE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
