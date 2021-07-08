<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Home from './routes/index/Home.svelte'
</script>

<Router>
  <Route to="/">
    <Home />
  </Route>
</Router>

<svelte:window title="PostText" />

<style global lang="postcss">
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a {
    font-family: 'Nimbus Sans L';
  }

  code {
    font-family: 'Fira Mono';
  }

  .serif {
    font-family: Lora, serif;
  }
</style>
