import { PrismaClient } from "@prisma/client";
// Prismaはサーバーサイドでしか使用できないためserver-onlyをインポートする
import "server-only";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

// Prismaインスタンスをこのファイル経由で取得することで、Client Componentsから使用されてもビルド時エラーで検出できる
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
