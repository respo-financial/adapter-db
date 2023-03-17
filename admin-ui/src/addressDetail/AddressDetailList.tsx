import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";

export const AddressDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"addressDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
