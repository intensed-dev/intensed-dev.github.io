<script lang="ts">
  import { onMount } from 'svelte';

  const quotes = [
    { text: 'Not everything worth finding is on the first page.', author: 'Unknown' },
    { text: 'If it is not here, there is probably something else worth discovering.', author: 'Unknown' },
    { text: 'Keep looking. The interesting places are rarely the obvious ones.', author: 'Unknown' },
    { text: 'Wrong turn. Right mindset: keep exploring.', author: 'Unknown' },
    { text: 'Some paths end so you can find a better one.', author: 'Unknown' },
    { text: 'You have not found it yet. That is different from it not existing.', author: 'Unknown' },
    { text: 'A missing page is still a reason to look around.', author: 'Unknown' },
    { text: 'The search is part of the journey.', author: 'Unknown' }
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
    <blockquote>
      <p>“{quote.text}”</p>
      <cite>— {quote.author}</cite>
    </blockquote>
    <a href="/">go back <span aria-hidden="true">→</span></a>
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
    font-size: clamp(1.1rem, 3vw, 1.8rem);
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

  blockquote {
    max-width: 560px;
    margin: 2rem auto;
    font-size: clamp(1rem, 2vw, 1.35rem);
    line-height: 1.6;
    opacity: 0.6;
  }

  blockquote p {
    margin: 0;
    font-style: italic;
  }

  cite {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.85em;
    font-style: normal;
  }

  a {
    color: #fff;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 160ms ease;
  }

  a:hover {
    opacity: 1;
  }
</style>
