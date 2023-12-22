<script>
  import { onMount } from 'svelte';

  export let options = {};
  export let divId = 'chart';
  let chart = undefined;
  let plotDiv;

  onMount(async () => {
    chart = new ApexCharts(plotDiv, options);
    chart.render();
  });
</script>

<div class="chart" bind:this={plotDiv} id={divId}></div>
