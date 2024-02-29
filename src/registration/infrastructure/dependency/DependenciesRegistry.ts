import { CreateRegistryController } from "../controllers/CreateRegistryController";
import { CreateRegistryUseCase } from "../../application/methods/CreateRegistryUseCase";
import { NotificationRegistryUSeCase } from "../../application/services/NotificationNewRegistry";
import { NotificationNewRegistry } from "../serviceRabbitMQ/NotificationNewRegistry";
import { MessageServiceSocket } from "../serviceMessage/MessageServiceSocket";
import { MySqlRegistryRepository } from "../repository/MySqlRegistryRepository";

export const mySqlRegistryRepository = new MySqlRegistryRepository();
export const servicesNotification = new NotificationNewRegistry();
export const messageServiceSocket = new MessageServiceSocket();
export const serviceNotificationUseCase = new NotificationRegistryUSeCase(servicesNotification);
export const createRegistryUseCase = new CreateRegistryUseCase(mySqlRegistryRepository, serviceNotificationUseCase, messageServiceSocket);
export const createRegistryController = new CreateRegistryController(createRegistryUseCase);