import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HyperVergeOtpServiceBase } from "./base/hyperVergeOtp.service.base";

@Injectable()
export class HyperVergeOtpService extends HyperVergeOtpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
