<script>
  import { onMount } from 'svelte';
  import CitationCard from './CitationCard.svelte';

  export let title = '';
  export let href;

  $: cardContent = '';
  $: cardTitle = title;
  $: cardVisible = false;

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
  (<a {href} on:mouseenter={!cardVisible ? showCard() : null}><slot /></a>)
  {#if cardVisible}
    <CitationCard
      parent={this}
      title={cardTitle}
      content={cardContent}
      on:hover={!cardVisible ? showCard() : null}
      on:unhover={cardVisible ? hideCard() : null}
    />
  {/if}
</span>

<style>
  .hoverer {
    position: relative;
  }
  a {
    display: inline;
  }
</style>
