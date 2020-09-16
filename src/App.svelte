<script lang="typescript">
  import page from 'page'
  import { onMount, onDestroy } from 'svelte'

  import Home from './routes/index/Home.svelte'

  let props: any = {
    component: Home,
  }

  page('/', () => {
    props = {
      component: Home,
    }
  })

  page('/', () => {
    props = {
      component: Home,
    }
  })

  onMount(() => {
    page.start()
  })
</script>

<svelte:component this={props.component} {...props} />

<svelte:window title="PostText" />
