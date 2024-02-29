import { query } from "../../../database/database";
import { Registration } from "../../domain/entity/Registration";
import { RegistrationRepository } from "../../domain/interface/RegistrationRepository";

export class MySqlRegistryRepository implements RegistrationRepository {
    async createRegistry(
        id_client: number,
        content: string
    ): Promise<Registration | null> {
        const sql = "INSERT INTO registrations (id_client, content) VALUES (?,?)";
        const params: any[] = [id_client, content];

        try {
            const [result]: any = await query(sql, params);
            return new Registration(result.insertId, id_client, content);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}