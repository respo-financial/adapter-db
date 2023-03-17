import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashfreePaymentGatewayServiceBase } from "./base/cashfreePaymentGateway.service.base";

@Injectable()
export class CashfreePaymentGatewayService extends CashfreePaymentGatewayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
