import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const KarzaAdhaarVerifyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="adhaarNumber" source="adhaarNumber" />
        <div />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
      </SimpleForm>
    </Edit>
  );
};
