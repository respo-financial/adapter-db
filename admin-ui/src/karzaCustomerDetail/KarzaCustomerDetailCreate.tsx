import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaCustomerDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="panNumber" source="panNumber" />
        <div />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <div />
        <NumberInput step={1} label="customerId" source="customerId" />
      </SimpleForm>
    </Create>
  );
};
