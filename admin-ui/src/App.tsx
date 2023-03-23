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
import { KarzaPanList } from "./karzaPan/KarzaPanList";
import { KarzaPanCreate } from "./karzaPan/KarzaPanCreate";
import { KarzaPanEdit } from "./karzaPan/KarzaPanEdit";
import { KarzaPanShow } from "./karzaPan/KarzaPanShow";
import { KarzaEmploymentList } from "./karzaEmployment/KarzaEmploymentList";
import { KarzaEmploymentCreate } from "./karzaEmployment/KarzaEmploymentCreate";
import { KarzaEmploymentEdit } from "./karzaEmployment/KarzaEmploymentEdit";
import { KarzaEmploymentShow } from "./karzaEmployment/KarzaEmploymentShow";
import { HyperVergeAadhaarList } from "./hyperVergeAadhaar/HyperVergeAadhaarList";
import { HyperVergeAadhaarCreate } from "./hyperVergeAadhaar/HyperVergeAadhaarCreate";
import { HyperVergeAadhaarEdit } from "./hyperVergeAadhaar/HyperVergeAadhaarEdit";
import { HyperVergeAadhaarShow } from "./hyperVergeAadhaar/HyperVergeAadhaarShow";
import { KarzaAdhaarVerifyList } from "./karzaAdhaarVerify/KarzaAdhaarVerifyList";
import { KarzaAdhaarVerifyCreate } from "./karzaAdhaarVerify/KarzaAdhaarVerifyCreate";
import { KarzaAdhaarVerifyEdit } from "./karzaAdhaarVerify/KarzaAdhaarVerifyEdit";
import { KarzaAdhaarVerifyShow } from "./karzaAdhaarVerify/KarzaAdhaarVerifyShow";
import { KarzaVerifyAdhaarList } from "./karzaVerifyAdhaar/KarzaVerifyAdhaarList";
import { KarzaVerifyAdhaarCreate } from "./karzaVerifyAdhaar/KarzaVerifyAdhaarCreate";
import { KarzaVerifyAdhaarEdit } from "./karzaVerifyAdhaar/KarzaVerifyAdhaarEdit";
import { KarzaVerifyAdhaarShow } from "./karzaVerifyAdhaar/KarzaVerifyAdhaarShow";
import { HyperVergeKycFailureHistoryList } from "./hyperVergeKycFailureHistory/HyperVergeKycFailureHistoryList";
import { HyperVergeKycFailureHistoryCreate } from "./hyperVergeKycFailureHistory/HyperVergeKycFailureHistoryCreate";
import { HyperVergeKycFailureHistoryEdit } from "./hyperVergeKycFailureHistory/HyperVergeKycFailureHistoryEdit";
import { HyperVergeKycFailureHistoryShow } from "./hyperVergeKycFailureHistory/HyperVergeKycFailureHistoryShow";
import { HyperVergeOtpList } from "./hyperVergeOtp/HyperVergeOtpList";
import { HyperVergeOtpCreate } from "./hyperVergeOtp/HyperVergeOtpCreate";
import { HyperVergeOtpEdit } from "./hyperVergeOtp/HyperVergeOtpEdit";
import { HyperVergeOtpShow } from "./hyperVergeOtp/HyperVergeOtpShow";
import { HyperVergeKycSuccessList } from "./hyperVergeKycSuccess/HyperVergeKycSuccessList";
import { HyperVergeKycSuccessCreate } from "./hyperVergeKycSuccess/HyperVergeKycSuccessCreate";
import { HyperVergeKycSuccessEdit } from "./hyperVergeKycSuccess/HyperVergeKycSuccessEdit";
import { HyperVergeKycSuccessShow } from "./hyperVergeKycSuccess/HyperVergeKycSuccessShow";
import { KnowlarityMakeCallList } from "./knowlarityMakeCall/KnowlarityMakeCallList";
import { KnowlarityMakeCallCreate } from "./knowlarityMakeCall/KnowlarityMakeCallCreate";
import { KnowlarityMakeCallEdit } from "./knowlarityMakeCall/KnowlarityMakeCallEdit";
import { KnowlarityMakeCallShow } from "./knowlarityMakeCall/KnowlarityMakeCallShow";
import { ExperianCreditBureauList } from "./experianCreditBureau/ExperianCreditBureauList";
import { ExperianCreditBureauCreate } from "./experianCreditBureau/ExperianCreditBureauCreate";
import { ExperianCreditBureauEdit } from "./experianCreditBureau/ExperianCreditBureauEdit";
import { ExperianCreditBureauShow } from "./experianCreditBureau/ExperianCreditBureauShow";
import { CashfreePaymentGatewayList } from "./cashfreePaymentGateway/CashfreePaymentGatewayList";
import { CashfreePaymentGatewayCreate } from "./cashfreePaymentGateway/CashfreePaymentGatewayCreate";
import { CashfreePaymentGatewayEdit } from "./cashfreePaymentGateway/CashfreePaymentGatewayEdit";
import { CashfreePaymentGatewayShow } from "./cashfreePaymentGateway/CashfreePaymentGatewayShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"Adapter service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
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
          name="KarzaPan"
          list={KarzaPanList}
          edit={KarzaPanEdit}
          create={KarzaPanCreate}
          show={KarzaPanShow}
        />
        <Resource
          name="KarzaEmployment"
          list={KarzaEmploymentList}
          edit={KarzaEmploymentEdit}
          create={KarzaEmploymentCreate}
          show={KarzaEmploymentShow}
        />
        <Resource
          name="HyperVergeAadhaar"
          list={HyperVergeAadhaarList}
          edit={HyperVergeAadhaarEdit}
          create={HyperVergeAadhaarCreate}
          show={HyperVergeAadhaarShow}
        />
        <Resource
          name="KarzaAdhaarVerify"
          list={KarzaAdhaarVerifyList}
          edit={KarzaAdhaarVerifyEdit}
          create={KarzaAdhaarVerifyCreate}
          show={KarzaAdhaarVerifyShow}
        />
        <Resource
          name="KarzaVerifyAdhaar"
          list={KarzaVerifyAdhaarList}
          edit={KarzaVerifyAdhaarEdit}
          create={KarzaVerifyAdhaarCreate}
          show={KarzaVerifyAdhaarShow}
        />
        <Resource
          name="HyperVergeKycFailureHistory"
          list={HyperVergeKycFailureHistoryList}
          edit={HyperVergeKycFailureHistoryEdit}
          create={HyperVergeKycFailureHistoryCreate}
          show={HyperVergeKycFailureHistoryShow}
        />
        <Resource
          name="HyperVergeOtp"
          list={HyperVergeOtpList}
          edit={HyperVergeOtpEdit}
          create={HyperVergeOtpCreate}
          show={HyperVergeOtpShow}
        />
        <Resource
          name="HyperVergeKycSuccess"
          list={HyperVergeKycSuccessList}
          edit={HyperVergeKycSuccessEdit}
          create={HyperVergeKycSuccessCreate}
          show={HyperVergeKycSuccessShow}
        />
        <Resource
          name="KnowlarityMakeCall"
          list={KnowlarityMakeCallList}
          edit={KnowlarityMakeCallEdit}
          create={KnowlarityMakeCallCreate}
          show={KnowlarityMakeCallShow}
        />
        <Resource
          name="ExperianCreditBureau"
          list={ExperianCreditBureauList}
          edit={ExperianCreditBureauEdit}
          create={ExperianCreditBureauCreate}
          show={ExperianCreditBureauShow}
        />
        <Resource
          name="CashfreePaymentGateway"
          list={CashfreePaymentGatewayList}
          edit={CashfreePaymentGatewayEdit}
          create={CashfreePaymentGatewayCreate}
          show={CashfreePaymentGatewayShow}
        />
      </Admin>
    </div>
  );
};

export default App;
