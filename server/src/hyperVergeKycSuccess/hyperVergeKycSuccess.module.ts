import { Module } from "@nestjs/common";
import { HyperVergeKycSuccessModuleBase } from "./base/hyperVergeKycSuccess.module.base";
import { HyperVergeKycSuccessService } from "./hyperVergeKycSuccess.service";
import { HyperVergeKycSuccessController } from "./hyperVergeKycSuccess.controller";
import { HyperVergeKycSuccessResolver } from "./hyperVergeKycSuccess.resolver";

@Module({
  imports: [HyperVergeKycSuccessModuleBase],
  controllers: [HyperVergeKycSuccessController],
  providers: [HyperVergeKycSuccessService, HyperVergeKycSuccessResolver],
  exports: [HyperVergeKycSuccessService],
})
export class HyperVergeKycSuccessModule {}
