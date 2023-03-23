import { Module } from "@nestjs/common";
import { KarzaVerifyAdhaarModuleBase } from "./base/karzaVerifyAdhaar.module.base";
import { KarzaVerifyAdhaarService } from "./karzaVerifyAdhaar.service";
import { KarzaVerifyAdhaarController } from "./karzaVerifyAdhaar.controller";
import { KarzaVerifyAdhaarResolver } from "./karzaVerifyAdhaar.resolver";

@Module({
  imports: [KarzaVerifyAdhaarModuleBase],
  controllers: [KarzaVerifyAdhaarController],
  providers: [KarzaVerifyAdhaarService, KarzaVerifyAdhaarResolver],
  exports: [KarzaVerifyAdhaarService],
})
export class KarzaVerifyAdhaarModule {}
