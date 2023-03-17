import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const HyperVergeKycSuccessCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="aadhaarNumber" source="aadhaarNumber" />
        <DateTimeInput label="aadhaarDob" source="aadhaarDob" />
        <TextInput label="panNumber" source="panNumber" />
        <DateTimeInput label="panDob" source="panDob" />
        <div />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="mobileNumber" source="mobileNumber" />
        <div />
      </SimpleForm>
    </Create>
  );
};
