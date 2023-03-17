import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HyperVergeAadhaarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="errorMessage" source="errorMessage" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <div />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorCode" source="errorCode" />
        <div />
        <TextInput label="mobile" source="mobile" />
      </SimpleForm>
    </Edit>
  );
};
