<script>
  import { Link } from 'svelte-routing'
</script>

<div class="Home">
  <div class="board" style="background: hsla(0, 0%, 88%, 0.3);">
    <div class="board-main relative">
      <div
        class="
          navbar
          absolute w-full
          flex justify-end"
      >
        <span>&#8226;</span>
        <Link class="navbar-item ml-8">Getting Started</Link>
        <span class="ml-8">&#8226;</span>
        <Link class="navbar-item ml-8">Docs</Link>
        <span class="ml-8">&#8226;</span>
        <Link class="navbar-item ml-8">Developer Guides</Link>
        <span class="ml-8">&#8226;</span>
        <Link class="navbar-item ml-8">Try it out</Link>
        <span class="ml-8">&#8226;</span>

        <Link
          class="
            w-12 h-12
            text-lg serif
            flex justify-center items-center
            absolute top-0 left-0"
          style="
            background: goldenrod;
            color: black;
            text-decoration: none;"
          to="/"
        >
          \T
        </Link>
      </div>

      <div class="intro h-full">
        <div class="intro-left" />

        <div
          class="
            intro-right
            h-full
            mt-48 mb-4
            flex flex-col justify-center items-end"
        >
          <h1 class="text-6xl serif">PostText</h1>
          <h2 class="text-2xl serif">
            The formal markup language for rich-text editing
          </h2>
        </div>
      </div>
    </div>
  </div>

  <div
    class="
      ribbon
      text-2xl
      flex justify-center items-center"
    style="
      background: darkslategrey;
      color: white;
      height: 80px;"
  >
    <code>\() [] &lbrace;&rbrace; &lbrace;&rbrace;;</code>
  </div>

  <div class="board">
    <div class="board-main">

    </div>
  </div>
</div>

<style lang="postcss">
  .board-main {
    margin: auto;
    width: 1000px;
    height: 100%;

    @apply py-24;
  }
</style>
