import { Module } from "@nestjs/common";
import { CashfreePaymentGatewayModuleBase } from "./base/cashfreePaymentGateway.module.base";
import { CashfreePaymentGatewayService } from "./cashfreePaymentGateway.service";
import { CashfreePaymentGatewayController } from "./cashfreePaymentGateway.controller";
import { CashfreePaymentGatewayResolver } from "./cashfreePaymentGateway.resolver";

@Module({
  imports: [CashfreePaymentGatewayModuleBase],
  controllers: [CashfreePaymentGatewayController],
  providers: [CashfreePaymentGatewayService, CashfreePaymentGatewayResolver],
  exports: [CashfreePaymentGatewayService],
})
export class CashfreePaymentGatewayModule {}
