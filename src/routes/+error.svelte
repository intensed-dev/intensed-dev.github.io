<script lang="ts">
  import { onMount } from 'svelte';

  const quotes = [
    'Not everything worth finding is on the first page.',
    'If it is not here, there is probably something else worth discovering.',
    'Keep looking. The interesting places are rarely the obvious ones.',
    'Wrong turn. Right mindset: keep exploring.',
    'Some paths end so you can find a better one.',
    'You have not found it yet. That is different from it not existing.',
    'A missing page is still a reason to look around.',
    'The search is part of the journey.'
  ];

  let quote = quotes[0];

  onMount(() => {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  });
</script>

<svelte:head>
  <title>404 — Intense.</title>
  <meta name="description" content="This page could not be found." />
</svelte:head>

<main>
  <div class="content">
    <p class="code">404</p>
    <h1>nothing here.</h1>
    <p class="quote">“{quote}”</p>
    <a href="/">go back</a>
  </div>
</main>

<style>
  main {
    min-height: 100svh;
    display: grid;
    place-items: center;
    padding: 2rem;
    background: #000;
    color: #fff;
  }

  .content {
    width: min(680px, 100%);
    text-align: center;
  }

  .code {
    margin: 0 0 1rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }

  h1 {
    margin: 0;
    font-size: clamp(3.5rem, 11vw, 8rem);
    line-height: 0.9;
    font-weight: 500;
    letter-spacing: -0.06em;
  }

  .quote {
    max-width: 560px;
    margin: 2rem auto;
    font-size: clamp(1rem, 2vw, 1.35rem);
    line-height: 1.6;
    opacity: 0.6;
  }

  a {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 0.3em;
    opacity: 0.7;
    transition: opacity 160ms ease;
  }

  a:hover {
    opacity: 1;
  }
</style>
