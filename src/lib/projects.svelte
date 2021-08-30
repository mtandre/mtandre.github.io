<script lang="ts">
  import { onMount } from 'svelte';
  import { csvParse } from 'd3-dsv';
  interface LinkType {
    timestamp?: string;
    url: string;
    title: string;
    description?: string;
  }

  let links: LinkType[] = [];

  onMount(async () => {
    const res = await fetch('/links.csv');
    links = csvParse(await res.text());
  });
</script>

<main>
  {#if links.length > 0}
    <ul>
      {#each links as link}
        <li>
          <a href={link.url}>
            {link.title}
          </a>
          {#if link.description}
            <p>{@html link.description}</p>
          {/if}
        </li>
      {/each}
    </ul>
  {:else}
    ...
  {/if}
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
