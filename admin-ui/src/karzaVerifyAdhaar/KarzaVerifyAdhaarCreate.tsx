import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaVerifyAdhaarCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="errorMessage" source="errorMessage" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="adhaarNumber" source="adhaarNumber" />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
        <div />
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="statusCode" source="statusCode" />
        <TextInput label="reqType" source="reqType" />
      </SimpleForm>
    </Create>
  );
};
