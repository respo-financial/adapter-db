import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KnowlarityMakeCallCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="agentId" source="agentId" />
        <NumberInput
          step={1}
          label="agentMobileNumber"
          source="agentMobileNumber"
        />
        <div />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="errorCode" source="errorCode" />
        <NumberInput
          step={1}
          label="customerMobileNumber"
          source="customerMobileNumber"
        />
        <div />
        <TextInput label="errorMessage" source="errorMessage" />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
      </SimpleForm>
    </Create>
  );
};
