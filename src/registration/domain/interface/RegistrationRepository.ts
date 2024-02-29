import { Registration } from "../entity/Registration";

export interface RegistrationRepository {
    createRegistry(
        id_cliente: number,
        content: string
    ): Promise<Registration | null>;
}