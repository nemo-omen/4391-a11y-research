<script>
  import { onMount } from 'svelte';
  import CitationCard from './CitationCard.svelte';

  export let title = '';
  export let href;

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
  (<a {href} on:mouseenter={showCard} on:mouseleave={hideCard}><slot /></a>)
  {#if cardVisible}
    <CitationCard title={cardTitle} content={cardContent} />
  {/if}
</span>

<style>
  a {
    display: inline;
  }
</style>
