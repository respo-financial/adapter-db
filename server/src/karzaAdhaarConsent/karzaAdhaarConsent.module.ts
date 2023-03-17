import { Module } from "@nestjs/common";
import { KarzaAdhaarConsentModuleBase } from "./base/karzaAdhaarConsent.module.base";
import { KarzaAdhaarConsentService } from "./karzaAdhaarConsent.service";
import { KarzaAdhaarConsentController } from "./karzaAdhaarConsent.controller";
import { KarzaAdhaarConsentResolver } from "./karzaAdhaarConsent.resolver";

@Module({
  imports: [KarzaAdhaarConsentModuleBase],
  controllers: [KarzaAdhaarConsentController],
  providers: [KarzaAdhaarConsentService, KarzaAdhaarConsentResolver],
  exports: [KarzaAdhaarConsentService],
})
export class KarzaAdhaarConsentModule {}
