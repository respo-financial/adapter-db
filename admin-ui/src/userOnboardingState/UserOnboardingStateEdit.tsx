import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";

export const UserOnboardingStateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="isUserProvidedNameValid"
          source="isUserProvidedNameValid"
        />
        <SelectInput
          source="employmentType"
          label="employmentType"
          choices={[
            { label: "Salaried", value: "SALARIED" },
            { label: "Self Employed", value: "SELF_EMPLOYED" },
            { label: "Student", value: "STUDENT" },
            { label: "Professional", value: "PROFESSIONAL" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="isEmploymentEmailValidated"
          source="isEmploymentEmailValidated"
        />
        <SelectInput
          source="apNameMatchStatus"
          label="apNameMatchStatus"
          choices={[
            { label: "Success", value: "success" },
            { label: "FAILED", value: "failed" },
            { label: "MANUAL", value: "manual" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isAddressValid" source="isAddressValid" />
        <SelectInput
          source="dobMatchStatus"
          label="dobMatchStatus"
          choices={[
            { label: "Success", value: "success" },
            { label: "Failed", value: "failed" },
            { label: "Manual", value: "manual" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="inApprovedRegion" source="inApprovedRegion" />
        <BooleanInput
          label="inBlacklistedRegion"
          source="inBlacklistedRegion"
        />
        <BooleanInput
          label="isPennytransferSuccess"
          source="isPennytransferSuccess"
        />
        <BooleanInput label="isEnachCreated" source="isEnachCreated" />
        <BooleanInput
          label="isSelfieMatchSuccess"
          source="isSelfieMatchSuccess"
        />
        <BooleanInput
          label="isLoanAgreementSigned"
          source="isLoanAgreementSigned"
        />
        <BooleanInput label="isCbSuccess" source="isCbSuccess" />
        <BooleanInput label="isPanValid" source="isPanValid" />
        <SelectInput
          source="l1Status"
          label="l1Status"
          choices={[
            { label: "Accept", value: "Accept" },
            { label: "Manual", value: "Manual" },
            { label: "Waitlist", value: "Waitlist" },
            { label: "Fail", value: "Fail" },
            { label: "Reject", value: "Reject" },
            { label: "Refer", value: "Refer" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="l2Status"
          label="l2Status"
          choices={[
            { label: "Accept", value: "Accept" },
            { label: "Manual", value: "Manual" },
            { label: "Waitlist", value: "Waitlist" },
            { label: "Fail", value: "Fail" },
            { label: "Reject", value: "Reject" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="combinedStatus"
          label="combinedStatus"
          choices={[
            { label: "Accept", value: "Accept" },
            { label: "Manual", value: "Manual" },
            { label: "Waitlist", value: "Waitlist" },
            { label: "Fail", value: "Fail" },
            { label: "Reject", value: "Reject" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="isPersonalEmailVerified"
          source="isPersonalEmailVerified"
        />
        <ReferenceArrayInput
          source="userDetails"
          reference="UserDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserDetailTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
