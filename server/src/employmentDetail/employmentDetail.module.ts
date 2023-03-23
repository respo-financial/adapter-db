import { Module } from "@nestjs/common";
import { EmploymentDetailModuleBase } from "./base/employmentDetail.module.base";
import { EmploymentDetailService } from "./employmentDetail.service";
import { EmploymentDetailController } from "./employmentDetail.controller";
import { EmploymentDetailResolver } from "./employmentDetail.resolver";

@Module({
  imports: [EmploymentDetailModuleBase],
  controllers: [EmploymentDetailController],
  providers: [EmploymentDetailService, EmploymentDetailResolver],
  exports: [EmploymentDetailService],
})
export class EmploymentDetailModule {}
