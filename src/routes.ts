import { Router } from "express";
import { ensureAuthenticatedClient } from "./middlewares/ensureAuthenticatedClient";
import { ensureAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticatedDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesController();


routes.post("/clients", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.get("/client/deliveries", ensureAuthenticatedClient, findAllDeliveriesClient.handle);


routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticatedDeliveryman, findAllDeliveriesDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticatedClient, createDeliveryController.handle);
routes.post("/delivery/available", ensureAuthenticatedDeliveryman, findAvailableController.handle);
routes.put("/delivery/update-deliveryman/:id", ensureAuthenticatedDeliveryman, updateDeliverymanController.handle);

routes.put("/delivery/update-end-date/:id", ensureAuthenticatedDeliveryman, updateEndDateController.handle);


export { routes };