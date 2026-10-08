<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from '$lib/transition';

  const quotes = [
    { text: 'Not all those who wander are lost.', author: 'J.R.R. Tolkien' },
    { text: 'Nothing will work unless you do.', author: 'Maya Angelou' },
    { text: 'The best way out is always through.', author: 'Robert Frost' },
    { text: 'Try to be a rainbow in someone’s cloud.', author: 'Maya Angelou' },
    { text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
    { text: 'Adventure is worthwhile in itself.', author: 'Amelia Earhart' },
    { text: 'We are all in the gutter, but some of us are looking at the stars.', author: 'Oscar Wilde' },
    { text: 'It is never too late to be what you might have been.', author: 'George Eliot' },
    { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
    { text: 'The only impossible journey is the one you never begin.', author: 'Tony Robbins' },
    { text: 'The future depends on what you do today.', author: 'Mahatma Gandhi' },
    { text: 'There is no substitute for hard work.', author: 'Thomas Edison' },
    { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
    { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
    { text: 'If you can dream it, you can do it.', author: 'Walt Disney' },
    { text: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
    { text: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky' },
    { text: 'Keep your eyes on the stars, and your feet on the ground.', author: 'Theodore Roosevelt' },
    { text: 'But if you don’t change your direction, and if you keep looking, you may end up where you are heading.', author: 'VitePress' },
    { text: 'PAGE NOT FOUND', author: 'VitePress' },
    { text: 'This page has gone somewhere else.', author: 'the internet' },
    { text: 'Maybe the page is still loading.', author: 'your browser' },
    { text: '404: curiosity required.', author: 'the server' },
    { text: 'You found a place where nothing was found.', author: '404' },
    { text: 'Wrong page. Right direction.', author: 'unknown' },
    { text: 'The page is missing. The search continues.', author: 'unknown' },
    { text: 'There is probably something interesting around here.', author: 'unknown' }
  ];

  let quote = quotes[0];

  onMount(() => {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  });

  async function goBack(event: MouseEvent) {
    event.preventDefault();
    await navigate('/');
  }
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
    <a href="/" on:click={goBack}>go back <span aria-hidden="true">→</span></a>
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
