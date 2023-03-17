import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KnowlarityMakeCallList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"knowlarityMakeCalls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="agentId" source="agentId" />
        <TextField label="customerMobileNumber" source="customerMobileNumber" />
        <TextField label="agentMobileNumber" source="agentMobileNumber" />
        <TextField label="reqPayload" source="reqPayload" />
        <TextField label="resPayload" source="resPayload" />
        <TextField label="httpStatusCode" source="httpStatusCode" />
        <TextField label="errorCode" source="errorCode" />
        <TextField label="errorMessage" source="errorMessage" />
      </Datagrid>
    </List>
  );
};
