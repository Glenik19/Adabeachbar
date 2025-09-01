import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {

	let connection = await createConnection();
	const {id} = params;
	let [rows] = await connection.execute(
		'SELECT * From MENU'
	);

	return {
		products: rows
	};
}

export const actions = {
	deleteProduct: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		const [result] = await connection.execute('DELETE FROM products WHERE id = ?', [id]);
	}
};
