<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade, fly } from 'svelte/transition';
  const dispatch = createEventDispatcher();

  export let title;
  export let content;
  let card;
  let heightStore = writable(0);
  let widthStore = writable(0);

  $: width = 0;
  $: height = 0;

  function setCardDimensions() {
    $widthStore = card.offsetWidth;
    $heightStore = card.offsetHeight;
  }

  function handleMouseleave() {
    dispatch('hideCard');

    setTimeout(() => {
      dispatch('hideCard');
    }, 500);
  }

  onMount(() => {
    setCardDimensions();
  });
</script>

<div
  class="hover-card"
  bind:this={card}
  role="tooltip"
  on:mouseenter={() => setCardDimensions()}
  style:--width={$widthStore}
  style:--height={$heightStore}
  on:mouseenter={() => dispatch('showCard')}
  on:mouseleave={() => dispatch('hideCard')}
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
    /* transform-origin: bottom-center;
    left: 50%; */
    /* transform: translateX(-50%); */
    background-color: var(--color-background);
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.2);
    border-radius: 0.5em;
    padding: 1em;
    width: 30em;
    height: auto;
    top: 50%;
    right: 2em;
    transform: translateY(-50%);
    /* width: 1px;
    height: 1px;
    opacity: 0;
    visibility: hidden;
    transition-delay: 600ms;
    transition: opacity 500ms ease-in-out; */
  }

  /* .hover-card:hover,
  .hover-card:focus-within {
    padding: 1em;
    width: 20em;
    height: auto;
    top: calc(var(--height) * -1);
    opacity: 1;
    visibility: visible;
  } */
</style>
