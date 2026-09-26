<svelte:head>
  <meta name="description" content="My Personal Website" />
</svelte:head>

<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import LoadingOverlay from '$lib/LoadingOverlay.svelte';
  let loadingoverlay: LoadingOverlay;

  let { children }: { children: Snippet } = $props();
</script>

<LoadingOverlay bind:this={loadingoverlay}/>
{@render children()}
