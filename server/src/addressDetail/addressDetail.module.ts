import { Module } from "@nestjs/common";
import { AddressDetailModuleBase } from "./base/addressDetail.module.base";
import { AddressDetailService } from "./addressDetail.service";
import { AddressDetailController } from "./addressDetail.controller";
import { AddressDetailResolver } from "./addressDetail.resolver";

@Module({
  imports: [AddressDetailModuleBase],
  controllers: [AddressDetailController],
  providers: [AddressDetailService, AddressDetailResolver],
  exports: [AddressDetailService],
})
export class AddressDetailModule {}
