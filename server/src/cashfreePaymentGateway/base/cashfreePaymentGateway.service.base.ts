/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CashfreePaymentGateway } from "@prisma/client";

export class CashfreePaymentGatewayServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CashfreePaymentGatewayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashfreePaymentGatewayFindManyArgs>
  ): Promise<number> {
    return this.prisma.cashfreePaymentGateway.count(args);
  }

  async findMany<T extends Prisma.CashfreePaymentGatewayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashfreePaymentGatewayFindManyArgs>
  ): Promise<CashfreePaymentGateway[]> {
    return this.prisma.cashfreePaymentGateway.findMany(args);
  }
  async findOne<T extends Prisma.CashfreePaymentGatewayFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashfreePaymentGatewayFindUniqueArgs>
  ): Promise<CashfreePaymentGateway | null> {
    return this.prisma.cashfreePaymentGateway.findUnique(args);
  }
  async create<T extends Prisma.CashfreePaymentGatewayCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashfreePaymentGatewayCreateArgs>
  ): Promise<CashfreePaymentGateway> {
    return this.prisma.cashfreePaymentGateway.create<T>(args);
  }
  async update<T extends Prisma.CashfreePaymentGatewayUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashfreePaymentGatewayUpdateArgs>
  ): Promise<CashfreePaymentGateway> {
    return this.prisma.cashfreePaymentGateway.update<T>(args);
  }
  async delete<T extends Prisma.CashfreePaymentGatewayDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashfreePaymentGatewayDeleteArgs>
  ): Promise<CashfreePaymentGateway> {
    return this.prisma.cashfreePaymentGateway.delete(args);
  }
}
