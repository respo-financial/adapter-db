import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KnowlarityMakeCallServiceBase } from "./base/knowlarityMakeCall.service.base";

@Injectable()
export class KnowlarityMakeCallService extends KnowlarityMakeCallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
