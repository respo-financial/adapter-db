import { Module } from "@nestjs/common";
import { KnowlarityMakeCallModuleBase } from "./base/knowlarityMakeCall.module.base";
import { KnowlarityMakeCallService } from "./knowlarityMakeCall.service";
import { KnowlarityMakeCallController } from "./knowlarityMakeCall.controller";
import { KnowlarityMakeCallResolver } from "./knowlarityMakeCall.resolver";

@Module({
  imports: [KnowlarityMakeCallModuleBase],
  controllers: [KnowlarityMakeCallController],
  providers: [KnowlarityMakeCallService, KnowlarityMakeCallResolver],
  exports: [KnowlarityMakeCallService],
})
export class KnowlarityMakeCallModule {}
