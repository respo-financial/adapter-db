import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaVerifyAdhaarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
