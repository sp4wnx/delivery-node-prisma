import { prisma } from "../../../../database/prismaClient";

interface IFindAll {
  id_client: string;
}

export class FindAllDeliveriesUseCase {
  async execute({ id_client }: IFindAll) {
    
    return prisma.clients.findMany({
      where: {
        id: id_client
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    });
  }
}