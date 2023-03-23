import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { KarzaPanModule } from "./karzaPan/karzaPan.module";
import { KarzaEmploymentModule } from "./karzaEmployment/karzaEmployment.module";
import { HyperVergeAadhaarModule } from "./hyperVergeAadhaar/hyperVergeAadhaar.module";
import { KarzaAdhaarVerifyModule } from "./karzaAdhaarVerify/karzaAdhaarVerify.module";
import { KarzaVerifyAdhaarModule } from "./karzaVerifyAdhaar/karzaVerifyAdhaar.module";
import { HyperVergeKycFailureHistoryModule } from "./hyperVergeKycFailureHistory/hyperVergeKycFailureHistory.module";
import { HyperVergeOtpModule } from "./hyperVergeOtp/hyperVergeOtp.module";
import { HyperVergeKycSuccessModule } from "./hyperVergeKycSuccess/hyperVergeKycSuccess.module";
import { KnowlarityMakeCallModule } from "./knowlarityMakeCall/knowlarityMakeCall.module";
import { ExperianCreditBureauModule } from "./experianCreditBureau/experianCreditBureau.module";
import { CashfreePaymentGatewayModule } from "./cashfreePaymentGateway/cashfreePaymentGateway.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    KarzaPanModule,
    KarzaEmploymentModule,
    HyperVergeAadhaarModule,
    KarzaAdhaarVerifyModule,
    KarzaVerifyAdhaarModule,
    HyperVergeKycFailureHistoryModule,
    HyperVergeOtpModule,
    HyperVergeKycSuccessModule,
    KnowlarityMakeCallModule,
    ExperianCreditBureauModule,
    CashfreePaymentGatewayModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
