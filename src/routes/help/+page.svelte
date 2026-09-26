<script lang="ts">
  import { navigate } from "$lib/transition";

  let count = $state(0);
  
</script>

<svelte:head>
  <title>Intensed.</title>
</svelte:head>

<main>
  <h1>Help here!</h1>
  <p>Start building your project in <code>src/routes</code>.</p>

  <button onclick={() => count++}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>

  <button onclick={() => navigate('/')}>
    Back Home!
  </button>
</main>
