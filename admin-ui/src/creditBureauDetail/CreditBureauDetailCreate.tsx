import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";

export const CreditBureauDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="provider"
          label="provider"
          choices={[
            { label: "Experian", value: "experian" },
            { label: "Equifax", value: "equifax" },
            { label: "Cibil", value: "cibil" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="cbReportFileName" source="cbReportFileName" />
        <DateTimeInput label="reportPullDate" source="reportPullDate" />
        <TextInput label="cbUserId" source="cbUserId" />
        <ReferenceInput
          source="userdetail.id"
          reference="UserDetail"
          label="userDetails"
        >
          <SelectInput optionText={UserDetailTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
