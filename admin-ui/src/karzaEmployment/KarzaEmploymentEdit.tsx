import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaEmploymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput step={1} label="CustomerId" source="customerId" />
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
      </SimpleForm>
    </Edit>
  );
};
