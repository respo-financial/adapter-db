import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmploymentDetailService } from "./employmentDetail.service";
import { EmploymentDetailControllerBase } from "./base/employmentDetail.controller.base";

@swagger.ApiTags("employmentDetails")
@common.Controller("employmentDetails")
export class EmploymentDetailController extends EmploymentDetailControllerBase {
  constructor(protected readonly service: EmploymentDetailService) {
    super(service);
  }
}
