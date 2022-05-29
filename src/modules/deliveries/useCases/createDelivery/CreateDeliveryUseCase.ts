import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDelivery) {

    return prisma.deliveries.create({
      data: {
        item_name,
        id_client
      }
    });
  }
}