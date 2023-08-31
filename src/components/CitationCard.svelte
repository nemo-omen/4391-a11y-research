<script>
  import { onMount, afterUpdate } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  let card;
  $: offset = 1;
  const dispatch = createEventDispatcher();

  export let parent;
  export let title;
  export let content;

  function dispatchHover() {
    dispatch('hover');
  }

  function dispatchUnHover() {
    dispatch('unhover');
  }

  onMount(() => {
    const mainSelection = document.querySelector('main');
    const articleSelection = document.querySelector('#main-content');
    const cardRect = card.getBoundingClientRect();
    const { top, bottom } = cardRect;
    const headerSelection = document.querySelector('header');
    const headerRect = headerSelection.getBoundingClientRect();
    console.log(cardRect.top, headerRect.bottom);
  });
</script>

<div
  class="hover-card"
  bind:this={card}
  role="tooltip"
  style:--offset="{offset}px"
  in:scale={{ duration: 400, delay: 300 }}
  out:scale={{ duration: 400 }}
  on:mouseenter={dispatchHover}
  on:mouseleave={dispatchUnHover}
>
  <div class="wrapper">
    <h3 class="card-title">{title}</h3>
    {@html content}
  </div>
</div>

<style>
  .card-title {
    margin-block-end: 1rem;
  }

  .hover-card {
    display: block;
    position: absolute;
    padding: 2rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-mono);
    z-index: 100;
  }

  .wrapper {
    border: 1px solid var(--color-primary);
    width: 20em;
    height: auto;
    background-color: var(--color-background);
    box-shadow: 0px 0px 30px 5px rgb(0, 0, 0, 0.025);
    padding: 1em;
  }
</style>
