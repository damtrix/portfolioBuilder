import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TechnicalSkillResolverBase } from "./base/technicalSkill.resolver.base";
import { TechnicalSkill } from "./base/TechnicalSkill";
import { TechnicalSkillService } from "./technicalSkill.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TechnicalSkill)
export class TechnicalSkillResolver extends TechnicalSkillResolverBase {
  constructor(
    protected readonly service: TechnicalSkillService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
