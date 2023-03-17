import { Module } from "@nestjs/common";
import { HyperVergeAadhaarModuleBase } from "./base/hyperVergeAadhaar.module.base";
import { HyperVergeAadhaarService } from "./hyperVergeAadhaar.service";
import { HyperVergeAadhaarController } from "./hyperVergeAadhaar.controller";
import { HyperVergeAadhaarResolver } from "./hyperVergeAadhaar.resolver";

@Module({
  imports: [HyperVergeAadhaarModuleBase],
  controllers: [HyperVergeAadhaarController],
  providers: [HyperVergeAadhaarService, HyperVergeAadhaarResolver],
  exports: [HyperVergeAadhaarService],
})
export class HyperVergeAadhaarModule {}
