import * as graphql from "@nestjs/graphql";
import { StudioResolverBase } from "./base/studio.resolver.base";
import { Studio } from "./base/Studio";
import { StudioService } from "./studio.service";

@graphql.Resolver(() => Studio)
export class StudioResolver extends StudioResolverBase {
  constructor(protected readonly service: StudioService) {
    super(service);
  }
}
