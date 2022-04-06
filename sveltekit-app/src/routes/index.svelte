<script>
  import Modal from '$components/Modal.svelte'
  import AddPostForm from '$components/AddPostForm.svelte'
  import { isModalOpen } from '$lib/stores'
</script>

<div class="pt-10">
  <button
    on:click={() => ($isModalOpen = true)}
    class="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-2 font-semibold text-white hover:opacity-90"
  >
    Add
  </button>
</div>

<Modal title="Add new product">
  <AddPostForm />
</Modal>
