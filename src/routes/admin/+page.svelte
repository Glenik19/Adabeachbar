<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h1>

<a href="/admin/new" class="block w-fit mx-auto bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
	Create a New Product
</a>

<div class="mt-6 space-y-4">
	{#each data.products as product (product.id)}
		<div class="bg-white p-4 rounded-lg shadow-md border border-gray-200" transition:slide>
			<p class="text-gray-700 text-sm">
				<strong>ID:</strong> {product.id} |
				<strong>Name:</strong> {product.name} |
				<strong>Category:</strong> {product.category}	|
                <strong>Price:</strong> {product.price} |
				<strong>Image:</strong> {product.image} 
			</p>

			<form use:enhance action="?/upload" method="POST" enctype="multipart/form-data" class="space-y-4"> 
				<input type="file" name="image" class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
				<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">Upload Image</button>
			</form>
	
			{#if form}
				<div class="mt-4">
					<img src="{form.uploaded}" alt="uploaded" class="w-full rounded-md shadow-md">
				</div>
			{/if}
			
			<form action="?/deleteProduct" method="POST" use:enhance class="flex justify-end mt-2">
				<input type="hidden" name="id" value={event.id} />
				<button type="submit" class="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700 transition">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>
