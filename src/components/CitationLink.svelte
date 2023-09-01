<script>
  import { onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import { offset, flip, shift } from 'svelte-floating-ui/dom';
  import { createFloatingActions } from 'svelte-floating-ui';

  export let title = '';
  export let href;

  $: cardContent = '';
  $: cardTitle = title;
  $: cardVisible = false;

  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: 'absolute',
    placement: 'top',
    middleware: [flip(), shift()],
  });

  function showCard() {
    cardVisible = true;
  }

  function hideCard() {
    cardVisible = false;
  }

  onMount(() => {
    if (!href || !href.startsWith('#')) {
      console.log('CardLink requires a reference to an id ex: `#my-citation-reference`.');
      return;
    }

    if (window) {
      const selection = document.querySelector(href);
      const selectionParent = selection.parentElement;
      const citationSelection = selectionParent.querySelector('.citation-content');
      cardTitle = selection.innerText;
      cardContent = citationSelection.innerHTML;
    }
  });
</script>

<!-- <span class="hoverer"> -->
[<a
  class="hoverer"
  {href}
  on:mouseenter={!cardVisible ? showCard() : null}
  on:mouseleave={cardVisible ? hideCard() : null}
  on:focus={!cardVisible ? showCard() : null}
  on:blur={cardVisible ? hideCard() : null}
  use:floatingRef
>
  {title}
  {#if cardVisible}
    <div
      class="hover-card"
      role="tooltip"
      in:scale={{ duration: 300, delay: 200 }}
      out:scale={{ duration: 300 }}
      use:floatingContent
    >
      <div class="card-wrapper">
        <h2 class="card-title">{cardTitle}</h2>
        {@html cardContent}
      </div>
    </div>
  {/if}</a
>]

<!-- </span> -->

<style>
  .hoverer {
    position: relative;
  }
  a {
    display: inline;
  }

  .card-title {
    margin-block-end: 1rem;
  }

  .hover-card {
    display: block;
    position: absolute;
    padding: 1rem;
    font-family: var(--font-mono);
    z-index: 100;
    width: min(21em, 90vw);
    height: auto;
    box-shadow: 0px 0px 30px 5px rgb(0, 0, 0, 0.025);
    background-color: transparent;
  }

  .card-wrapper {
    padding: 1rem;
    border: 1px solid var(--color-primary);
    background-color: var(--color-background);
    color: var(--color-body);
  }

  :global(.card-wrapper:hover *) {
    color: var(--color-body);
  }
</style>
