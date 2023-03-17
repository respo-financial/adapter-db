import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExperianCreditBureauServiceBase } from "./base/experianCreditBureau.service.base";

@Injectable()
export class ExperianCreditBureauService extends ExperianCreditBureauServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
