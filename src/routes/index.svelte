<script lang="ts">
  import Sidebar from '$lib/sidebar.svelte';
  import Projects from '$lib/projects.svelte';
  let me = 'Michael Andre';
</script>

<svelte:head>
  <title>{me}</title>
</svelte:head>

<Sidebar {me} />
<Projects />


