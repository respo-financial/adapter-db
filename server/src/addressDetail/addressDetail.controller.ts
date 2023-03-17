import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AddressDetailService } from "./addressDetail.service";
import { AddressDetailControllerBase } from "./base/addressDetail.controller.base";

@swagger.ApiTags("addressDetails")
@common.Controller("addressDetails")
export class AddressDetailController extends AddressDetailControllerBase {
  constructor(protected readonly service: AddressDetailService) {
    super(service);
  }
}
