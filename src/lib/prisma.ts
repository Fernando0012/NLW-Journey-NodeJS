//IMPORTANDO PRISMA
import { PrismaClient } from "@prisma/client";
//EXPORTANDO PRISMA
export const prisma = new PrismaClient ({
    log: ['query'],
})