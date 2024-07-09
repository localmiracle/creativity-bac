import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudioService } from "./studio.service";
import { StudioControllerBase } from "./base/studio.controller.base";

@swagger.ApiTags("studios")
@common.Controller("studios")
export class StudioController extends StudioControllerBase {
  constructor(protected readonly service: StudioService) {
    super(service);
  }
}
