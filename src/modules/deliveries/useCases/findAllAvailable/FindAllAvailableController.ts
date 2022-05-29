import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(request: Request, response: Response) {

    const findAllAvailable = new FindAllAvailableUseCase();
    const result = await findAllAvailable.execute();
    
    return response.json(result);
  }
}