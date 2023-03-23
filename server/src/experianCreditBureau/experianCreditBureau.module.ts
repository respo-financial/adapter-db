import { Module } from "@nestjs/common";
import { ExperianCreditBureauModuleBase } from "./base/experianCreditBureau.module.base";
import { ExperianCreditBureauService } from "./experianCreditBureau.service";
import { ExperianCreditBureauController } from "./experianCreditBureau.controller";
import { ExperianCreditBureauResolver } from "./experianCreditBureau.resolver";

@Module({
  imports: [ExperianCreditBureauModuleBase],
  controllers: [ExperianCreditBureauController],
  providers: [ExperianCreditBureauService, ExperianCreditBureauResolver],
  exports: [ExperianCreditBureauService],
})
export class ExperianCreditBureauModule {}
