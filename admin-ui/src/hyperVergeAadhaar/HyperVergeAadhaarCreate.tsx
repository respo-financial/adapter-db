import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HyperVergeAadhaarCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="errorMessage" source="errorMessage" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <div />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <div />
        <TextInput label="adhaarNumber" source="adhaarNumber" />
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="reqType" source="reqType" />
        <TextInput label="hyperVergeStatus" source="hyperVergeStatus" />
      </SimpleForm>
    </Create>
  );
};
