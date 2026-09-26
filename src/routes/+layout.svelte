<svelte:head>
  <meta name="description" content="My Personal Website" />
</svelte:head>

<script lang="ts">
  import '../app.css';
  
  import type { Snippet } from 'svelte';
  import Transition from '$lib/Transition.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<Transition />

{@render children()}
