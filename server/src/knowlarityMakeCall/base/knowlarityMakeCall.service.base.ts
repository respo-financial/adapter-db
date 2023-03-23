/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, KnowlarityMakeCall } from "@prisma/client";

export class KnowlarityMakeCallServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.KnowlarityMakeCallFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.KnowlarityMakeCallFindManyArgs>
  ): Promise<number> {
    return this.prisma.knowlarityMakeCall.count(args);
  }

  async findMany<T extends Prisma.KnowlarityMakeCallFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.KnowlarityMakeCallFindManyArgs>
  ): Promise<KnowlarityMakeCall[]> {
    return this.prisma.knowlarityMakeCall.findMany(args);
  }
  async findOne<T extends Prisma.KnowlarityMakeCallFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.KnowlarityMakeCallFindUniqueArgs>
  ): Promise<KnowlarityMakeCall | null> {
    return this.prisma.knowlarityMakeCall.findUnique(args);
  }
  async create<T extends Prisma.KnowlarityMakeCallCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KnowlarityMakeCallCreateArgs>
  ): Promise<KnowlarityMakeCall> {
    return this.prisma.knowlarityMakeCall.create<T>(args);
  }
  async update<T extends Prisma.KnowlarityMakeCallUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KnowlarityMakeCallUpdateArgs>
  ): Promise<KnowlarityMakeCall> {
    return this.prisma.knowlarityMakeCall.update<T>(args);
  }
  async delete<T extends Prisma.KnowlarityMakeCallDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.KnowlarityMakeCallDeleteArgs>
  ): Promise<KnowlarityMakeCall> {
    return this.prisma.knowlarityMakeCall.delete(args);
  }
}
