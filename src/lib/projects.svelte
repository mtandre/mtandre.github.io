<script lang="ts">
  import type { LinkType } from 'src/routes/links.json';

  import { onMount } from 'svelte';

  let links: LinkType[] = [];

  onMount(async () => {
    const res = await fetch('/links.json');
    links = await res.json();
  });
</script>

<main>
  <ul>
    {#each links as link}
      <li>
        <a target="_blank" href={link.url}>
          {link.title}
        </a>
        {#if link.description}
          <p>{@html link.description}</p>
        {/if}
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    display: block;
    margin-left: 280px;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    padding-bottom: 0.6em;
  }
  p {
    margin: 0.3em 0 0 0.9em;
    max-width: 760px;
  }
  @media (max-width: 760px) {
    main {
      margin-left: 0;
    }
  }
</style>
