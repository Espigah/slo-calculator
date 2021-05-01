<script>
  import { formState } from '../store.js';
</script>

<main>
  <!-- svelte-ignore component-name-lowercase -->
  <form class="content">
    <div class="px-4 py-5 bg-white sm:p-6">
      <div class="grid grid-cols-1 gap-6">
        <div class="col-span-12">
          <label for="slo block text-sm font-medium text-gray-700">SLA/SLO</label>
          <input
            id="slo"
            type="number"
            step="0.01"
            max="100"
            bind:value={$formState.slo}
            autocomplete="given-name"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1.5"
          />
        </div>
        <div class="col-span-12">
          <label for="requestsPerSecond">Requisição</label>
          <input
            id="requestsPerSecond"
            type="number"
            bind:value={$formState.requestsPerSecond}
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1.5"
          />
        </div>
        <div class="col-span-12">
          <label for="burnRateInDays">Taxa de queima (dias)</label>
          <input
            id="burnRateInDays"
            type="number"
            bind:value={$formState.burnRateInDays}
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1.5"
          />
        </div>
      </div>
    </div>
  </form>
</main>

<style>
  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
  }
</style>
