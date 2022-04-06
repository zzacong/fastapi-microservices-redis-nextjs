<script>
  import clsx from 'clsx'
</script>

<form on:submit|preventDefault class="flex flex-col justify-between">
  <div class="flex flex-col space-y-6">
    <div class="">
      <label for="name" class="sr-only">Name</label>
      <input
        type="text"
        placeholder="Name"
        class={clsx(
          'w-full rounded-md border-gray-400 px-4 placeholder-gray-400 focus:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          false && 'border-2 border-red-500'
        )}
      />
    </div>
    <div class="">
      <label for="price" class="sr-only">Price</label>
      <input
        type="number"
        placeholder="Price"
        class={clsx(
          'w-full rounded-md border-gray-400 px-4 placeholder-gray-400 focus:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          false && 'border-2 border-red-500'
        )}
      />
    </div>
    <div class="">
      <label for="quantity" class="sr-only">Quantity</label>
      <input
        type="number"
        placeholder="Quantity"
        class={clsx(
          'w-full rounded-md border-gray-400 px-4 placeholder-gray-400 focus:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          false && 'border-2 border-red-500'
        )}
      />
    </div>
  </div>

  <div class="pt-10">
    <button
      type="submit"
      class="w-full rounded-lg bg-gradient-to-r from-blue-500 to-pink-400 py-2 px-4 font-mono text-xl font-medium text-white hover:opacity-90"
    >
      Create
    </button>
  </div>
</form>
