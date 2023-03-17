import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KarzaAdhaarConsentServiceBase } from "./base/karzaAdhaarConsent.service.base";

@Injectable()
export class KarzaAdhaarConsentService extends KarzaAdhaarConsentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
