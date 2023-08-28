<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let card;
  $: offset = 1;

  export let title;
  export let content;

  onMount(() => {
    const mainSelection = document.querySelector('main');
    const articleSelection = document.querySelector('#main-content');
    const articleWidth = articleSelection.scrollWidth;
    const articleHorizontal = articleSelection.scrollLeft + articleWidth;
    const mainWidth = mainSelection.clientWidth;
    const available = mainWidth - articleHorizontal;
    const doubleOffset = available - card.clientWidth;
    offset = doubleOffset / 2 - 16;
    console.log(offset);
  });
</script>

<div
  class="hover-card"
  bind:this={card}
  role="tooltip"
  style:--offset="{offset}px"
  transition:fly={{ duration: 700, x: 500 }}
>
  <h3 class="card-title">{title}</h3>
  {@html content}
</div>

<style>
  .card-title {
    margin-block-end: 1rem;
  }

  .hover-card {
    display: block;
    position: absolute;
    background-color: var(--color-background);
    box-shadow: 0px 0px 30px 5px rgb(0, 0, 0, 0.025);
    border-radius: 0.5em;
    padding: 1em;
    width: 20em;
    height: auto;
    top: 50%;
    right: var(--offset);
    transform: translateY(-50%);
    border: 1px solid var(--color-primary);
    font-family: var(--font-mono);
  }
</style>
