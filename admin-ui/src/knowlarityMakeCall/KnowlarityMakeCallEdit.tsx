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
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="agentId" source="agentId" />
        <NumberInput
          step={1}
          label="customerMobileNumber"
          source="customerMobileNumber"
        />
        <NumberInput
          step={1}
          label="agentMobileNumber"
          source="agentMobileNumber"
        />
        <div />
        <div />
        <TextInput label="httpStatusCode" source="httpStatusCode" />
        <TextInput label="errorCode" source="errorCode" />
        <TextInput label="errorMessage" source="errorMessage" />
      </SimpleForm>
    </Edit>
  );
};
