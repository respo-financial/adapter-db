import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaVerifyAdhaarCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="adhaarNumber" source="adhaarNumber" />
        <div />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
      </SimpleForm>
    </Create>
  );
};
