import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserOnboardingStateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"userOnboardingStates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="isUserProvidedNameValid"
          source="isUserProvidedNameValid"
        />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="employmentType" source="employmentType" />
        <BooleanField
          label="isEmploymentEmailValidated"
          source="isEmploymentEmailValidated"
        />
        <TextField label="apNameMatchStatus" source="apNameMatchStatus" />
        <BooleanField label="isAddressValid" source="isAddressValid" />
        <TextField label="dobMatchStatus" source="dobMatchStatus" />
        <BooleanField label="inApprovedRegion" source="inApprovedRegion" />
        <BooleanField
          label="inBlacklistedRegion"
          source="inBlacklistedRegion"
        />
        <BooleanField
          label="isPennytransferSuccess"
          source="isPennytransferSuccess"
        />
        <BooleanField label="isEnachCreated" source="isEnachCreated" />
        <BooleanField
          label="isSelfieMatchSuccess"
          source="isSelfieMatchSuccess"
        />
        <BooleanField
          label="isLoanAgreementSigned"
          source="isLoanAgreementSigned"
        />
        <BooleanField label="isCbSuccess" source="isCbSuccess" />
        <BooleanField label="isPanValid" source="isPanValid" />
        <TextField label="l1Status" source="l1Status" />
        <TextField label="l2Status" source="l2Status" />
        <TextField label="combinedStatus" source="combinedStatus" />
        <BooleanField
          label="isPersonalEmailVerified"
          source="isPersonalEmailVerified"
        />
      </Datagrid>
    </List>
  );
};
