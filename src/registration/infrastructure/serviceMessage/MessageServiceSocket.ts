import io from 'socket.io-client';
import { Registration } from '../../domain/entity/Registration';
import { IMessageService } from '../../application/services/IMessageService';

export class MessageServiceSocket implements IMessageService{
    sendMessage(registration: Registration): string {
        const socket = io('https://socketserver-ybwx.onrender.com');

        socket.on("connect", ()=>{
            console.log("Connected to server");
            
            socket.emit("newClient", "Cliente registrado");
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnect from server");
        });
        
        return "Message sent";
    }
}