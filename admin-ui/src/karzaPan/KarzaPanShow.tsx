import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const KarzaPanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="panNumber" source="panNumber" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="customerId" source="customerId" />
        <TextField label="panName" source="panName" />
      </SimpleShowLayout>
    </Show>
  );
};
