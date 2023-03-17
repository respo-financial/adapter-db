import * as graphql from "@nestjs/graphql";
import { CreditBureauDetailResolverBase } from "./base/creditBureauDetail.resolver.base";
import { CreditBureauDetail } from "./base/CreditBureauDetail";
import { CreditBureauDetailService } from "./creditBureauDetail.service";

@graphql.Resolver(() => CreditBureauDetail)
export class CreditBureauDetailResolver extends CreditBureauDetailResolverBase {
  constructor(protected readonly service: CreditBureauDetailService) {
    super(service);
  }
}
