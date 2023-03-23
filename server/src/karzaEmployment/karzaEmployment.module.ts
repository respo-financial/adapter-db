import { Module } from "@nestjs/common";
import { KarzaEmploymentModuleBase } from "./base/karzaEmployment.module.base";
import { KarzaEmploymentService } from "./karzaEmployment.service";
import { KarzaEmploymentController } from "./karzaEmployment.controller";
import { KarzaEmploymentResolver } from "./karzaEmployment.resolver";

@Module({
  imports: [KarzaEmploymentModuleBase],
  controllers: [KarzaEmploymentController],
  providers: [KarzaEmploymentService, KarzaEmploymentResolver],
  exports: [KarzaEmploymentService],
})
export class KarzaEmploymentModule {}
