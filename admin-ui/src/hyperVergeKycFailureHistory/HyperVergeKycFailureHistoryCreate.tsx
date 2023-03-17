import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HyperVergeKycFailureHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <div />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
        <NumberInput step={1} label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" multiline source="errorMessage" />
      </SimpleForm>
    </Create>
  );
};
