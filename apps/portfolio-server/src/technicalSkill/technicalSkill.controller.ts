import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TechnicalSkillService } from "./technicalSkill.service";
import { TechnicalSkillControllerBase } from "./base/technicalSkill.controller.base";

@swagger.ApiTags("technicalSkills")
@common.Controller("technicalSkills")
export class TechnicalSkillController extends TechnicalSkillControllerBase {
  constructor(
    protected readonly service: TechnicalSkillService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
