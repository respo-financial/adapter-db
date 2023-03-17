import { Module } from "@nestjs/common";
import { KarzaPanModuleBase } from "./base/karzaPan.module.base";
import { KarzaPanService } from "./karzaPan.service";
import { KarzaPanController } from "./karzaPan.controller";
import { KarzaPanResolver } from "./karzaPan.resolver";

@Module({
  imports: [KarzaPanModuleBase],
  controllers: [KarzaPanController],
  providers: [KarzaPanService, KarzaPanResolver],
  exports: [KarzaPanService],
})
export class KarzaPanModule {}
