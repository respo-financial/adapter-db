import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HyperVergeKycFailureHistoryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <div />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
        <NumberInput step={1} label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" multiline source="errorMessage" />
      </SimpleForm>
    </Edit>
  );
};
