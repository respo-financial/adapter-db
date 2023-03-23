import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";

export const CreditBureauDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
