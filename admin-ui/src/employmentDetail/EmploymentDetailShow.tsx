import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";

export const EmploymentDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="employmentVerificationProvider"
          source="employmentVerificationProvider"
        />
        <TextField
          label="isEmploymentEmailValid"
          source="isEmploymentEmailValid"
        />
        <TextField
          label="employmentVerificationStatus"
          source="employmentVerificationStatus"
        />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="companyName" source="companyName" />
        <BooleanField label="isOthers" source="isOthers" />
        <ReferenceField
          label="userDetails"
          source="userdetail.id"
          reference="UserDetail"
        >
          <TextField source={USERDETAIL_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
