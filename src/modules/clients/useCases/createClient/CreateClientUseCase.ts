import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    // validate if user exists
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })
    
    if (clientExists) {
      throw new Error("Client already exists")
    }
    
    // encrypt password
    const hashedPassword = await hash(password, 10);
    
    // create client
    const client = await prisma.clients.create({
      data: { 
        username, 
        password: hashedPassword 
      } 
    });
    
    return client;
  }
}