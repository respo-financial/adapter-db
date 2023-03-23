import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KnowlarityMakeCallEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
