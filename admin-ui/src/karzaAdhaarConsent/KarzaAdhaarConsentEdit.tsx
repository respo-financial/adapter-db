import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaAdhaarConsentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="mobileNumber" source="mobileNumber" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
      </SimpleForm>
    </Edit>
  );
};
