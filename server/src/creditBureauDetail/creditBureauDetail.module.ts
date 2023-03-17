import { Module } from "@nestjs/common";
import { CreditBureauDetailModuleBase } from "./base/creditBureauDetail.module.base";
import { CreditBureauDetailService } from "./creditBureauDetail.service";
import { CreditBureauDetailController } from "./creditBureauDetail.controller";
import { CreditBureauDetailResolver } from "./creditBureauDetail.resolver";

@Module({
  imports: [CreditBureauDetailModuleBase],
  controllers: [CreditBureauDetailController],
  providers: [CreditBureauDetailService, CreditBureauDetailResolver],
  exports: [CreditBureauDetailService],
})
export class CreditBureauDetailModule {}
