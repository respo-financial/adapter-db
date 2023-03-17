import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ExperianCreditBureauCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" multiline source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="Address" source="address" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
