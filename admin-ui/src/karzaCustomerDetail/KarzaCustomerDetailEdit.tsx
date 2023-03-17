import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaCustomerDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="panNumber" source="panNumber" />
        <div />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <div />
        <NumberInput step={1} label="customerId" source="customerId" />
      </SimpleForm>
    </Edit>
  );
};
