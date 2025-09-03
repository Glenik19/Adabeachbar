<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { form, data } = $props();
</script>

<h1 class="text-3xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
	Admin Dashboard
</h1>

<a
	href="/admin/new"
	class="block w-fit mx-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 transition"
>
	Create a New Product
</a>

<div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each data.products as product (product.id)}
		<div
			class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition"
			transition:slide
		>
			<div class="flex flex-col items-center">
				<img
					src="{product.image}"
					alt="{product.name}"
					class="w-40 h-40 object-cover mb-4 rounded-lg shadow-sm"
				/>
				<p class="text-gray-800 text-base font-medium text-center">
					<strong class="text-gray-600">ID:</strong> {product.id} <br>
					<strong class="text-gray-600">Name:</strong> {product.name} <br>
					<strong class="text-gray-600">Category:</strong> {product.category} <br>
					<strong class="text-gray-600">Price:</strong> {product.price}
				</p>
			</div>

			{#if form}
				<div class="mt-4">
					<img src="{form.uploaded}" alt="uploaded" class="w-full rounded-xl shadow-md">
				</div>
			{/if}

			<div class="flex justify-between mt-6 space-x-3">
				<form action="?/deleteProduct" method="POST" use:enhance>
					<input type="hidden" name="id" value={product.id} />
					<button
						type="submit"
						class="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 shadow-sm transition"
					>
						Delete
					</button>
				</form>

				<form action="?/editProduct" method="POST" use:enhance>
					<input type="hidden" name="id" value={product.id} />
					<button
						type="button"
						class="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 shadow-sm transition"
					>
						<a href="admin/edit/{product.id}">Edit</a>
					</button>
				</form>
			</div>
		</div>
	{/each}
</div>