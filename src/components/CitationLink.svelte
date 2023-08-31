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
    middleware: [offset(8), flip(), shift()],
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

<span class="hoverer">
  (<a
    {href}
    on:mouseenter={!cardVisible ? showCard() : null}
    on:mouseleave={cardVisible ? hideCard() : null}
    on:focus={!cardVisible ? showCard() : null}
    on:blur={cardVisible ? hideCard() : null}
    use:floatingRef><slot /></a
  >)
  {#if cardVisible}
    <div
      class="hover-card"
      role="tooltip"
      in:scale={{ duration: 300, delay: 200 }}
      out:scale={{ duration: 300 }}
      use:floatingContent
    >
      <h2 class="card-title">{cardTitle}</h2>
      {@html cardContent}
    </div>
  {/if}
</span>

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
    border: 1px solid var(--color-primary);
    width: min(21em, 90vw);
    height: auto;
    background-color: var(--color-background);
    box-shadow: 0px 0px 30px 5px rgb(0, 0, 0, 0.025);
  }
</style>
