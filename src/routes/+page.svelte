<script lang="ts">
  import { onMount } from 'svelte';
  import data from '$lib/data.json';

  type LinkItem = {
    name: string;
    handle?: string;
    kind?: string;
    url: string;
  };

  let popups = $state<Array<LinkItem & { id: number; x: number; y: number; rotation: number }>>([]);
  let nextId = 0;

  const socials = data.socials as LinkItem[];
  const projects = data.projects as LinkItem[];
  const allItems = [...socials, ...projects];

  function addPopup() {
    const item = allItems[Math.floor(Math.random() * allItems.length)];

    popups = [
      ...popups.slice(-7),
      {
        ...item,
        id: nextId++,
        x: 8 + Math.random() * 84,
        y: 12 + Math.random() * 72,
        rotation: -5 + Math.random() * 10
      }
    ];
  }

  onMount(() => {
    const firstTimer = window.setTimeout(addPopup, 1200);
    const interval = window.setInterval(addPopup, 2800);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearInterval(interval);
    };
  });
</script>

<svelte:head>
  <title>Intense.</title>
  <meta
    name="description"
    content="Projects, socials and things made by Intense."
  />
</svelte:head>

<main>
  <header class="intro">
    <p class="eyebrow">intensed.</p>
    <h1>things i make<br />and places i exist.</h1>
  </header>

  <section class="marquees" aria-label="Socials and projects">
    <div class="marquee marquee-a">
      <div class="marquee-track">
        {#each [...socials, ...socials] as item, i (item.url + '-' + i)}
          <a class="marquee-item" href={item.url} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            {#if item.handle}<small>{item.handle}</small>{/if}
          </a>
        {/each}
      </div>
    </div>

    <div class="marquee marquee-b">
      <div class="marquee-track">
        {#each [...projects, ...projects] as item, i (item.url + '-' + i)}
          <a class="marquee-item" href={item.url} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            {#if item.kind}<small>{item.kind}</small>{/if}
          </a>
        {/each}
      </div>
    </div>

    <div class="marquee marquee-c">
      <div class="marquee-track">
        {#each [...allItems, ...allItems] as item, i (item.url + '-' + i)}
          <a class="marquee-item" href={item.url} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            <small>{item.kind ?? item.handle ?? 'social'}</small>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <div class="popup-layer" aria-hidden="true">
    {#each popups as item (item.id)}
      <a
        class="popup"
        href={item.url}
        target="_blank"
        rel="noreferrer"
        style={`left: ${item.x}%; top: ${item.y}%; --rotation: ${item.rotation}deg`}
      >
        <strong>{item.name}</strong>
        <span>{item.kind ?? item.handle ?? 'link'}</span>
      </a>
    {/each}
  </div>

  <footer>
    <span>© {new Date().getFullYear()} Intense</span>
    <span>click anything</span>
  </footer>
</main>
