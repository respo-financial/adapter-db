import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";

export const AddressDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField
          label="inBlacklistedRegion"
          source="inBlacklistedRegion"
        />
        <TextField label="state" source="state" />
        <TextField label="country" source="country" />
        <TextField label="latitude" source="latitude" />
        <TextField label="longitude" source="longitude" />
        <ReferenceField
          label="userDetails"
          source="userdetail.id"
          reference="UserDetail"
        >
          <TextField source={USERDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="pincode" source="pincode" />
        <TextField label="addressType" source="addressType" />
        <TextField label="city" source="city" />
        <TextField label="addressLine" source="addressLine" />
        <BooleanField label="inApprovedRegion" source="inApprovedRegion" />
      </SimpleShowLayout>
    </Show>
  );
};
