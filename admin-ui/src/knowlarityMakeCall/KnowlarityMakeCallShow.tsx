import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const KnowlarityMakeCallShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="agentId" source="agentId" />
        <TextField label="agentMobileNumber" source="agentMobileNumber" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="customerId" source="customerId" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="customerMobileNumber" source="customerMobileNumber" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
      </SimpleShowLayout>
    </Show>
  );
};
