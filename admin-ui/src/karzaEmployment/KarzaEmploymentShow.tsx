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
        <TextField label="resPayload" source="resPayload" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="karzaStatusCode" source="karzaStatusCode" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="karzaStatus" source="karzaStatus" />
      </SimpleShowLayout>
    </Show>
  );
};
