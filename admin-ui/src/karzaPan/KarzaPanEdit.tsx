import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaPanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="panNumber" source="panNumber" />
        <div />
        <div />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
      </SimpleForm>
    </Edit>
  );
};
