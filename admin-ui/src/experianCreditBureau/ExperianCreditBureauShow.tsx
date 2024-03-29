import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ExperianCreditBureauShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="customerId" source="customerId" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reqType" source="reqType" />
        <TextField label="experianStatusCode" source="experianStatusCode" />
      </SimpleShowLayout>
    </Show>
  );
};
