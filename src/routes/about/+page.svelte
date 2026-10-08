<script lang="ts">
  import { onMount } from 'svelte';

  const text = `I’m Intense, a developer and creator who likes turning ideas into things that can actually be used. I spend a lot of time experimenting with software, games, interfaces and the small details that make a project feel like its own thing.

  Most of what I make starts as a simple idea and grows through experimentation. I enjoy learning by building, changing direction when something does not work, and keeping the final result as simple as it needs to be.

  This space is intentionally open. It is a place for me to write about what I am working on, what I am interested in, and whatever else feels worth putting into words.`;

  const words = text.split(/(\s+)/);

  let article: HTMLElement;
  let raf = 0;

  function updateWords() {
    if (!article) return;

    const viewportCenter = window.innerHeight * 0.55;
    const spans = article.querySelectorAll<HTMLElement>('[data-word]');

    for (const span of spans) {
      const rect = span.getBoundingClientRect();
      const distance = (rect.top + rect.height / 2 - viewportCenter) / (window.innerHeight * 0.42);
      const progress = Math.max(0, Math.min(1, 1 - distance));
      const opacity = 0.18 + progress * 0.82;
      const y = (1 - progress) * 18;

      span.style.opacity = opacity.toString();
      span.style.transform = `translateY(${y}px)`;
    }

    raf = 0;
  }

  function requestUpdate() {
    if (!raf) raf = requestAnimationFrame(updateWords);
  }

  onMount(() => {
    updateWords();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (raf) cancelAnimationFrame(raf);
    };
  });
</script>

<svelte:head>
  <title>About — Intense.</title>
  <meta
    name="description"
    content="A little more about Intense."
  />
</svelte:head>

<main>
  <article bind:this={article} aria-label="About Intense">
    <h1>about me.</h1>
    <div class="text">
      {#each words as word, i (i)}
        {#if /^\s+$/.test(word)}
          {word}
        {:else}
          <span data-word style="--word-index: {i}">{word}</span>
        {/if}
      {/each}
    </div>
  </article>
</main>

<style>
  main {
    min-height: 100svh;
    background: #000;
    color: #fff;
  }

  article {
    width: min(1100px, calc(100% - 2 * clamp(1.25rem, 7vw, 7rem)));
    margin: 0 auto;
    padding: 22vh 0 35vh;
    font-size: clamp(1.7rem, 3.8vw, 4.2rem);
    line-height: 1.35;
    letter-spacing: -0.035em;
    text-wrap: pretty;
  }

  h1 {
    max-width: 950px;
    margin: 0 0 0.6em;
    font-size: clamp(3rem, 8vw, 8rem);
    line-height: 0.94;
    font-weight: 500;
    letter-spacing: -0.055em;
  }

  .text {
    padding-inline: clamp(0.1rem, 0.45vw, 0.45rem);
  }

  article span {
    display: inline-block;
    opacity: 0.18;
    transform: translateY(18px);
    will-change: transform, opacity;
    transition:
      opacity 120ms linear,
      transform 120ms ease-out;
  }

  @media (max-width: 600px) {
    article {
      width: min(100% - 2.5rem, 42rem);
      padding-top: 18vh;
      padding-bottom: 30vh;
      font-size: clamp(1.55rem, 7vw, 2.3rem);
      line-height: 1.42;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    article span {
      opacity: 1 !important;
      transform: none !important;
      transition: none;
    }
  }
</style>
