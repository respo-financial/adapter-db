import * as graphql from "@nestjs/graphql";
import { EmploymentDetailResolverBase } from "./base/employmentDetail.resolver.base";
import { EmploymentDetail } from "./base/EmploymentDetail";
import { EmploymentDetailService } from "./employmentDetail.service";

@graphql.Resolver(() => EmploymentDetail)
export class EmploymentDetailResolver extends EmploymentDetailResolverBase {
  constructor(protected readonly service: EmploymentDetailService) {
    super(service);
  }
}
