<script>
	import { flip } from 'svelte/animate';

	let { data } = $props();

	let filteredProducts = $state(data.products);
	let selectedCategory = $state('all');

	function filterProducts() {
		if (selectedCategory === 'all') {
			filteredProducts = data.products;
		} else {
			filteredProducts = data.products.filter((e) => e.category_id === selectedCategory.id);
		}
	}
</script>


<h1 class="text-4xl text-center text-gray-800 font-bold mt-8 p-3">My Products</h1>
<p class="text-center text-gray-600 text-lg mb-6">Explore products by category or see them all at once.</p>

<div class="flex justify-center items-center mb-5">
	<label for="category-filter" class="mr-3 text-gray-700 text-lg">Choose a category:</label>
	<select id="category-filter" bind:value={selectedCategory} onchange={filterProducts} class="p-2 text-lg border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300 bg-gray-50">
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
</div>

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
		</div>
			{/each}



</div>

