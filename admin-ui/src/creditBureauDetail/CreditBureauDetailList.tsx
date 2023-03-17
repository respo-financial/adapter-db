import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";

export const CreditBureauDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"creditBureauDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="provider" source="provider" />
        <TextField label="cbReportFileName" source="cbReportFileName" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ID" source="id" />
        <TextField label="reportPullDate" source="reportPullDate" />
        <TextField label="cbUserId" source="cbUserId" />
        <ReferenceField
          label="userDetails"
          source="userdetail.id"
          reference="UserDetail"
        >
          <TextField source={USERDETAIL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
