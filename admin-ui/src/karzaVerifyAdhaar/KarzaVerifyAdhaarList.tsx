import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KarzaVerifyAdhaarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"karzaVerifyAdhaars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="adhaarNumber" source="adhaarNumber" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="statusCode" source="statusCode" />
        <TextField label="reqType" source="reqType" />
      </Datagrid>
    </List>
  );
};
