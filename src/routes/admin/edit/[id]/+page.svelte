<script>
	let { data, form} = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Edit Product</h1>

<form method="POST" action="?/editProduct" enctype="multipart/form-data" class="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto space-y-4">
	<div class="space-y-2">
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
		<input type="text" name="name" id="name" placeholder="Enter name"  class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

		<div class="space-y-2">
		<label for="price" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea name="description" id="description" placeholder="Enter description"  class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-24"></textarea>
	</div>

	<div class="space-y-2">
		<label for="price" class="block text-sm font-medium text-gray-700">Price</label>
		<input type="number" name="price" id="price" placeholder="Enter price"  class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-24">
	</div>

	<div class="space-y-2">
		<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
		<input type="file" name="uploadedImage" class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
    	
	</div>


	<button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
		Edit Product
	</button>
</form>
