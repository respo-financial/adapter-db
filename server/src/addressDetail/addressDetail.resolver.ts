import * as graphql from "@nestjs/graphql";
import { AddressDetailResolverBase } from "./base/addressDetail.resolver.base";
import { AddressDetail } from "./base/AddressDetail";
import { AddressDetailService } from "./addressDetail.service";

@graphql.Resolver(() => AddressDetail)
export class AddressDetailResolver extends AddressDetailResolverBase {
  constructor(protected readonly service: AddressDetailService) {
    super(service);
  }
}
