import { Module } from "@nestjs/common";
import { KarzaAdhaarVerifyModuleBase } from "./base/karzaAdhaarVerify.module.base";
import { KarzaAdhaarVerifyService } from "./karzaAdhaarVerify.service";
import { KarzaAdhaarVerifyController } from "./karzaAdhaarVerify.controller";
import { KarzaAdhaarVerifyResolver } from "./karzaAdhaarVerify.resolver";

@Module({
  imports: [KarzaAdhaarVerifyModuleBase],
  controllers: [KarzaAdhaarVerifyController],
  providers: [KarzaAdhaarVerifyService, KarzaAdhaarVerifyResolver],
  exports: [KarzaAdhaarVerifyService],
})
export class KarzaAdhaarVerifyModule {}
