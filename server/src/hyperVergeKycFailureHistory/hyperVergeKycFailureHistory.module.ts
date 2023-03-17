import { Module } from "@nestjs/common";
import { HyperVergeKycFailureHistoryModuleBase } from "./base/hyperVergeKycFailureHistory.module.base";
import { HyperVergeKycFailureHistoryService } from "./hyperVergeKycFailureHistory.service";
import { HyperVergeKycFailureHistoryController } from "./hyperVergeKycFailureHistory.controller";
import { HyperVergeKycFailureHistoryResolver } from "./hyperVergeKycFailureHistory.resolver";

@Module({
  imports: [HyperVergeKycFailureHistoryModuleBase],
  controllers: [HyperVergeKycFailureHistoryController],
  providers: [
    HyperVergeKycFailureHistoryService,
    HyperVergeKycFailureHistoryResolver,
  ],
  exports: [HyperVergeKycFailureHistoryService],
})
export class HyperVergeKycFailureHistoryModule {}
