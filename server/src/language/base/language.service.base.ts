/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Language, Portfolio } from "@prisma/client";

export class LanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LanguageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageCountArgs>
  ): Promise<number> {
    return this.prisma.language.count(args);
  }

  async findMany<T extends Prisma.LanguageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageFindManyArgs>
  ): Promise<Language[]> {
    return this.prisma.language.findMany(args);
  }
  async findOne<T extends Prisma.LanguageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageFindUniqueArgs>
  ): Promise<Language | null> {
    return this.prisma.language.findUnique(args);
  }
  async create<T extends Prisma.LanguageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageCreateArgs>
  ): Promise<Language> {
    return this.prisma.language.create<T>(args);
  }
  async update<T extends Prisma.LanguageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageUpdateArgs>
  ): Promise<Language> {
    return this.prisma.language.update<T>(args);
  }
  async delete<T extends Prisma.LanguageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageDeleteArgs>
  ): Promise<Language> {
    return this.prisma.language.delete(args);
  }

  async findPortfolios(
    parentId: string,
    args: Prisma.PortfolioFindManyArgs
  ): Promise<Portfolio[]> {
    return this.prisma.language
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .portfolios(args);
  }
}
