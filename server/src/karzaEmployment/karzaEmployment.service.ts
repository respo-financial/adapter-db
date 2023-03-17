import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KarzaEmploymentServiceBase } from "./base/karzaEmployment.service.base";

@Injectable()
export class KarzaEmploymentService extends KarzaEmploymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
