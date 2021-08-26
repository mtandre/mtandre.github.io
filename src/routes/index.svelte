<script>
  let me = 'Michael Andre';
</script>

<svelte:head>
  <title>{me}</title>
</svelte:head>

<aside class="left">
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
<section class="main" />

<style>
  aside,
  section {
    display: block;
  }
  .left {
    float: left;
    width: 240px;
  }
  .main {
    margin-left: 280px;
  }
  a {
    text-decoration: none;
    color: #444;
    border-bottom: 1px dotted #444;
  }
  a:hover {
    border-bottom: 1px solid #444;
  }
  h1 {
    margin-top: 0;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    padding-bottom: 0.6em;
  }
  .icon {
    height: 16px;
    width: auto;
    vertical-align: text-bottom;
  }
  .note {
    margin: 0.3em 0 0 0.9em;
    max-width: 760px;
  }
  @media (max-width: 760px) {
    .left {
      float: none;
      width: 100%;
    }
    .main {
      margin-left: 0;
    }
  }
</style>
