import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KarzaPanServiceBase } from "./base/karzaPan.service.base";

@Injectable()
export class KarzaPanService extends KarzaPanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
