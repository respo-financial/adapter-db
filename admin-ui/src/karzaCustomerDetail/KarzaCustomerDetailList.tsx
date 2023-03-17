import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KarzaCustomerDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"karzaCustomerDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="errorCode" source="errorCode" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="panNumber" source="panNumber" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="customerId" source="customerId" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
