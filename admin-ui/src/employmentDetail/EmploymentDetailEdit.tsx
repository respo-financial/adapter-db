import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";

export const EmploymentDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="employmentVerificationProvider"
          label="employmentVerificationProvider"
          choices={[
            { label: "Zype", value: "zype" },
            { label: "Karza", value: "karza" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="isEmploymentEmailValid"
          source="isEmploymentEmailValid"
          type="email"
        />
        <SelectInput
          source="employmentVerificationStatus"
          label="employmentVerificationStatus"
          choices={[
            { label: "Verified", value: "verified" },
            { label: "Not Verified", value: "notVerified" },
            { label: "Manual", value: "Manual" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="companyName" source="companyName" />
        <BooleanInput label="isOthers" source="isOthers" />
        <ReferenceInput
          source="userdetail.id"
          reference="UserDetail"
          label="userDetails"
        >
          <SelectInput optionText={UserDetailTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
