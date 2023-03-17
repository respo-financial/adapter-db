import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaPanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="panNumber" source="panNumber" />
        <div />
        <div />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
      </SimpleForm>
    </Create>
  );
};
