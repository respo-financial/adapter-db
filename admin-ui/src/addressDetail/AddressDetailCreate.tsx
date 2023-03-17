import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";

export const AddressDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="inBlacklistedRegion"
          source="inBlacklistedRegion"
        />
        <TextInput label="state" source="state" />
        <TextInput label="country" source="country" />
        <TextInput label="latitude" source="latitude" />
        <TextInput label="longitude" source="longitude" />
        <ReferenceInput
          source="userdetail.id"
          reference="UserDetail"
          label="userDetails"
        >
          <SelectInput optionText={UserDetailTitle} />
        </ReferenceInput>
        <TextInput label="pincode" source="pincode" />
        <SelectInput
          source="addressType"
          label="addressType"
          choices={[
            { label: "Permanent", value: "permanent" },
            { label: "Communication", value: "communication" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="city" source="city" />
        <TextInput label="addressLine" source="addressLine" />
        <BooleanInput label="inApprovedRegion" source="inApprovedRegion" />
      </SimpleForm>
    </Create>
  );
};
