import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";


interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if (!deliveryman) {
      throw new Error('Username or password does not exist.');
    }

    const passwordMatch = await compare(password, deliveryman.password);
    
    if (!passwordMatch) {
      throw new Error('Username or password does not exist.');
    }

    const token = sign({ username }, process.env.DELIVERYMAN_AUTH_KEY, {
      subject: deliveryman.id,
      expiresIn: "1d"
    });
    
    return token;
  }
}