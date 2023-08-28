<script>
  import { onMount } from 'svelte';
  import CitationCard from './CitationCard.svelte';

  export let title = '';
  export let href;
  let card;

  $: cardContent = '';
  $: cardTitle = title;
  $: cardVisible = false;

  function showCard() {
    if (!cardVisible) {
      cardVisible = true;
    }
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
  <a {href} on:mouseenter={showCard} on:mouseleave={hideCard}><slot /></a>
  {#if cardVisible}
    <CitationCard on:showCard={showCard} on:hideCard={hideCard} title={cardTitle} content={cardContent} />
  {/if}
</span>

<style>
  a {
    display: inline;
  }

  .hoverer {
    /* position: relative; */
  }

  /* :global(.hoverer > a:hover + .hover-card) {
    padding: 1em;
    width: 20em;
    height: auto;
    top: -100%;
    opacity: 1;
    visibility: visible;
  } */
</style>
