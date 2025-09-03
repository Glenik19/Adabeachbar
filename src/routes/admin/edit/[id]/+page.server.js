import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN, EDITOR } from "$env/static/private";

export const actions = {
editProduct: async ({ request, params }) => {
		const formData = await request.formData();
		const {id} = params;
		const name = formData.get('name');
		const description = formData.get('description');
		const price = formData.get('price');
        const uploadedImage = formData.get("uploadedImage");
		const { url } = await put('product_image/' + uploadedImage.name, uploadedImage, { access: "public", token: BLOB_READ_WRITE_TOKEN, addRandomSuffix: true });
		const connection = await createConnection();
		const [result] = await connection.execute(
			'UPDATE MENU SET name = ?, description = ?, price = ?, image = ? WHERE id = ?',
			[name, description, price, url, id]
		);
		 redirect(303, '/admin');
	}
	
}
