/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PortfolioService } from "../portfolio.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PortfolioCreateInput } from "./PortfolioCreateInput";
import { PortfolioWhereInput } from "./PortfolioWhereInput";
import { PortfolioWhereUniqueInput } from "./PortfolioWhereUniqueInput";
import { PortfolioFindManyArgs } from "./PortfolioFindManyArgs";
import { PortfolioUpdateInput } from "./PortfolioUpdateInput";
import { Portfolio } from "./Portfolio";
import { LanguageFindManyArgs } from "../../language/base/LanguageFindManyArgs";
import { Language } from "../../language/base/Language";
import { LanguageWhereUniqueInput } from "../../language/base/LanguageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PortfolioControllerBase {
  constructor(
    protected readonly service: PortfolioService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Portfolio })
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PortfolioCreateInput): Promise<Portfolio> {
    return await this.service.create({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        category: true,
        createdAt: true,
        githubUrl: true,
        id: true,
        image: true,
        info: true,
        liveUrl: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Portfolio] })
  @ApiNestedQuery(PortfolioFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Portfolio[]> {
    const args = plainToClass(PortfolioFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        category: true,
        createdAt: true,
        githubUrl: true,
        id: true,
        image: true,
        info: true,
        liveUrl: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Portfolio | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        category: true,
        createdAt: true,
        githubUrl: true,
        id: true,
        image: true,
        info: true,
        liveUrl: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() data: PortfolioUpdateInput
  ): Promise<Portfolio | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          category: true,
          createdAt: true,
          githubUrl: true,
          id: true,
          image: true,
          info: true,
          liveUrl: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Portfolio | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          category: true,
          createdAt: true,
          githubUrl: true,
          id: true,
          image: true,
          info: true,
          liveUrl: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/language")
  @ApiNestedQuery(LanguageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Language",
    action: "read",
    possession: "any",
  })
  async findManyLanguage(
    @common.Req() request: Request,
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Language[]> {
    const query = plainToClass(LanguageFindManyArgs, request.query);
    const results = await this.service.findLanguage(params.id, {
      ...query,
      select: {
        acronym: true,
        createdAt: true,
        id: true,
        name: true,

        portfolios: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/language")
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "update",
    possession: "any",
  })
  async connectLanguage(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() body: LanguageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      language: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/language")
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "update",
    possession: "any",
  })
  async updateLanguage(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() body: LanguageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      language: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/language")
  @nestAccessControl.UseRoles({
    resource: "Portfolio",
    action: "update",
    possession: "any",
  })
  async disconnectLanguage(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() body: LanguageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      language: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
