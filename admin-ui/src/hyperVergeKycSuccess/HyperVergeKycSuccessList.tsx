import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HyperVergeKycSuccessList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"hyperVergeKycSuccesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
