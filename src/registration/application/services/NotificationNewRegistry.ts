import { Registration } from "../../domain/entity/Registration";
import { NotificationNewRegistry } from "../../infrastructure/serviceRabbitMQ/NotificationNewRegistry";

export class NotificationRegistryUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewRegistry) {}

  async run(registration: Registration) {
    await this.serviceNotifiacion.sendNotification(registration);
  }
}