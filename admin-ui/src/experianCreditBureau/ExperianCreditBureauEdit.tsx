import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ExperianCreditBureauEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" multiline source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <div />
        <div />
        <TextInput label="reqType" source="reqType" />
        <TextInput label="experianStatusCode" source="experianStatusCode" />
      </SimpleForm>
    </Edit>
  );
};
