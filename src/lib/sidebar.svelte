<script lang="ts">
  export let me = '';
</script>

<aside>
  <h1>{me}</h1>
  <p>
    I support backend infrastructure and tooling with the <a
      href="https://github.com/newsdev/about-int">Interactive News team</a
    > in the New York Times newsroom.
  </p>
  <p>
    <img class="icon" src="media/github.png" alt="github logo" /><a
      href="https://github.com/mtandre">/mtandre</a
    >
  </p>
  <p>
    <img class="icon" src="media/twitter.png" alt="twitter logo" style="margin-right: -3px;" /><a
      href="https://twitter.com/wiffleballmike">/wiffleballmike</a
    >
  </p>
</aside>

<style>
  aside {
    display: block;
    float: left;
    width: 240px;
  }
  h1 {
    margin-top: 0;
  }
  .icon {
    height: 16px;
    width: auto;
    vertical-align: text-bottom;
  }
  @media (max-width: 760px) {
    aside {
      float: none;
      width: 100%;
    }
  }
  :global(a) {
    text-decoration: none;
    color: #444;
    border-bottom: 1px dotted #444;
  }
  :global(a:hover) {
    border-bottom: 1px solid #444;
  }
</style>
