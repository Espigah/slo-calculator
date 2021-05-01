<script>
  import ErrorBudget from './ErrorBudget.svelte';
  import Form from './Form.svelte';
</script>

<main>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-full">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Form />
          </div>
          <div>
            <ErrorBudget />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
