import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USERDETAIL_TITLE_FIELD } from "./UserDetailTitle";
import { USERONBOARDINGSTATE_TITLE_FIELD } from "../userOnboardingState/UserOnboardingStateTitle";

export const UserDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="userProvidedLastName" source="userProvidedLastName" />
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
        <ReferenceManyField
          reference="CreditBureauDetail"
          target="UserDetailId"
          label="creditBureauDetails"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="AddressDetail"
          target="UserDetailId"
          label="addressDetails"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField
              label="inBlacklistedRegion"
              source="inBlacklistedRegion"
            />
            <TextField label="state" source="state" />
            <TextField label="country" source="country" />
            <TextField label="latitude" source="latitude" />
            <TextField label="longitude" source="longitude" />
            <ReferenceField
              label="userDetails"
              source="userdetail.id"
              reference="UserDetail"
            >
              <TextField source={USERDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="pincode" source="pincode" />
            <TextField label="addressType" source="addressType" />
            <TextField label="city" source="city" />
            <TextField label="addressLine" source="addressLine" />
            <BooleanField label="inApprovedRegion" source="inApprovedRegion" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmploymentDetail"
          target="UserDetailId"
          label="employmentDetails"
        >
          <Datagrid rowClick="show">
            <TextField
              label="employmentVerificationProvider"
              source="employmentVerificationProvider"
            />
            <TextField
              label="isEmploymentEmailValid"
              source="isEmploymentEmailValid"
            />
            <TextField
              label="employmentVerificationStatus"
              source="employmentVerificationStatus"
            />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="companyName" source="companyName" />
            <BooleanField label="isOthers" source="isOthers" />
            <ReferenceField
              label="userDetails"
              source="userdetail.id"
              reference="UserDetail"
            >
              <TextField source={USERDETAIL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
