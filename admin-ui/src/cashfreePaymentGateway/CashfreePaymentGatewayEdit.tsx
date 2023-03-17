import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CashfreePaymentGatewayEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
      </SimpleForm>
    </Edit>
  );
};
