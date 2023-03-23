import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmploymentDetailServiceBase } from "./base/employmentDetail.service.base";

@Injectable()
export class EmploymentDetailService extends EmploymentDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
