import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;
    
    const updateDeliveryman = new UpdateDeliverymanUseCase();
    const result = await updateDeliveryman.execute({
      id_delivery,
      id_deliveryman
    });
    
    return response.json(result);
  }
}