import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TechnicalSkillModuleBase } from "./base/technicalSkill.module.base";
import { TechnicalSkillService } from "./technicalSkill.service";
import { TechnicalSkillController } from "./technicalSkill.controller";
import { TechnicalSkillResolver } from "./technicalSkill.resolver";

@Module({
  imports: [TechnicalSkillModuleBase, forwardRef(() => AuthModule)],
  controllers: [TechnicalSkillController],
  providers: [TechnicalSkillService, TechnicalSkillResolver],
  exports: [TechnicalSkillService],
})
export class TechnicalSkillModule {}
