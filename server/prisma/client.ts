import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(data: any) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

export { createUser };
