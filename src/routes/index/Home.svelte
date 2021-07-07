<script>
  import { Link } from 'svelte-routing'
</script>

<div class="Home">
  <div class="board">
    <div class="board-main relative py-12">
      <div class="navbar flex">
        <Link class="navbar-item">Getting Started</Link>
        <Link class="navbar-item ml-8">Docs</Link>
        <Link class="navbar-item ml-8">Developer Guides</Link>
      </div>

      <div class="intro h-full">
        <div class="intro-left" />

        <div
          class="
            intro-right
            h-full
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
</div>

<style lang="postcss">
  .board {
    height: 100vh;
  }

  .board-main {
    margin: auto;
    width: 1000px;
    height: 100%;
  }

  .navbar {
    position: absolute;
  }
</style>
