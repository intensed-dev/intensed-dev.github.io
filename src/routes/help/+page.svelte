<script lang="ts">
  import LoadingOverlay from "$lib/LoadingOverlay.svelte";
  let loadingoverlay: LoadingOverlay;

  let count = $state(0);
  
</script>

<svelte:head>
  <title>Intensed.</title>
</svelte:head>

<main>
  <LoadingOverlay bind:this={loadingoverlay}/>
  <h1>Help here!</h1>
  <p>Start building your project in <code>src/routes</code>.</p>

  <button onclick={() => count++}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>

  <button onclick={() => loadingoverlay.navigate('/')}>
    Back Home!
  </button>
</main>
