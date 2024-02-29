import { Registration } from "../../domain/entity/Registration";
import { RegistrationRepository } from "../../domain/interface/RegistrationRepository";
import { NotificationRegistryUSeCase } from "../services/NotificationNewRegistry";
import { MessageServiceSocket } from "../../infrastructure/serviceMessage/MessageServiceSocket";

export class CreateRegistryUseCase {
    constructor( readonly registrationRepository: RegistrationRepository, readonly sendNotification: NotificationRegistryUSeCase, 
        readonly messageServiceSocket: MessageServiceSocket) {}

    async run(
        id_cliente: number,
        content: string
    ): Promise<Registration | null> {
        try {
            const registry: any = await this.registrationRepository.createRegistry(
                id_cliente,
                content
            );
            if(registry) {
                this.sendNotification.run(registry);
                this.messageServiceSocket.sendMessage(registry);
            }
            return registry;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}