/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserOnboardingState, UserDetail } from "@prisma/client";

export class UserOnboardingStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserOnboardingStateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOnboardingStateFindManyArgs>
  ): Promise<number> {
    return this.prisma.userOnboardingState.count(args);
  }

  async findMany<T extends Prisma.UserOnboardingStateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOnboardingStateFindManyArgs>
  ): Promise<UserOnboardingState[]> {
    return this.prisma.userOnboardingState.findMany(args);
  }
  async findOne<T extends Prisma.UserOnboardingStateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOnboardingStateFindUniqueArgs>
  ): Promise<UserOnboardingState | null> {
    return this.prisma.userOnboardingState.findUnique(args);
  }
  async create<T extends Prisma.UserOnboardingStateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOnboardingStateCreateArgs>
  ): Promise<UserOnboardingState> {
    return this.prisma.userOnboardingState.create<T>(args);
  }
  async update<T extends Prisma.UserOnboardingStateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOnboardingStateUpdateArgs>
  ): Promise<UserOnboardingState> {
    return this.prisma.userOnboardingState.update<T>(args);
  }
  async delete<T extends Prisma.UserOnboardingStateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOnboardingStateDeleteArgs>
  ): Promise<UserOnboardingState> {
    return this.prisma.userOnboardingState.delete(args);
  }

  async findUserDetails(
    parentId: string,
    args: Prisma.UserDetailFindManyArgs
  ): Promise<UserDetail[]> {
    return this.prisma.userOnboardingState
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userDetails(args);
  }
}
