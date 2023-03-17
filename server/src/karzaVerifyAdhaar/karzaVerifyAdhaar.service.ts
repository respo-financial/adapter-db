import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KarzaVerifyAdhaarServiceBase } from "./base/karzaVerifyAdhaar.service.base";

@Injectable()
export class KarzaVerifyAdhaarService extends KarzaVerifyAdhaarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
