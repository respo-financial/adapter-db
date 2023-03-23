import { Module } from "@nestjs/common";
import { HyperVergeOtpModuleBase } from "./base/hyperVergeOtp.module.base";
import { HyperVergeOtpService } from "./hyperVergeOtp.service";
import { HyperVergeOtpController } from "./hyperVergeOtp.controller";
import { HyperVergeOtpResolver } from "./hyperVergeOtp.resolver";

@Module({
  imports: [HyperVergeOtpModuleBase],
  controllers: [HyperVergeOtpController],
  providers: [HyperVergeOtpService, HyperVergeOtpResolver],
  exports: [HyperVergeOtpService],
})
export class HyperVergeOtpModule {}
