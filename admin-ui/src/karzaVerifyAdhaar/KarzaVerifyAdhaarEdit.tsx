import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaVerifyAdhaarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="adhaarNumber" source="adhaarNumber" />
        <div />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
      </SimpleForm>
    </Edit>
  );
};
