import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExperianCreditBureauList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"experianCreditBureaus"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="customerId" source="customerId" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reqType" source="reqType" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="experianStatusCode" source="experianStatusCode" />
      </Datagrid>
    </List>
  );
};
