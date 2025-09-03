<script>
	import { flip } from 'svelte/animate';

	let { data } = $props();
</script>

<h1 class="text-4xl text-center text-gray-900 font-extrabold mt-10 mb-4 tracking-tight">
	My Products
</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
	{#each data.products as product (product.id)}
		<div
			class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition"
			animate:flip
		>
			<div class="flex flex-col items-center">
				<img
					src="{product.image}"
					alt="{product.name}"
					class="w-40 h-40 object-cover mb-4 rounded-lg shadow-sm"
				/>
				<p class="text-gray-800 text-base font-medium text-center leading-relaxed">
					<strong class="text-gray-600">Name:</strong> {product.name} <br />
					<strong class="text-gray-600">Category:</strong> {product.category} <br />
					<strong class="text-gray-600">Price:</strong> {product.price} <br />
					<strong class="text-gray-600">Description:</strong> {product.description}
					
				</p>
			</div>
		</div>
	{/each}
</div>