import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const KarzaAdhaarVerifyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="adhaarNumber" source="adhaarNumber" />
        <div />
        <div />
        <NumberInput step={1} label="httpStatusCode" source="httpStatusCode" />
      </SimpleForm>
    </Create>
  );
};
