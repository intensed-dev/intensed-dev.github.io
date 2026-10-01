<script lang="ts">
  import data from '$lib/data.json';

  type LinkItem = {
    name: string;
    handle?: string;
    kind?: string;
    url: string;
  };

  const socials = data.socials as LinkItem[];
  const projects = data.projects as LinkItem[];
  const allItems = [...socials, ...projects];
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
        {#each [...socials, ...socials, ...socials, ...socials] as item, i (item.url + '-' + i)}
          <a class="marquee-item" href={item.url} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            {#if item.handle}<small>{item.handle}</small>{/if}
          </a>
        {/each}
      </div>
    </div>

    <div class="marquee marquee-b">
      <div class="marquee-track">
        {#each [...projects, ...projects, ...projects, ...projects] as item, i (item.url + '-' + i)}
          <a class="marquee-item" href={item.url} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            {#if item.kind}<small>{item.kind}</small>{/if}
          </a>
        {/each}
      </div>
    </div>

    <div class="marquee marquee-c">
      <div class="marquee-track">
        {#each [...allItems, ...allItems, ...allItems, ...allItems] as item, i (item.url + '-' + i)}
          <a class="marquee-item" href={item.url} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            <small>{item.kind ?? item.handle ?? 'social'}</small>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <footer>
    <span>© {new Date().getFullYear()} Intense</span>
    <span>click anything</span>
  </footer>
</main>
