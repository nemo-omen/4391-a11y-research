<script>
  import { fly } from 'svelte/transition';

  export let title;
  export let content;
</script>

<div class="hover-card" role="tooltip" transition:fly={{ duration: 700, x: 500 }}>
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
    width: 30em;
    height: auto;
    top: 50%;
    right: 2.5em;
    transform: translateY(-50%);
    border: 1px solid var(--color-primary);
    font-family: var(--font-mono);
  }
</style>
