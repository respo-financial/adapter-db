import { Module } from "@nestjs/common";
import { KarzaCustomerDetailModuleBase } from "./base/karzaCustomerDetail.module.base";
import { KarzaCustomerDetailService } from "./karzaCustomerDetail.service";
import { KarzaCustomerDetailController } from "./karzaCustomerDetail.controller";
import { KarzaCustomerDetailResolver } from "./karzaCustomerDetail.resolver";

@Module({
  imports: [KarzaCustomerDetailModuleBase],
  controllers: [KarzaCustomerDetailController],
  providers: [KarzaCustomerDetailService, KarzaCustomerDetailResolver],
  exports: [KarzaCustomerDetailService],
})
export class KarzaCustomerDetailModule {}
