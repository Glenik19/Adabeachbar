import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export async function load() {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM MENU');

	return {
		products: rows
	};
}

export const actions = {
	createProduct: async ({ request }) => {
		const formData = await request.formData();
		const uploadedImage = formData.get("uploadedImage");
		const { url } = await put('product_image/' + uploadedImage.name, uploadedImage, { access: "public", token: BLOB_READ_WRITE_TOKEN });
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO MENU (name, category, price, image,) VALUES (?, ?, ?, ?)',
			[
				formData.get('name'),
				formData.get('category'),
				formData.get('price'),
				url
			]
		);
		if (result.affectedRows) {
			redirect(303, '/admin');
		}
	},
	
}

	 
      
   

   

