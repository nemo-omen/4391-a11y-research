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
</script>

<div
  class="hover-card"
  bind:this={card}
  role="tooltip"
  in:scale={{ duration: 400, delay: 300 }}
  out:scale={{ duration: 400 }}
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
    padding: 1rem;
    bottom: 0;
    left: 50%;
    /* transform: translateX(-50%); */
    font-family: var(--font-mono);
    z-index: 100;
    border: 1px solid var(--color-primary);
    width: 21em;
    height: 13rem;
    background-color: var(--color-background);
    box-shadow: 0px 0px 30px 5px rgb(0, 0, 0, 0.025);
    overflow-y: auto;
  }
</style>
