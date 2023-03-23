import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const KarzaVerifyAdhaarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="adhaarNumber" source="adhaarNumber" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="statusCode" source="statusCode" />
        <TextField label="reqType" source="reqType" />
      </SimpleShowLayout>
    </Show>
  );
};
