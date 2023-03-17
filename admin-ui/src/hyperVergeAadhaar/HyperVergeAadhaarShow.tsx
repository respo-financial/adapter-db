import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HyperVergeAadhaarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="customerId" source="customerId" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="adhaarNumber" source="adhaarNumber" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="reqType" source="reqType" />
        <TextField label="hyperVergeStatus" source="hyperVergeStatus" />
      </SimpleShowLayout>
    </Show>
  );
};
