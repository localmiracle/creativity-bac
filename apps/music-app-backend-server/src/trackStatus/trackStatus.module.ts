import { Module } from "@nestjs/common";
import { TrackStatusModuleBase } from "./base/trackStatus.module.base";
import { TrackStatusService } from "./trackStatus.service";
import { TrackStatusController } from "./trackStatus.controller";
import { TrackStatusResolver } from "./trackStatus.resolver";

@Module({
  imports: [TrackStatusModuleBase],
  controllers: [TrackStatusController],
  providers: [TrackStatusService, TrackStatusResolver],
  exports: [TrackStatusService],
})
export class TrackStatusModule {}
