import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERONBOARDINGSTATE_TITLE_FIELD } from "./UserOnboardingStateTitle";

export const UserOnboardingStateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserDetail"
          target="UserOnboardingStateId"
          label="userDetails"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userId" source="userId" />
            <BooleanField
              label="isPersonalEmailVerified"
              source="isPersonalEmailVerified"
            />
            <TextField label="mobileNumber" source="mobileNumber" />
            <TextField
              label="userProvidedFirstName"
              source="userProvidedFirstName"
            />
            <TextField
              label="userProvidedLastName"
              source="userProvidedLastName"
            />
            <TextField label="aadhaarName" source="aadhaarName" />
            <TextField label="aadhaarDob" source="aadhaarDob" />
            <TextField label="panName" source="panName" />
            <TextField label="pan" source="pan" />
            <TextField label="panDob" source="panDob" />
            <TextField label="firstName" source="firstName" />
            <TextField label="lastName" source="lastName" />
            <TextField label="personalEmail" source="personalEmail" />
            <ReferenceField
              label="userOnboardingState"
              source="useronboardingstate.id"
              reference="UserOnboardingState"
            >
              <TextField source={USERONBOARDINGSTATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
