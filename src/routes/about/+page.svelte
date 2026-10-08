<script lang="ts">
  import { onMount, tick } from 'svelte';

  const API_URL = 'https://about-page-bf01.intensed.workers.dev';

  let code = '';
  let loading = false;
  let error = '';
  let authenticated = false;
  let text = '';
  let article: HTMLElement;
  let raf = 0;

  function updateWords() {
    if (!article) return;

    const viewportCenter = window.innerHeight * 0.55;
    const spans = article.querySelectorAll<HTMLElement>('[data-word]');

    for (const span of spans) {
      const rect = span.getBoundingClientRect();
      const distance =
        (rect.top + rect.height / 2 - viewportCenter) /
        (window.innerHeight * 0.42);
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

  async function verifyCode() {
    error = '';

    if (!/^\d{6}$/.test(code)) {
      error = 'enter a six-digit code.';
      return;
    }

    loading = true;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        error = 'invalid code.';
        return;
      }

      text = data.text;
      authenticated = true;
      code = '';
      await tick();
      updateWords();
    } catch {
      error = 'could not connect to the server.';
    } finally {
      loading = false;
    }
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
  {#if !authenticated}
    <section class="lock">
      <div class="lock-content">
        <h1>about me.</h1>
        <p>enter the six-digit code.</p>

        <form on:submit|preventDefault={verifyCode}>
          <input
            bind:value={code}
            type="text"
            inputmode="numeric"
            autocomplete="one-time-code"
            maxlength="6"
            on:input={(event) => {
              code = event.currentTarget.value.replace(/\D/g, '').slice(0, 6);
            }}
            placeholder="000000"
            aria-label="Six-digit code"
            disabled={loading}
          />
          <button type="submit" disabled={loading || code.length !== 6}>
            {loading ? 'checking…' : 'continue →'}
          </button>
        </form>

        {#if error}
          <p class="error" role="alert">{error}</p>
        {/if}
      </div>
    </section>
  {:else}
    <article bind:this={article} aria-label="About Intense">
      <h1>about me.</h1>
      <div class="text">
        {#each text.split(/(\s+)/) as word, i (i)}
          {#if /^\s+$/.test(word)}
            {word}
          {:else}
            <span data-word style="--word-index: {i}">{word}</span>
          {/if}
        {/each}
      </div>
    </article>
  {/if}
</main>

<style>
  main {
    min-height: 100svh;
    background: #000;
    color: #fff;
  }

  .lock {
    min-height: 100svh;
    display: grid;
    place-items: center;
    padding: 2rem;
  }

  .lock-content {
    width: min(620px, 100%);
    text-align: center;
  }

  .lock h1 {
    max-width: 950px;
    margin: 0 0 0.25em;
    font-size: clamp(3rem, 8vw, 8rem);
    line-height: 0.94;
    font-weight: 500;
    letter-spacing: -0.055em;
  }

  .lock-content > p {
    margin: 0 0 2rem;
    opacity: 0.5;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }

  input,
  button {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #2a2a2a;
    background: #050505;
    color: #fff;
    border-radius: 6px;
    font: inherit;
    outline: none;
    transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
  }

  input {
    min-height: 58px;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.25em;
  }

  input:focus {
    border-color: #666;
    background: #0a0a0a;
    box-shadow: 0 0 0 3px rgb(255 255 255 / 6%);
  }

  input::placeholder {
    color: #fff;
    opacity: 0.2;
  }

  button {
    min-height: 52px;
    padding: 0.9rem 1rem;
    cursor: pointer;
    opacity: 0.8;
    transition:
      opacity 160ms ease,
      border-color 160ms ease;
  }

  button:hover:not(:disabled) {
    opacity: 1;
    border-color: #555;
    background: #0b0b0b;
  }

  button:focus-visible {
    border-color: #777;
    box-shadow: 0 0 0 3px rgb(255 255 255 / 6%);
    outline: none;
  }

  button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .error {
    margin-top: 1rem !important;
    color: #fff;
    opacity: 0.65 !important;
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

  article h1 {
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
