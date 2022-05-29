import { prisma } from "../../../../database/prismaClient";


export class FindAllAvailableUseCase {
  async execute() {
    
    return prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null
      }
    });
  }
}