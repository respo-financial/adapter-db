import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaAdhaarConsentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="mobileNumber" source="mobileNumber" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
      </SimpleForm>
    </Create>
  );
};
