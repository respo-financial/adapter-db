import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HyperVergeAadhaarServiceBase } from "./base/hyperVergeAadhaar.service.base";

@Injectable()
export class HyperVergeAadhaarService extends HyperVergeAadhaarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
