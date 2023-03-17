import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditBureauDetailServiceBase } from "./base/creditBureauDetail.service.base";

@Injectable()
export class CreditBureauDetailService extends CreditBureauDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
