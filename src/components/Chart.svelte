<script>
  import { onMount } from 'svelte';
  import { chartState } from '../store.js';
  import { chunk } from '../utils/ErrorBudgetUtils.js';
  // import * as Chart from 'chart.js';
  let chart;

  function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
      labels: [],
      datasets: [
        {
          label: 'Erros por dia',
          borderColor: 'rgb(255, 99, 132)',
          data: [],
          fill: true,
        },
      ],
    };

    const config = {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
    let chart = new Chart(ctx, config);
    //  chart.render();
    return chart;
  }

  function render(chart, { labels = [], values = [] }) {
    chart.data.labels = [0, ...labels];
    chart.data.datasets[0].data = [0, ...values];
    chart.update();
  }

  onMount(() => {
    chart = createChart();
    chartState.subscribe(({ erros, burnRateInDays }) => {
      // ctx = document.getElementById('myChart').getContext('2d');
      let values = chunk({ erros, burnRateInDays });

      let labels = [];
      for (let i = 0; i < burnRateInDays; i++) {
        labels[i] = i + 1;
      }
      render(chart, {
        labels,
        values,
      });
    });
  });
</script>

<canvas id="myChart" width="300" height="150" style="width: 300px; height: 150px;" />
