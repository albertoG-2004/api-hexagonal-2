import amqplib from "amqplib";

import { Registration } from "../../domain/entity/Registration";
import INotificationNewRegistry from "../../domain/services/INotificationNewRegistry";

export class NotificationNewRegistry implements INotificationNewRegistry {
    // private options: any;
    private url: any;
    private exch: any;
  
    constructor() {
      // this.options = {
      //   username: process.env.AMQP_USERNAME,
      //   password: process.env.AMQP_PASS,
      //   port: process.env.AMQP_PORT,
      // };
      this.url = process.env.AMQP_URL_EC2;
      this.exch = process.env.EXCHANGE_EC2;
    }
  
    async sendNotification(registration: Registration): Promise<boolean> {
      const conn = await amqplib.connect(this.url);
      const ch = await conn.createChannel();
      const status = await ch.publish(this.exch, "", Buffer.from("Cliente registrado"));
      console.log(status);
      return status;
    }
  }