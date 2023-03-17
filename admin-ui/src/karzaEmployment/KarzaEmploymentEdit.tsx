import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaEmploymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <div />
        <TextInput label="karzaStatusCode" source="karzaStatusCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="karzaStatus" source="karzaStatus" />
      </SimpleForm>
    </Edit>
  );
};
