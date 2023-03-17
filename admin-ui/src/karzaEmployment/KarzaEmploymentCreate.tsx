import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaEmploymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput step={1} label="CustomerId" source="customerId" />
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
      </SimpleForm>
    </Create>
  );
};
