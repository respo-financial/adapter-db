import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ExperianCreditBureauCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="reqType" source="reqType" />
        <TextInput label="experianStatusCode" source="experianStatusCode" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorMessage" multiline source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <div />
      </SimpleForm>
    </Create>
  );
};
