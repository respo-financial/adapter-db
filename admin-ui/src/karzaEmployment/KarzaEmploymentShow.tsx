import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const KarzaEmploymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="CustomerId" source="customerId" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
      </SimpleShowLayout>
    </Show>
  );
};
