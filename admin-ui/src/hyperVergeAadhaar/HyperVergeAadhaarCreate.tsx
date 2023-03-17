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
        <TextInput label="errorCode" source="errorCode" />
        <div />
        <TextInput label="mobile" source="mobile" />
      </SimpleForm>
    </Create>
  );
};
