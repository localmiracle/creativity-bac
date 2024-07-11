import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudioServiceBase } from "./base/studio.service.base";

@Injectable()
export class StudioService extends StudioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
