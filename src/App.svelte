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
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,500;1,600;1,700&display=swap');

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

  .serif {
    font-family: Lora, serif;
  }
</style>
