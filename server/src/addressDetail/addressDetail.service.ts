import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddressDetailServiceBase } from "./base/addressDetail.service.base";

@Injectable()
export class AddressDetailService extends AddressDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
