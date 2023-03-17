import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditBureauDetailService } from "./creditBureauDetail.service";
import { CreditBureauDetailControllerBase } from "./base/creditBureauDetail.controller.base";

@swagger.ApiTags("creditBureauDetails")
@common.Controller("creditBureauDetails")
export class CreditBureauDetailController extends CreditBureauDetailControllerBase {
  constructor(protected readonly service: CreditBureauDetailService) {
    super(service);
  }
}
