import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveriesDeliveryman {
  id_deliveryman: string;
}

export class FindAllDeliveriesDeliverymanUseCase {
  async execute({ id_deliveryman }: IFindAllDeliveriesDeliveryman) {
    
    return prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      }
    });
  }
}