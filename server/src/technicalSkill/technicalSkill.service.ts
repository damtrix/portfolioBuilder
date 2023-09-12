import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TechnicalSkillServiceBase } from "./base/technicalSkill.service.base";

@Injectable()
export class TechnicalSkillService extends TechnicalSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
