import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KarzaCustomerDetailServiceBase } from "./base/karzaCustomerDetail.service.base";

@Injectable()
export class KarzaCustomerDetailService extends KarzaCustomerDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
