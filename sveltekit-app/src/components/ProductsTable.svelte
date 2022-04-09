<script>
  import { deleteProduct } from '$lib/inventory'

  export let products = []

  const onDelete = async (/** @type {string} */ id) => {
    if (window.confirm('Are you sure to delete this record?')) {
      await deleteProduct(id)
      products = products.filter(p => p.id !== id)
    }
  }
</script>

<div class="pt-10">
  <table class="border-collapse rounded-lg border border-slate-400 table-auto w-full max-w-4xl">
    <thead>
      <tr class="bg-zinc-100">
        <th class="w-48 text-lg font-semibold text-gray-800 p-2 border border-slate-300 text-left"
          >#</th
        >
        <th class="text-lg font-semibold text-gray-800 p-2 border border-slate-300 text-left"
          >Name</th
        >
        <th class="text-lg font-semibold text-gray-800 p-2 border border-slate-300 text-left"
          >Price</th
        >
        <th class="text-lg font-semibold text-gray-800 p-2 border border-slate-300 text-left"
          >Quantity</th
        >
        <th class="text-lg font-semibold text-gray-800 p-2 border border-slate-300 text-left"
          >Actions</th
        >
      </tr>
    </thead>

    <tbody>
      {#each products as p (p.id)}
        <tr class="hover:bg-zinc-50">
          <td class="border border-slate-300 text-gray-600 p-2">{p.id}</td>
          <td class="border border-slate-300 text-gray-600 p-2">{p.name}</td>
          <td class="border border-slate-300 text-gray-600 p-2">{p.price}</td>
          <td class="border border-slate-300 text-gray-600 p-2">{p.quantity}</td>
          <td class="border border-slate-300 text-gray-600 p-2">
            <button
              class="hover:bg-red-200 text-red-700 rounded px-2 py-1"
              on:click={() => onDelete(p.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
