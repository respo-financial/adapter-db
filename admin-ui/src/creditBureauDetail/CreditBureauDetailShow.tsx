import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";

export const CreditBureauDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
