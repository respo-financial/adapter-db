import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserDetailList } from "./userDetail/UserDetailList";
import { UserDetailCreate } from "./userDetail/UserDetailCreate";
import { UserDetailEdit } from "./userDetail/UserDetailEdit";
import { UserDetailShow } from "./userDetail/UserDetailShow";
import { UserOnboardingStateList } from "./userOnboardingState/UserOnboardingStateList";
import { UserOnboardingStateCreate } from "./userOnboardingState/UserOnboardingStateCreate";
import { UserOnboardingStateEdit } from "./userOnboardingState/UserOnboardingStateEdit";
import { UserOnboardingStateShow } from "./userOnboardingState/UserOnboardingStateShow";
import { CreditBureauDetailList } from "./creditBureauDetail/CreditBureauDetailList";
import { CreditBureauDetailCreate } from "./creditBureauDetail/CreditBureauDetailCreate";
import { CreditBureauDetailEdit } from "./creditBureauDetail/CreditBureauDetailEdit";
import { CreditBureauDetailShow } from "./creditBureauDetail/CreditBureauDetailShow";
import { EmploymentDetailList } from "./employmentDetail/EmploymentDetailList";
import { EmploymentDetailCreate } from "./employmentDetail/EmploymentDetailCreate";
import { EmploymentDetailEdit } from "./employmentDetail/EmploymentDetailEdit";
import { EmploymentDetailShow } from "./employmentDetail/EmploymentDetailShow";
import { AddressDetailList } from "./addressDetail/AddressDetailList";
import { AddressDetailCreate } from "./addressDetail/AddressDetailCreate";
import { AddressDetailEdit } from "./addressDetail/AddressDetailEdit";
import { AddressDetailShow } from "./addressDetail/AddressDetailShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"user-service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserDetail"
          list={UserDetailList}
          edit={UserDetailEdit}
          create={UserDetailCreate}
          show={UserDetailShow}
        />
        <Resource
          name="UserOnboardingState"
          list={UserOnboardingStateList}
          edit={UserOnboardingStateEdit}
          create={UserOnboardingStateCreate}
          show={UserOnboardingStateShow}
        />
        <Resource
          name="CreditBureauDetail"
          list={CreditBureauDetailList}
          edit={CreditBureauDetailEdit}
          create={CreditBureauDetailCreate}
          show={CreditBureauDetailShow}
        />
        <Resource
          name="EmploymentDetail"
          list={EmploymentDetailList}
          edit={EmploymentDetailEdit}
          create={EmploymentDetailCreate}
          show={EmploymentDetailShow}
        />
        <Resource
          name="AddressDetail"
          list={AddressDetailList}
          edit={AddressDetailEdit}
          create={AddressDetailCreate}
          show={AddressDetailShow}
        />
      </Admin>
    </div>
  );
};

export default App;
