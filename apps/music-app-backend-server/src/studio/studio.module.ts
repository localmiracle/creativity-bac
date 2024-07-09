import { Module } from "@nestjs/common";
import { StudioModuleBase } from "./base/studio.module.base";
import { StudioService } from "./studio.service";
import { StudioController } from "./studio.controller";
import { StudioResolver } from "./studio.resolver";

@Module({
  imports: [StudioModuleBase],
  controllers: [StudioController],
  providers: [StudioService, StudioResolver],
  exports: [StudioService],
})
export class StudioModule {}
