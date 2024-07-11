import * as graphql from "@nestjs/graphql";
import { TrackStatusResolverBase } from "./base/trackStatus.resolver.base";
import { TrackStatus } from "./base/TrackStatus";
import { TrackStatusService } from "./trackStatus.service";

@graphql.Resolver(() => TrackStatus)
export class TrackStatusResolver extends TrackStatusResolverBase {
  constructor(protected readonly service: TrackStatusService) {
    super(service);
  }
}
