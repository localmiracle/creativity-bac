import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrackStatusServiceBase } from "./base/trackStatus.service.base";

@Injectable()
export class TrackStatusService extends TrackStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
