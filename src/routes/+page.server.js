import { createConnection } from "$lib/db/mysql";

export async function load({ locals }) {
    let connection = await createConnection();
    let [rows] = await connection.execute(
        'SELECT * From MENU');

    return {
        products: rows
    };
}