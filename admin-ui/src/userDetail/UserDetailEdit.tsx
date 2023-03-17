import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CreditBureauDetailTitle } from "../creditBureauDetail/CreditBureauDetailTitle";
import { AddressDetailTitle } from "../addressDetail/AddressDetailTitle";
import { EmploymentDetailTitle } from "../employmentDetail/EmploymentDetailTitle";
import { UserOnboardingStateTitle } from "../userOnboardingState/UserOnboardingStateTitle";

export const UserDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="userId" source="userId" />
        <BooleanInput
          label="isPersonalEmailVerified"
          source="isPersonalEmailVerified"
        />
        <TextInput label="mobileNumber" source="mobileNumber" />
        <TextInput
          label="userProvidedFirstName"
          source="userProvidedFirstName"
        />
        <TextInput label="userProvidedLastName" source="userProvidedLastName" />
        <TextInput label="aadhaarName" source="aadhaarName" />
        <DateInput label="aadhaarDob" source="aadhaarDob" />
        <TextInput label="panName" source="panName" />
        <TextInput label="pan" source="pan" />
        <DateInput label="panDob" source="panDob" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="personalEmail" source="personalEmail" type="email" />
        <ReferenceArrayInput
          source="creditBureauDetails"
          reference="CreditBureauDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CreditBureauDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="addressDetails"
          reference="AddressDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmentDetails"
          reference="EmploymentDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="useronboardingstate.id"
          reference="UserOnboardingState"
          label="userOnboardingState"
        >
          <SelectInput optionText={UserOnboardingStateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
