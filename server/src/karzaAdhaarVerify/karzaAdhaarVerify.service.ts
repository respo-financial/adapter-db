import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KarzaAdhaarVerifyServiceBase } from "./base/karzaAdhaarVerify.service.base";

@Injectable()
export class KarzaAdhaarVerifyService extends KarzaAdhaarVerifyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
