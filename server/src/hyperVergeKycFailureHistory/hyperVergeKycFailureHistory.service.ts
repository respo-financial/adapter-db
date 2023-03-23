import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HyperVergeKycFailureHistoryServiceBase } from "./base/hyperVergeKycFailureHistory.service.base";

@Injectable()
export class HyperVergeKycFailureHistoryService extends HyperVergeKycFailureHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
