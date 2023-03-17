import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HyperVergeKycSuccessServiceBase } from "./base/hyperVergeKycSuccess.service.base";

@Injectable()
export class HyperVergeKycSuccessService extends HyperVergeKycSuccessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
