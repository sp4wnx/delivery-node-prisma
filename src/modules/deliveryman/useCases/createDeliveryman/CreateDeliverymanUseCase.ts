import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    // validate if deliveryMan already exists
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })
    
    if (deliverymanExists) {
      throw new Error("Deliveryman already exists")
    }
    
    // encrypt password
    const hashedPassword = await hash(password, 10);
    
    // create deliveryman
    const deliveryman = await prisma.deliveryman.create({
      data: { 
        username, 
        password: hashedPassword 
      } 
    });
    
    return deliveryman;
  }
}