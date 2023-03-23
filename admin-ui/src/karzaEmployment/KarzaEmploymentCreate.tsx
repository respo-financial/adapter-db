import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KarzaEmploymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <div />
        <TextInput label="karzaStatusCode" source="karzaStatusCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="karzaStatus" source="karzaStatus" />
      </SimpleForm>
    </Create>
  );
};
