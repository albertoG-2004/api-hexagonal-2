import { Registration } from "../../domain/entity/Registration";

export interface IMessageService {
    sendMessage(registration: Registration):string;
}