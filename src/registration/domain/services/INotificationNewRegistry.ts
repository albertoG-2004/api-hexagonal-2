import { Registration } from "../entity/Registration";

export default interface INotificationNewRegistry {
    sendNotification(registration: Registration):Promise<boolean>;
}