<script>
  import { formState, chartState } from '../store.js';
  import Chart from './Chart.svelte';

  import { calc } from '../utils/ErrorBudgetUtils.js';

  let erros;
  const unsubscribe = formState.subscribe(({ slo, requestsPerSecond, burnRateInDays }) => {
    erros = calc({ slo, requestsPerSecond });
    chartState.set({
      erros: parseInt(erros),
      burnRateInDays: parseInt(burnRateInDays),
    });
  });
</script>

<Chart />
<div class="px-6 h1">O orçamento de erros permitido para atender ao seu SLO é de <strong>{erros}</strong> erros.</div>

<style>
</style>
