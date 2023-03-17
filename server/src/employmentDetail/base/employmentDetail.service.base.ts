/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EmploymentDetail, UserDetail } from "@prisma/client";

export class EmploymentDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmploymentDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmploymentDetailFindManyArgs>
  ): Promise<number> {
    return this.prisma.employmentDetail.count(args);
  }

  async findMany<T extends Prisma.EmploymentDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmploymentDetailFindManyArgs>
  ): Promise<EmploymentDetail[]> {
    return this.prisma.employmentDetail.findMany(args);
  }
  async findOne<T extends Prisma.EmploymentDetailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmploymentDetailFindUniqueArgs>
  ): Promise<EmploymentDetail | null> {
    return this.prisma.employmentDetail.findUnique(args);
  }
  async create<T extends Prisma.EmploymentDetailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmploymentDetailCreateArgs>
  ): Promise<EmploymentDetail> {
    return this.prisma.employmentDetail.create<T>(args);
  }
  async update<T extends Prisma.EmploymentDetailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmploymentDetailUpdateArgs>
  ): Promise<EmploymentDetail> {
    return this.prisma.employmentDetail.update<T>(args);
  }
  async delete<T extends Prisma.EmploymentDetailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmploymentDetailDeleteArgs>
  ): Promise<EmploymentDetail> {
    return this.prisma.employmentDetail.delete(args);
  }

  async getUserDetail(parentId: string): Promise<UserDetail | null> {
    return this.prisma.employmentDetail
      .findUnique({
        where: { id: parentId },
      })
      .userDetail();
  }
}
