import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HyperVergeKycSuccessShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aadhaarNumber" source="aadhaarNumber" />
        <TextField label="aadhaarDob" source="aadhaarDob" />
        <TextField label="panNumber" source="panNumber" />
        <TextField label="panDob" source="panDob" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="customerId" source="customerId" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="mobileNumber" source="mobileNumber" />
        <TextField label="reqPayload" source="reqPayload" />
      </SimpleShowLayout>
    </Show>
  );
};
