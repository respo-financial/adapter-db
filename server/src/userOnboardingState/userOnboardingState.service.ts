import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserOnboardingStateServiceBase } from "./base/userOnboardingState.service.base";

@Injectable()
export class UserOnboardingStateService extends UserOnboardingStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
