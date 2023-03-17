import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HyperVergeKycFailureHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="customerId" source="customerId" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="ID" source="id" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="errorCode" source="errorCode" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="errorMessage" source="errorMessage" />
      </SimpleShowLayout>
    </Show>
  );
};
