import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KarzaPanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"karzaPans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="panNumber" source="panNumber" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="customerId" source="customerId" />
        <TextField label="panName" source="panName" />
      </Datagrid>
    </List>
  );
};
