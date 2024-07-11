import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrackStatusService } from "./trackStatus.service";
import { TrackStatusControllerBase } from "./base/trackStatus.controller.base";

@swagger.ApiTags("trackStatuses")
@common.Controller("trackStatuses")
export class TrackStatusController extends TrackStatusControllerBase {
  constructor(protected readonly service: TrackStatusService) {
    super(service);
  }
}
